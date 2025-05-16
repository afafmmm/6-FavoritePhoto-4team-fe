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
    <div className="w-[430px] min-h-[215px] bg-gray-500 text-white px-6 py-4 flex flex-col justify-between border-none">
      {/* 상단 정보 */}
      <div className="flex items-center text-[16px] font-bold gap-2">
        <span className="text-my-pink">LEGENDARY</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-300">풍경</span>
        <div className="ml-auto text-white underline">유디</div>
      </div>

      <div className="border-t border-gray-600 my-3" />

      <div className="flex flex-col gap-5">
        {/* 총 판매 수량 */}
        <div className="flex items-start gap-6">
          <span className="text-lg font-light w-[100px] leading-[50px]">
            총 판매 수량
          </span>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-white w-[180px] h-[52px] justify-between px-6">
                <button onClick={handleDecrease} className="text-2xl">
                  -
                </button>
                <span className="text-xl">{count}</span>
                <button onClick={handleIncrease} className="text-2xl">
                  +
                </button>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-xl font-bold">/ 3</div>
                <div className="text-sm text-gray-300">최대 3장</div>
              </div>
            </div>
          </div>
        </div>

        {/* 장당 가격 */}
        <div className="flex items-center gap-6 relative">
          <span className="text-lg font-light w-[100px]">장당 가격</span>
          <div className="border border-white w-[260px] h-[47px] flex items-center px-6">
            <input
              type="text"
              placeholder="숫자만 입력"
              value={price}
              onChange={handlePriceChange}
              className="bg-transparent text-white outline-none placeholder-gray-400 text-base w-full pr-6"
            />
            <span className="absolute right-5 font-bold">P</span>
          </div>
        </div>
      </div>
    </div>
  );
}
