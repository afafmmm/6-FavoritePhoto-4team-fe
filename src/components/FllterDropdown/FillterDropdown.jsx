"use client";

import { useState, useEffect, useRef } from "react";
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
  const [isSmOrLarger, setIsSmOrLarger] = useState(false);

  const dropdownRef = useRef(null);
  const SM_WIDTH = 744;

  // 윈도우 사이즈 감지
  useEffect(() => {
    function handleResize() {
      const isSm = window.innerWidth >= SM_WIDTH;
      setIsSmOrLarger(isSm);
      if (isSm && isBottomSheetOpen) setIsBottomSheetOpen(false);
      if (!isSm && isOpen) setIsOpen(false);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isBottomSheetOpen, isOpen]);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
        className="hidden md:flex items-center justify-between md:w-[70px] md:h-[22px] lg:w-[70px] lg:h-[35px]  text-white border-none px-2 md:text-700-14 lg:text-700-16 cursor-pointer"
      >
        <span>등급</span>
        {isOpen ? (
          <GoTriangleUp className="ml-1" />
        ) : (
          <GoTriangleDown className="ml-1" />
        )}
      </button>

      {/* 모바일용 설정 아이콘 */}
      <div
        className="flex justify-center items-center w-[35px] h-[35px] border border-gray-200 rounded-xs md:hidden cursor-pointer"
        onClick={() => setIsBottomSheetOpen(true)}
      >
        <GiSettingsKnobs
          className="w-5 h-5 font-bold"
          style={{ transform: "rotate(90deg)" }}
        />
      </div>

      {/* 데스크톱 드롭다운 메뉴 */}
      {isOpen && !!isSmOrLarger && (
        <ul
          ref={dropdownRef}
          className="absolute mt-2 bg-black border text-white w-[134px] z-10"
        >
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
      {isBottomSheetOpen && !isSmOrLarger && (
        <>
          <div
            className="fixed inset-0 bg-black z-80"
            style={{ opacity: 0.5 }}
            onClick={() => setIsBottomSheetOpen(false)}
          />

          {/* 바텀시트 */}
          <BottomSheet onClose={() => setIsBottomSheetOpen(false)} />
        </>
      )}
    </div>
  );
}