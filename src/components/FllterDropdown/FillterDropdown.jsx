"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { GiSettingsKnobs } from "react-icons/gi";
import BottomSheet from "../BottomSheet/BottomSheet";

export default function FillterDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // 고정된 등급 목록
  const grades = ["전체", "COMMON", "RARE", "SUPER RARE", "LEGENDARY"];

  const handleSelect = (grade) => {
    const params = new URLSearchParams(searchParams);
    if (grade === "전체") {
      params.delete("grade");
    } else {
      params.set("grade", grade);
    }
    setIsOpen(false);
    setIsBottomSheetOpen(false);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative inline-block w-full">
      {/* 데스크톱용 드롭다운 버튼 */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="hidden md:flex items-center justify-between md:w-[70px] md:h-[22px] lg:w-[70px] lg:h-[35px] bg-black text-white border-none px-2 md:text-700-14 lg:text-700-16"
      >
        <span>등급</span>
        {isOpen ? <GoTriangleUp className="ml-1" /> : <GoTriangleDown className="ml-1" />}
      </button>

      {/* 모바일용 설정 아이콘 */}
      <div
        className="flex justify-center items-center w-[35px] h-[35px] md:hidden cursor-pointer"
        onClick={() => setIsBottomSheetOpen(true)}
      >
        <GiSettingsKnobs className="text-2xl" style={{ transform: "rotate(90deg)" }} />
      </div>

      {/* 데스크톱 드롭다운 메뉴 */}
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

      {/* 모바일 바텀시트 */}
      {isBottomSheetOpen && (
        <BottomSheet onClose={() => setIsBottomSheetOpen(false)} />
      )}
    </div>
  );
}
