import React from "react";

export default function CardSkeleton() {
  return (
    <div className="flex flex-col gap-2.5 md:gap-5 p-[15px] md:p-5 lg:p-10 border border-white/10 rounded-xs bg-my-black animate-pulse">
      {/* 이미지 영역 */}
      <div className="w-full aspect-[4/3] bg-gray-700 rounded-xs" />

      <div className="flex flex-col gap-2.5 md:gap-5">
        {/* 제목 + 태그 라인 */}
        <div>
          <div className="h-4 md:h-6 w-3/5 bg-gray-600 rounded mb-1.5 md:mb-2.5" />
          <div className="flex items-center justify-between gap-1 md:gap0">
            <div className="flex items-center gap-2.5">
              <div className="h-4 md:h-5 w-16 bg-gray-700 rounded" />
              <div className="h-3 md:h-5 w-[1px] bg-gray-400" />
              <div className="h-4 md:h-5 w-10 bg-gray-700 rounded" />
            </div>
            <div className="h-4 md:h-5 w-20 bg-gray-600 rounded" />
          </div>
        </div>

        {/* 구분선 */}
        <div className="w-full h-[1px] bg-gray-400" />

        {/* 가격 & 잔여 */}
        <div className="flex flex-col gap-[5px] md:gap-2.5">
          <div className="flex justify-between">
            <div className="h-4 w-10 bg-gray-600 rounded" />
            <div className="h-4 w-10 bg-gray-700 rounded" />
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-10 bg-gray-600 rounded" />
            <div className="h-4 w-10 bg-gray-700 rounded" />
          </div>
        </div>
      </div>

      {/* 하단 로고 */}
      <div className="hidden md:flex justify-center mt-2">
        <div className="w-24 h-4 bg-gray-600 rounded" />
      </div>
    </div>
  );
}
