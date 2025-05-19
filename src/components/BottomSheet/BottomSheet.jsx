"use client";

import { useState, useEffect } from "react";

import FilterTab from "./FilterTab";
import FilterPanelGrade from "./FilterPanelGrade";
import FilterPanelGenre from "./FilterPanelGenre";
import FilterPanelSale from "./FilterPanelSale";
import { useFilterQuery } from "@/lib/api/api-bottomfilter";

export default function BottomSheet({ onClose }) {
  const [selectedTab, setSelectedTab] = useState("grade");
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [filter, setFilter] = useState({
    grade: null,
    genre: null,
    sale: null,
  });
  const [loading, setLoading] = useState(false);
  const [counts, setCounts] = useState({
    grade: {},
    genre: {},
    sale: {},
  });

  const { refetch } = useFilterQuery(filter);

  // 전체 데이터에서 한 번만 카운트 계산하는
  useEffect(() => {
    async function fetchAllAndCount() {
      try {
        setLoading(true);
        // 전체 데이터 요청 (필터 없이)
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

  // 필터 변경 시 데이터 받아서 카운트 집계
  useEffect(() => {
    async function fetchFiltered() {
      try {
        setLoading(true);
        const { data } = await refetch();
        // 필터된 사진 목록을 활용 (필요하면 상태로 관리)
      } catch (err) {
        console.error("필터 사진 요청 실패:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFiltered();
  }, [filter, refetch]);

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

  return (
    <div className="fixed flex flex-col justify-between bottom-0 left-0 w-full h-120 bg-black text-white p-4 z-50 border-t border-gray-700 rounded-t-2xl max-h-[70vh] overflow-auto">
      <div>
        <div className="relative text-center">
          <h2 className="text-lg font-bold">필터</h2>
          <button
            onClick={onClose}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl text-gray-400 font-light"
          >
            ×
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
            selectedSale={filter.sale}
            onSelectSale={(saleKey) =>
              setFilter((prev) => ({ ...prev, sale: saleKey }))
            }
          />
        )}
      </div>

      <button
        className="w-full bg-yellow-400 text-black py-3 font-bold mt-4 rounded disabled:opacity-50"
        onClick={handleApply}
        disabled={loading}
      >
        {loading ? "불러오는 중..." : "포토보기"}
      </button>
    </div>
  );
}
