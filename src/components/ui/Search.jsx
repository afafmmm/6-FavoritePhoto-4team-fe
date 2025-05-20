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
    <div 
    className="
      w-full lg:w-80 h-11 lg:h-12 px-5 py-2.5
      flex items-center 
      border border-gray-200 rounded-xs
    ">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="검색"
        className="
          flex-1 mr-2
          text-300-14
         text-white placeholder-gray-400  outline-none
        "
      />
      <div className="w-[22px] h-[22px]">
        <Image src={searchIcon} alt="검색" className="block w-full h-full" />
      </div>
    </div>
  );
}