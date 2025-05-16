"use client";

import React, { useState } from "react";

export default function MyCardDetail() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState("");

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    if (count < 3) setCount(count + 1);
  };

  // 장당가격 - 숫자만 입력하도록
  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPrice(value);
    }
  };

  return (
    <div className="lg:w-[430px] lg:min-h-[215px] w-[340px] min-h-[190px] bg-gray-500 text-white px-4 py-3 lg:px-6 lg:py-4 flex flex-col justify-between border-none text-sm lg:text-base">
      {/* 상단 정보 */}
      <div className="flex items-center font-bold gap-2 text-sm lg:text-[16px]">
        <span className="text-my-pink">LEGENDARY</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-300">풍경</span>
        <div className="ml-auto text-white underline">유디</div>
      </div>

      <div className="border-t border-gray-600 my-3" />

      <div className="flex flex-col gap-3">
        {/* 총 판매 수량 */}
        <div className="flex items-start gap-6">
          <span className="w-[100px] leading-[45px] font-light text-xs lg:text-lg">
            총 판매 수량
          </span>
          <div className="flex items-start gap-4">
            <div className="flex items-center border border-white w-[160px] lg:w-[180px] h-[45px] lg:h-[52px] justify-between px-4 lg:px-6">
              <button onClick={handleDecrease} className="text-xl lg:text-2xl">
                -
              </button>
              <span className="text-lg lg:text-xl">{count}</span>
              <button onClick={handleIncrease} className="text-xl lg:text-2xl">
                +
              </button>
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="text-lg lg:text-xl font-bold">/ 3</div>
              <div className="text-[10px] lg:text-sm text-gray-300 whitespace-nowrap leading-none pl-[1px]">
                최대 3장
              </div>
            </div>
          </div>
        </div>

        {/* 장당 가격 */}
        <div className="flex items-center gap-6 relative">
          <span className="w-[100px] font-light text-xs lg:text-lg">
            장당 가격
          </span>
          <div className="border border-white w-[290px] lg:w-[260px] h-[45px] flex items-center px-4 lg:px-6">
            <input
              type="text"
              placeholder="숫자만 입력"
              value={price}
              onChange={handlePriceChange}
              className="bg-transparent text-white outline-none placeholder-gray-400 text-sm lg:text-base w-full pr-5 lg:pr-6"
            />
            <span className="absolute right-5 font-bold text-sm lg:text-base">
              P
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
