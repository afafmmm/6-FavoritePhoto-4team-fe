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
    if (!amount) return null;

    if (amountLabel === "잔여" && amount.includes("/")) {
      const [remain, total] = amount.split("/").map((s) => s.trim());
      return (
        <div className="flex justify-between text-[10px]">
          <span className="text-gray-300">{amountLabel}</span>
          <span className="font-medium">
            <span className="text-white">{remain}</span>
            <span className="text-gray-400"> / {total}</span>
          </span>
        </div>
      );
    }

    return (
      <div className="flex justify-between">
        <span className="text-gray-300">{amountLabel}</span>
        <span className="font-medium">{amount}</span>
      </div>
    );
  };

  return (
    <div className="bg-my-black text-white w-full px-5 py-5 rounded-sm border border-gray-800">
      {/* 이미지 */}
      <div className="w-full aspect-[4/3] relative mb-3">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-sm"
        />
      </div>

      {/* 제목 */}
      <h3 className="text-[14px] md:text-lg font-bold truncate mb-1">
        {title}
      </h3>

      {/* 등급, 카테고리, 작성자 */}
      <div className="flex items-center text-[10px] gap-2">
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

      <div className="border-t border-gray-700 my-2.5" />

      {/* 가격 */}
      <div className="text-[10px] font-light space-y-1">
        {price && !showPurchasePrice && (
          <div className="flex justify-between">
            <span className="text-gray-300">가격</span>
            <span className="font-medium">{price} P</span>
          </div>
        )}
        {optionAmount()}
      </div>

      {/* 설명, 버튼 영역 */}
      {children && <div className="mt-4">{children}</div>}

      {/* 로고 */}
      {isFavorite && (
        <div className="hidden md:flex justify-center mt-4">
          <Image src={favicon} alt="최애" width={80} height={80} />
        </div>
      )}
    </div>
  );
}
