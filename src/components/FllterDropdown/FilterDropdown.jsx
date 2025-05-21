"use client";

/*
 <FilterDropdown iconSize={45} /> 이렇게 쓰면 아이콘이 45px로 나와여
*/
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { GiSettingsKnobs } from "react-icons/gi";
import BottomSheet from "../BottomSheet/BottomSheet";

const grades = ["전체", "COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
const genres = ["전체", "여행", "풍경", "인물", "사물"];
const sales = ["전체", "판매중", "판매완료"];

export default function FilterDropdown({ iconSize = 35 }) {
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

  return (
    <div className="flex gap-4 items-center relative w-full" ref={dropdownRef}>
      {/* 데스크톱 드롭다운 버튼들 */}
      {["grade", "genre", "sale"].map((type) => (
        <div key={type} className="relative hidden md:block">
          <button
            onClick={() =>
              setOpenFilter((prev) => (prev === type ? null : type))
            }
            className={`flex justify-between items-center h-[22px] lg:h-[24px] text-white border-none md:text-700-14 lg:text-700-16 cursor-pointer ${buttonWidths[type]}`}
          >
            <span>
              {type === "grade"
                ? "등급"
                : type === "genre"
                ? "장르"
                : "매진여부"}
            </span>
            {openFilter === type ? (
              <GoTriangleUp className="ml-1" />
            ) : (
              <GoTriangleDown className="ml-1" />
            )}
          </button>

          {/* 해당 버튼 밑에 드롭다운 표시 */}
          {openFilter === type && isSmOrLarger && (
            <ul className="absolute left-0 mt-2 bg-black border text-white w-[134px] z-10">
              {(type === "grade"
                ? grades
                : type === "genre"
                ? genres
                : sales
              ).map((item) => (
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

      {/* 모바일 바텀시트 */}
      {isBottomSheetOpen && !isSmOrLarger && (
        <>
          <div
            className="fixed inset-0 bg-black z-8889"
            style={{ opacity: 0.5 }}
            onClick={() => setIsBottomSheetOpen(false)}
          />
          <BottomSheet onClose={() => setIsBottomSheetOpen(false)} />
        </>
      )}
    </div>
  );
}
