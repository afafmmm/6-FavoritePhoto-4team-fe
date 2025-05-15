"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { GiSettingsKnobs } from "react-icons/gi";

const grades = ["전체", "COMMON", "RARE", "SUPER RARE", "LEGENDARY"];

export default function FillterDropdown() {
  const router = useRouter();
    // 현재 경로 가져오기
  const pathname = usePathname();
  // 쿼리스트링 읽기
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);


 // 등급 클릭 시 쿼리스트링 변경 → 페이지 이동
  const handleSelect = (grade) => {
    const params = new URLSearchParams(searchParams);
    if (grade === "전체") {
      params.delete("grade");
    } else {
      params.set("grade", grade);
    }
    setIsOpen(false);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between md:w-[70px] md:h-[22px] lg:w-[70px] lg:h-[35px] bg-black text-white border-none px-2 md:text-700-14 lg:text-700-16"
      >
        {/* 모바일용 아이콘 (375px 이하) */}
        <div className="flex justify-center items-center w-full h-full md:hidden">
          <GiSettingsKnobs
            className="text-2xl"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>

        {/* 데스크톱용 텍스트 + 아이콘 */}
        <div className="hidden md:flex items-center">
          <span>등급</span>
          {isOpen ? (
            <GoTriangleUp className="ml-1" />
          ) : (
            <GoTriangleDown className="ml-1" />
          )}
        </div>
      </button>

      {isOpen && (
        <ul className="absolute mt-2 bg-black border text-white w-[134px] z-10">
          {grades.map((grade) => (
            <li
              key={grade}
              onClick={() => handleSelect(grade)}
              className="hover:bg-gray-700 px-4 py-2 cursor-pointer"
            >
              {grade}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
