"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const route = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!searchText) return;

    route.push(`/events/${searchText}`);
    setSearchText("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        type="text"
        spellCheck="false"
        placeholder="Search events in any city"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50  focus:ring-2 focus:bg-white/10 transition"
      />
    </form>
  );
}
