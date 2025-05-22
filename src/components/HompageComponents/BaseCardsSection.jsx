import FilterDropdown from "../FllterDropdown/FilterDropdown";
import Search from "../ui/Search";
import Sort from "../ui/Sort";
import SellButton from "../ui/SellButton";
import { Suspense } from "react";
import HomeFallback from "../skeletons/HomeFallback"; // 너가 만든 스켈레톤 컴포넌트
import FilteredCardList from "../ui/FilterCardList";

export default function BaseCardsSection() {
  return (
    <>
      {/* 헤더 */}
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
          <FilterDropdown />
          <Sort />
        </div>
      </div>

      {/* 카드 Suspense 처리 */}
      <Suspense fallback={<HomeFallback  />}>
        <FilteredCardList />
      </Suspense>
    </>
  );
}
