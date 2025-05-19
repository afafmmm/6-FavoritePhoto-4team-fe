"use client";

import { useState, useEffect, useMemo } from "react";
import FilterTab from "./FilterTab";
import FilterPanelGrade from "./FilterPanelGrade";
import FilterPanelGenre from "./FilterPanelGenre";
import FilterPanelSale from "./FilterPanelSale";
import { useFilterQuery } from "@/lib/api/api-bottomfilter";
import { IoClose } from "react-icons/io5";
import { RiResetLeftFill } from "react-icons/ri";

export default function BottomSheet({ onClose }) {
  const [selectedTab, setSelectedTab] = useState("grade");
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedSale, setSelectedSale] = useState(null);
  const [loading, setLoading] = useState(false);
  const [counts, setCounts] = useState({
    grade: {},
    genre: {},
    sale: {},
  });
  const [filteredCount, setFilteredCount] = useState(0);

  // 🔑 실시간 필터 상태를 계산
  const currentFilter = useMemo(
    () => ({
      grade: selectedGrades.length > 0 ? selectedGrades : null,
      genre: selectedGenres.length > 0 ? selectedGenres : null,
      sale: selectedSale ?? null,
    }),
    [selectedGrades, selectedGenres, selectedSale]
  );

  const { refetch } = useFilterQuery(currentFilter);

  useEffect(() => {
    async function fetchAllAndCount() {
      try {
        setLoading(true);
        const res = await fetch("/api/mock");
        const allData = await res.json();

        setCounts({
          grade: countByKey(allData, "grade"),
          genre: countByKey(allData, "genre"),
          sale: countByKey(allData, "sale"),
        });
      } catch (err) {
        console.error("전체 데이터 요청 실패:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAllAndCount();
  }, []);

  // 선택 항목이 변경될 때마다 결과 개수 갱신
  useEffect(() => {
    async function fetchFiltered() {
      try {
        setLoading(true);
        const { data } = await refetch();
        setFilteredCount(data.length);
      } catch (err) {
        console.error("필터 사진 요청 실패:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFiltered();
  }, [currentFilter, refetch]);

  function countByKey(items, key) {
    return items.reduce((acc, item) => {
      acc[item[key]] = (acc[item[key]] || 0) + 1;
      return acc;
    }, {});
  }

  const handleApply = async () => {
    try {
      setLoading(true);
      const { data } = await refetch();
      console.log("필터 결과:", data);
      onClose();
    } catch (err) {
      console.error("API 요청 실패:", err);
    } finally {
      setLoading(false);
    }
  };
  const isFilterActive =
    selectedGrades.length > 0 ||
    selectedGenres.length > 0 ||
    selectedSale !== null;

  const handleReset = () => {
    setSelectedGrades([]);
    setSelectedGenres([]);
    setSelectedSale(null);
    setFilteredCount(0);
  };

  return (
    <div className="fixed flex flex-col justify-between bottom-0 left-0 w-full h-120 bg-[#1B1B1B] text-white p-4 z-50 border-t border-gray-700 rounded-t-2xl max-h-[70vh] overflow-auto">
      <div>
        <div className="relative text-center">
          <p className="text-lg font-bold text-400-16 text-gray-400">필터</p>
          <button
            onClick={onClose}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl text-gray-400 font-light cursor-pointer"
          >
            <IoClose />
          </button>
        </div>

        <FilterTab selected={selectedTab} onChange={setSelectedTab} />

        {selectedTab === "grade" && (
          <FilterPanelGrade
            grades={counts.grade}
            selectedGrades={selectedGrades}
            onSelectGrade={setSelectedGrades}
          />
        )}
        {selectedTab === "genre" && (
          <FilterPanelGenre
            counts={counts.genre}
            selectedGenres={selectedGenres}
            onSelectGenres={setSelectedGenres}
          />
        )}
        {selectedTab === "sale" && (
          <FilterPanelSale
            sales={counts.sale}
            selectedSale={selectedSale}
            onSelectSale={setSelectedSale}
          />
        )}
      </div>

      <div className="flex items-center">
        <div
          className="flex items-center justify-center w-[54px] h-[54px] cursor-pointer"
          onClick={handleReset}
        >
          <RiResetLeftFill className="w-[21px] h-[21px]" />
        </div>

        <button
          className="w-full bg-yellow-400 text-black py-3 font-bold mt-4 rounded disabled:opacity-50 cursor-pointer"
          onClick={handleApply}
          disabled={loading}
        >
          {loading
            ? "불러오는 중..."
            : isFilterActive
            ? `${filteredCount}개 포토보기`
            : "포토보기"}
        </button>
      </div>
    </div>
  );
}
