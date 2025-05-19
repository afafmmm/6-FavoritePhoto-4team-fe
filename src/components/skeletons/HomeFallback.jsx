import React from "react";

export default function HomeFallback() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="bg-my-black text-white w-full px-2 py-2 md:px-5 md:py-5 lg:px-8 lg:py-8 border border-gray-800 animate-pulse"
        >
          {/* 이미지 영역 */}
          <div className="w-full aspect-[4/3] relative mb-3 md:mb-5 bg-black" />

          {/* 제목 */}
          <h3 className="text-700-14 md:text-700-22 truncate mb-1 bg-gray-500 rounded h-4 w-3/5" />

          {/* 등급, 카테고리, 작성자 */}
          <div className="flex items-center text-400-10 md:text-400-16 gap-1.5">
            {/* GradeTag 대체 */}
            <div className="md:hidden h-3 w-8 bg-gray-500 rounded" />
            <div className="hidden md:block h-4 w-12 bg-gray-500 rounded" />

            <span className="text-gray-400">|</span>
            <div className="h-3 w-10 bg-gray-500 rounded" />


            <div className="ml-auto h-3 w-10 bg-gray-500 rounded underline" />
          </div>

          {/* 구분선 */}
          <div className="border-t border-gray-700 my-3" />

          {/* 가격 / 수량,잔여 */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-300 text-300-10 md:text-300-16">
                가격
              </span>
              <span className="text-400-10 md:text-400-16 bg-gray-500 rounded h-3 w-10" />
            </div>

            <div className="flex justify-between text-gray-300 text-300-10 md:text-300-16">
              <span>잔여</span>
              <span className="flex gap-1 items-center">
                <span className="bg-gray-500 rounded h-3 w-6" />
                <span>/</span>
                <span className="bg-gray-500 rounded h-3 w-6" />
              </span>
            </div>
          </div>

          {/* 설명, 버튼 영역 */}
          <div className="hidden  mt-4 bg-gray-600 h-8 w-full rounded" />

          {/* 로고 (최애) */}
          <div className="hidden md:flex justify-center mt-4">
            <div className="w-20 h-4 bg-black " />
          </div>
        </div>
      ))}
    </>
  );
}
