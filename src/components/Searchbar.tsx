"use client";

import React from "react";
import { Input } from "./ui/input";
import { useQueryState } from "nuqs";

export default function Searchbar() {
  const [query, setQuery] = useQueryState("query");

  return (
    <Input value={query || ""} onChange={(e) => setQuery(e.target.value)} />
  );
}
