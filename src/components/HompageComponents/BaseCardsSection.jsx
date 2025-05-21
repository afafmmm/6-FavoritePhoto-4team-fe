"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BaseCardList from "../ui/BaseCardList";
import FilterDropdown from "../FllterDropdown/FilterDropdown";
import Search from "../ui/Search";
import Sort from "../ui/Sort";
import SellButton from "../ui/SellButton";

export default function BaseCardsSection() {
  const [cards, setCards] = useState([]);
  const searchParams = useSearchParams();

  // 쿼리 파라미터
  const gradeFilter = searchParams.get("grade");
  const genreFilter = searchParams.get("genre");
  const saleFilter = searchParams.get("sale");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/cards.json");
      const data = await res.json();

      const filtered = data.filter((card) => {
        const matchGrade = !gradeFilter || card.grade === gradeFilter;
        const matchGenre = !genreFilter || card.genre === genreFilter;
        const matchSale =
          !saleFilter ||
          (saleFilter === "판매중"
            ? card.sale === "판매중"
            : card.sale === "판매완료");

        return matchGrade && matchGenre && matchSale;
      });

      setCards(filtered);
    };

    fetchData();
  }, [gradeFilter, genreFilter, saleFilter]);

  return (
    <>
      {/* 헤더 영역 */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h2 className="hidden md:block title-48 lg:title-62">마켓플레이스</h2>
          <SellButton />
        </div>
        <div className="hidden md:block w-full h-0.5 bg-gray-100" />
      </div>

      {/* 검색 & 필터 & 정렬 */}
      <div className="py-5">
        <div className="flex flex-col gap-4">
          <div className="md:hidden">
            <Search />
          </div>
          <div className="md:hidden w-full h-[1px] bg-gray-400" />
        </div>
        <div className="flex items-center justify-between md:justify-start my-4 md:my-0">
          <div className="hidden md:block">
            <Search />
          </div>
          <FilterDropdown/>
          <Sort />
        </div>
      </div>

      {/* 카드 영역 */}
      <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3 lg:gap-20">
        <BaseCardList cards={cards} />
      </div>
    </>
  );
}
