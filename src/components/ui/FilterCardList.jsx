// components/FilteredCardList.tsx (❌ 'use client' 제거)

import BaseCardList from "./BaseCardList";

export default async function FilteredCardList( searchParams ) {
  const res = await fetch("http://localhost:3000/data/cards.json", { cache: 'no-store' });
  const data = await res.json();

  const gradeFilter = searchParams.get("grade");
  const genreFilter = searchParams.get("genre");
  const saleFilter = searchParams.get("sale");

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

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3 lg:gap-20">
      <BaseCardList cards={filtered} />
    </div>
  );
}
