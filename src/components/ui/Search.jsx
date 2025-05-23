"use client";

import React, { useState } from "react";
import searchIcon from "@/assets/search.svg";
import Image from "next/image";

export default function Search({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(keyword.trim());
    }
  };

  return (
    <div className="relative w-full h-11 md:w-52 md:h-11 lg:w-[320px] lg:h-12">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="검색"
        className="w-full h-full px-4 py-3 pr-10 rounded-xs border border-gray-200 bg-my-black text-white placeholder-gray-400 placeholder:text-300-14 placeholder:lg:text-300-16 outline-none "
      />
      <div className="absolute right-5 top-6 -translate-y-1/2 w-5 h-5">
        <Image src={searchIcon} alt="검색" width={20} height={20} />
      </div>
    </div>
  );
}