import React, { useState } from "react";
import { Input } from "./ui/input";
import { useAtom } from "jotai";
import { commentsAtom } from "@/atoms";

export default function Card({ card }: { card: Record<string, any> }) {
  const [input, setInput] = useState("");
  const [globalComments, setGlobalComments] = useAtom(commentsAtom);
  const [comments, setComments] = useState(globalComments[card.id] || []);

  const submitComment = () => {
    setGlobalComments((globalComments[card.id] = [...comments, input]));
    setComments([...comments, input]);
    console.log(globalComments);
  };

  return (
    <div className="flex flex-col gap-2">
      <img alt={card.name} src={card.imageUrl} />
      {comments.map((comment: string) => (
        <p key={comment}>{comment}</p>
      ))}
      <div className="flex items-center gap-2">
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => submitComment()}>Post</button>
      </div>
    </div>
  );
}
