"use client";

import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import clsx from "clsx";
import useSort from "@/hooks/useSort";

const options = ["낮은 가격순", "높은 가격순", "최신순"]; // 정렬 옵션

export default function Sort({ onClick }) {
  const { isOpen, order, sortRef, toggle, handleSelect, getSortParam } =
    useSort(); // hooks에서 만든 함수들 가져옴

  function handleOptionClick(option) {
    handleSelect(option);
    const linkedValue = getSortParam(option);
    if (onClick) onClick(linkedValue);
  }

  return (
    <div ref={sortRef} className="w-[130px] md:w-[140px] lg:w-[180px] relative">
      <button
        onClick={toggle}
        className="rounded-[2px] w-full h-[50px] border-1 px-[20px] mb-[5px] border-gray-200 flex justify-between items-center bg-my-black cursor-pointer"
      >
        <span className="text-400-12 md:text-400-14 lg:text-400-16">
          {order}
        </span>
        <MdArrowDropDown
          className={clsx(isOpen && "rotate-180", "duration-200")}
        />
      </button>

      {isOpen && (
        <div className="rounded-[2px] w-full border-1 flex flex-col border-gray- bg-my-black200 gap-[15px] py-[15px] text-400-12 md:text-400-14 lg:text-400-16 absolute bg-my-black">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => handleOptionClick(opt)}
              className="px-[20px] cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
