"use client";

import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import clsx from "clsx";
import useDropdown from "@/hooks/useDrowdown";

export function GradeSelect({ onChange }) {
  const options = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const { isOpen, selected, dropdownRef, toggle, handleSelect } =
    useDropdown("");

  const handleOptionClick = (option) => {
    handleSelect(option);
    if (onChange) onChange(option);
  };

  const isPlaceholder = !selected;

  return (
    <div
      ref={dropdownRef}
      className="bg-transparent flex flex-col gap-1 w-full max-w-[345px] md:max-w-110 lg:max-w-130"
    >
      <label className="text-700-16 lg:text-700-20">등급</label>

      <button
        type="button"
        onClick={toggle}
        className="focus:outline-none border border-gray-200 rounded-[2px] px-5 py-[18px] w-full text-400-14 lg:text-400-16 cursor-pointer h-[55px] lg:h-15 relative flex justify-between items-center"
      >
        <div className={clsx(isPlaceholder && "text-gray-200")}>
          {isPlaceholder ? "등급을 선택해 주세요" : selected}
        </div>
        <MdArrowDropDown
          className={clsx(
            isOpen && "rotate-180 duration-200",
            "w-6 h-6 lg:w-7 lg:h-7"
          )}
        />
      </button>

      {isOpen && (
        <div className="border border-gray-200 rounded-[2px] px-5 flex flex-col gap-5 h-[192px] justify-center text-400-14 lg:text-400-16">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => handleOptionClick(opt)}
              className="cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function GenreSelect({ onChange }) {
  const options = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const { isOpen, selected, dropdownRef, toggle, handleSelect } =
    useDropdown("");

  const handleOptionClick = (option) => {
    handleSelect(option);
    if (onChange) onChange(option);
  };

  const isPlaceholder = !selected;

  return (
    <div
      ref={dropdownRef}
      className="bg-transparent flex flex-col gap-1 w-full max-w-[345px] md:max-w-110 lg:max-w-130"
    >
      <label className="text-700-16 lg:text-700-20">장르</label>

      <button
        type="button"
        onClick={toggle}
        className="focus:outline-none border border-gray-200 rounded-[2px] px-5 py-[18px] w-full text-400-14 lg:text-400-16 cursor-pointer h-[55px] lg:h-15 relative flex justify-between items-center"
      >
        <div className={clsx(isPlaceholder && "text-gray-200")}>
          {isPlaceholder ? "장르를 선택해 주세요" : selected}
        </div>
        <MdArrowDropDown
          className={clsx(
            isOpen && "rotate-180 duration-200",
            "w-6 h-6 lg:w-7 lg:h-7"
          )}
        />
      </button>

      {isOpen && (
        <div className="border border-gray-200 rounded-[2px] px-5 flex flex-col gap-5 h-[192px] justify-center text-400-14 lg:text-400-16">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => handleOptionClick(opt)}
              className="cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
