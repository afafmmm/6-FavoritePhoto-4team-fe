"use client";

import React from "react";
import Image from "next/image";
import favicon from "@/assets/favicon.svg";
import GradeTag from "../tag/GradeTag";

export default function BaseCard({
  title,
  image,
  grade,
  category,
  owner,
  price,
  amount,
  amountLabel = "", // 수량 or 잔여 선택
  isFavorite = false,
  children, // 설명이나 버튼 등 option
  showPurchasePrice = false, // "4P에 구매" option
}) {
  // '잔여'일 경우 스타일 분리
  const optionAmount = () => {
    // 설명쓰는 카드 버전은 x
    if (!amount) return null;

    // 잔여인 카드 버전
    if (amountLabel === "잔여" && amount.includes("/")) {
      const [remain, total] = amount.split("/").map((s) => s.trim());
      return (
        <div className="flex justify-between">
          <span className="text-gray-300">{amountLabel}</span>
          <span className="font-medium">
            <span className="text-white">{remain}</span>
            <span className="text-gray-400"> / {total}</span>
          </span>
        </div>
      );
    }

    // 수량인 카드 버전
    return (
      <div className="flex justify-between">
        <span className="text-gray-300">{amountLabel}</span>
        <span className="font-medium">{amount}</span>
      </div>
    );
  };

  return (
    <div className="bg-my-black text-white lg:w-[360px] md:w-[262px] lg:px-8 lg:py-7 md:px-4 md:py-3.5 rounded-sm border border-gray-800">
      {/* 이미지 */}
      <div className="w-full lg:h-[210px] md:h-[170px] relative mb-4">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* 제목 */}
      <h3 className="md:text-lg md:font-bold truncate mb-2">{title}</h3>

      {/* 등급, 카테고리, 작성자 */}
      <div className="flex items-center text-[14px] gap-2 mb-4">
        <GradeTag grade={grade} size="xs" />
        <span className="text-gray-400">|</span>
        <span className="text-gray-300">{category}</span>
        {showPurchasePrice && price && (
          <>
            <span className="text-gray-400">|</span>
            <span className="text-white font-semibold">
              {price} P{" "}
              <span className="text-gray-300 font-medium">에 구매</span>
            </span>
          </>
        )}
        {owner && <div className="ml-auto underline">{owner}</div>}
      </div>

      <div className="border-t border-gray-700 my-3" />

      {/* 가격 */}
      <div className="text-[14px] font-light space-y-1 mb-3">
        {price && !showPurchasePrice && (
          <div className="flex justify-between">
            <span className="text-gray-300">가격</span>
            <span className="font-medium">{price} P</span>
          </div>
        )}
        {/* 수량 or 잔여 */}
        {optionAmount()}
      </div>

      {/* 설명, 버튼 영역 */}
      {children && <div className="mt-4">{children}</div>}

      {/* 로고 */}
      {isFavorite && (
        <div className="flex justify-center mt-5 text-sm font-bold">
          <Image src={favicon} alt="최애" width={80} height={80} />
        </div>
      )}
    </div>
  );
}
