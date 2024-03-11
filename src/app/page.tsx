import SearchResults from "@/components/SearchResults";
import Searchbar from "@/components/Searchbar";
import React from "react";

export default async function Home() {
  return (
    <div className="flex flex-col items-center m-20">
      <Searchbar />
      <SearchResults />
    </div>
  );
}
