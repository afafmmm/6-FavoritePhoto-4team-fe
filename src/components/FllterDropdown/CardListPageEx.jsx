"use client";
import FillterDropdown from "@/components/FllterDropdown/FilterDropdown";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function CardListPageEx() {
  const searchParams = useSearchParams();
  const gradeParam = searchParams.get("grade");
  const genreParam = searchParams.get("genre"); 
  const saleParam = searchParams.get("sale"); 

  const [allCards, setAllCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);

  // 퍼블릭 폴더에서 카드 데이터 fetch
  useEffect(() => {
    fetch("/data/cards.json")
      .then((res) => res.json())
      .then((data) => {
        setAllCards(data);
        setVisibleCards(data);
      });
  }, []);

  // 쿼리 변경 시 필터링
  useEffect(() => {
    let filtered = allCards;

    if (gradeParam) {
      filtered = filtered.filter((card) => card.grade === gradeParam);
    }

    if (genreParam) {
      filtered = filtered.filter((card) => card.category === genreParam);
    }

    if (saleParam) {
      filtered = filtered.filter((card) => card.sale === saleParam);
    }

    setVisibleCards(filtered);
  }, [gradeParam, genreParam, saleParam, allCards]);

  return (
    <div className="p-6 space-y-4">
      <FillterDropdown />

      {/* 필터 조건에 맞는 카드가 없을 때 안내 메시지 */}
      {visibleCards.length === 0 ? (
        <p className="text-white text-center">조건에 맞는 카드가 없습니다.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="bg-gray-800 text-white p-4 rounded shadow"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <p className="font-bold">{card.title}</p>
              <p>등급: {card.grade}</p>
              <p>카테고리: {card.category}</p>
              <p>소유자: {card.owner}</p>
              <p>가격: {card.price} 포인트</p>
              <p>{card.amountLabel}: {card.amount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
