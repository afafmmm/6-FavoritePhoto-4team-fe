import fs from "fs/promises";
import path from "path";

import BaseCardList from "../ui/BaseCardList";
import FilterDropdown from "../FllterDropdown/FilterDropdown";
import Search from "../ui/Search";
import Sort from "../ui/Sort";
import { delay } from "@/delay";

export default async function BaseCardsSection({ grade, genre, sale }) {
  // 의도된 딜레이 (예: 로딩 시뮬레이션)
  await delay(3000);

  // 파일 경로
  const filePath = path.join(process.cwd(), "public/data/cards.json");
  // JSON 파일 읽기
  const jsonData = await fs.readFile(filePath, "utf-8");
  // JSON 파싱
  const data = JSON.parse(jsonData);

  // 필터링 (grade, genre, sale 조건 적용)
  const filtered = data.filter((card) => {
    const matchGrade = !grade || card.grade === grade;
    const matchGenre = !genre || card.genre === genre;
    const matchSale =
      !sale || (sale === "판매중" ? card.sale === "판매중" : card.sale === "판매완료");

    return matchGrade && matchGenre && matchSale;
  });

  return (
    <>
      {/* 검색 & 필터 & 정렬 UI */}
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
          <FilterDropdown visibleFilters={["grade", "genre", "method", "sale"]} />
          <Sort />
        </div>
      </div>

      {/* 카드 리스트 출력 */}
      <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3 lg:gap-20">
        <BaseCardList cards={filtered} />
      </div>
    </>
  );
}
