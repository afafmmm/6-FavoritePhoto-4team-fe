import FilterDropdown from "@/components/FllterDropdown/FilterDropdown";
import HomeFallback from "@/components/skeletons/HomeFallback";
import BaseCards from "@/components/ui/BaseCards";
import Search from "@/components/ui/Search";
import SellButton from "@/components/ui/SellButton";
import Sort from "@/components/ui/Sort";
import { Suspense } from "react";

export default function HomePage({ searchParams }) {
  return ( 
      <div>
        <div className="md:py-[30px] lg:py-14">
          {/* 마켓플레이스 Header */}
          <div className="flex flex-col gap-5 ">
            <div className="flex items-center justify-between">
              <h2 className="hidden md:block title-48 lg:title-62 text-nowrap">마켓플레이스</h2>
              <SellButton />
            </div>
            <div className="hidden md:block w-full h-0.5 bg-gray-100"></div>
          </div>

          {/* 마켓플레이스 Filter + Search */}
          <div className="py-5">
            <div className="flex flex-col gap-4">
              <div className="md:hidden"><Search /></div>
              <div className="md:hidden w-full h-[1px] bg-gray-400"></div>
            </div>
            <div className="flex items-center justify-between md:justify-start my-4 md:my-0">
              <div className="hidden md:block"><Search /></div>
              <Suspense fallback={<div>Filter...</div>}>
                <FilterDropdown />
              </Suspense>
              <Sort />
            </div>
          </div>
        </div>
 
        {/* 카드 영역 */}
        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3 lg:gap-20 ">
          <Suspense  fallback={<HomeFallback />}>
            <BaseCards searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
  )
}