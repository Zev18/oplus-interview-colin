"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import Image from "next/image";
import Card from "./Card";

export default function SearchResults() {
  const [query] = useQueryState("query");
  const [cards, setCards] = useState<Record<string, any>>([]);

  const fetchCards = useCallback(async () => {
    const url = new URL("https://api.magicthegathering.io/v1/cards");
    if (query) {
      url.searchParams.set("name", query);
    }
    const data = await fetch(url);
    const cards = await data.json();
    return cards;
  }, [query]);

  useEffect(() => {
    const getCards = async () => {
      const cardsData = await fetchCards();
      setCards(cardsData.cards);
    };

    if (query) {
      getCards();
    }
  }, [query, fetchCards]);

  return (
    query && (
      <div>
        <div className="grid grid-cols-4 my-4 gap-4">
          {cards.map((card: Record<string, any>) => {
            return <Card key={card.id} card={card} />;
          })}
        </div>
      </div>
    )
  );
}
