"use client";

import React from "react";
import exchangeIcon from "@/assets/exchange.svg";
import Image from "next/image";
import Button from "./Button";

export default function CardSeller() {
  return (
    <div className="lg:w-[340px] w-[280px] bg-my-black text-white p-4 lg:p-5 flex flex-col justify-between lg:min-h-[550px] min-h-[500px] text-sm lg:text-base">
      {/* 상단 정보 */}
      <div className="flex items-center font-bold gap-2 mb-2 text-sm lg:text-[15px]">
        <span className="text-my-pink">LEGENDARY</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-400">풍경</span>
        <div className="ml-auto text-white underline">미쓰손</div>
      </div>

      <div className="border-t border-gray-600 w-full mb-4" />

      {/* 설명 */}
      <p className="text-gray-200 mb-6 leading-relaxed text-xs lg:text-sm">
        우리집 앞마당 포토카드입니다. 우리집 앞마당 포토카드입니다. 우리집
        앞마당 포토카드입니다.
      </p>

      <div className="border-t border-gray-600 w-full mb-4" />

      {/* 가격/잔여 */}
      <div className="flex flex-col gap-1 mb-5 text-sm lg:text-base">
        <div className="flex justify-between">
          <span className="text-gray-300 text-xs">가격</span>
          <span className="font-bold">4 P</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300 text-xs">잔여</span>
          <span className="font-bold">2 / 5</span>
        </div>
      </div>

      {/* 교환 희망 정보 */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <Image src={exchangeIcon} alt="교환" width={18} height={18} />
          <span className="font-bold text-sm lg:text-base">교환 희망 정보</span>
        </div>
        <div className="border-t border-gray-200 w-full" />
      </div>

      {/* 희망 카테고리 */}
      <div className="flex items-center font-bold gap-2 mb-3 text-sm lg:text-base">
        <span className="text-my-blue">RARE</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-400">풍경</span>
      </div>

      <div className="border-t border-gray-600 w-full mb-5" />

      <p className="text-gray-200 mb-6 text-xs lg:text-sm">
        푸릇푸릇한 여름 풍경, 눈 많이 내린 겨울 풍경 사진에 관심이 많습니다.
      </p>

      {/* 버튼 영역 */}
      <div className="flex flex-col gap-3">
        <Button type="edit" />
        <Button type="sellDown" />
      </div>
    </div>
  );
}
