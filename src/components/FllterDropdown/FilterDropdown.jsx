"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { GiSettingsKnobs } from "react-icons/gi";
import BottomSheet from "../BottomSheet/BottomSheet";

const grades = ["전체", "COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
const genres = ["전체", "여행", "풍경", "인물", "사물"];
const sales = ["전체", "판매중", "판매완료"];
const methods = ["전체", "교환중", "교환완료료"];

export default function FilterDropdown({ iconSize = 35, visibleFilters = ["grade", "genre", "sale", "method"] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [openFilter, setOpenFilter] = useState(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isSmOrLarger, setIsSmOrLarger] = useState(false);
  const dropdownRef = useRef(null);
  const SM_WIDTH = 744;

  const buttonWidths = {
    grade: "md:w-[58px] lg:w-[64px]",
    genre: "md:w-[58px] lg:w-[64px]",
    sale: "md:w-[84px] lg:w-[93px]",
    method: "md:w-[84px] lg:w-[93px]",
  };

  useEffect(() => {
    function handleResize() {
      const isSm = window.innerWidth >= SM_WIDTH;
      setIsSmOrLarger(isSm);
      if (isSm) setIsBottomSheetOpen(false);
      else setOpenFilter(null);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenFilter(null);
      }
    }

    if (openFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openFilter]);

  const handleSelect = (filterType, value) => {
    const params = new URLSearchParams(searchParams);

    if (value === "전체") {
      params.delete(filterType);
    } else {
      params.set(filterType, value);
    }

    setOpenFilter(null);
    setIsBottomSheetOpen(false);
    router.push(`${pathname}?${params.toString()}`);
  };

  const filterOptions = {
    grade: grades,
    genre: genres,
    sale: sales,
    method: methods,
  };

  const labels = {
    grade: "등급",
    genre: "장르",
    sale: "매진여부",
    method: "판매방법",
  };

  return (
    <div className="flex gap-4 items-center relative w-full flex-wrap md:flex-nowrap" ref={dropdownRef}>
      {/* 데스크톱 드롭다운 버튼들 */}
      {visibleFilters.map((type) => (
        <div key={type} className="relative hidden md:block">
          <button
            onClick={() =>
              setOpenFilter((prev) => (prev === type ? null : type))
            }
            className={`flex justify-center md:gap-3 lg:gap-3.5  items-center h-[22px] lg:h-[24px] text-white border-none md:text-700-14 lg:text-700-16 cursor-pointer `}
          >
            <span>{labels[type]}</span>
            {openFilter === type ? (
              <GoTriangleUp className="ml-1" />
            ) : (
              <GoTriangleDown className="ml-1" />
            )}
          </button>

          {/* 해당 버튼 밑에 드롭다운 표시 */}
          {openFilter === type && isSmOrLarger && (
            <ul className="absolute left-0 mt-2 bg-black border text-white w-[134px] z-10">
              {filterOptions[type].map((item) => (
                <li
                  key={item}
                  onClick={() => handleSelect(type, item)}
                  className="hover:bg-gray-700 px-4 py-2 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* 모바일 설정 아이콘 */}
      {visibleFilters.length > 0 && (
        <div
          className={`flex justify-center items-center border border-gray-200 rounded-xs md:hidden cursor-pointer`}
          style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`,
          }}
          onClick={() => setIsBottomSheetOpen(true)}
        >
          <GiSettingsKnobs
            className="w-5 h-5 font-bold"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
      )}

      {/* 모바일 바텀시트 */}
      {isBottomSheetOpen && !isSmOrLarger && (
        <>
          <div
            className="fixed inset-0 bg-black z-8889"
            style={{ opacity: 0.5 }}
            onClick={() => setIsBottomSheetOpen(false)}
          />
          <BottomSheet
            onClose={() => setIsBottomSheetOpen(false)}
            filters={visibleFilters}
          />
        </>
      )}
    </div>
  );
}
