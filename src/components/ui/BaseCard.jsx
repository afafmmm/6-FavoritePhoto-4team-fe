import React from "react";
import Image from "next/image";
import favicon from "@/assets/favicon.svg";
import GradeTag from "../tag/GradeTag";
import example from "@/assets/example.svg";

export default function BaseCard({
  title,
  image,
  grade,
  category,
  owner,
  price,
  amount,
  amountLabel = "", // 수량 or 잔여 선택
  children, // 설명이나 버튼 등 option
  showPurchasePrice = false, // "4P에 구매" option
}) {
  // '잔여'일 경우 스타일 분리
  const optionAmount = () => {
    if (!amount) return null;

    if (amountLabel === "잔여" && amount.includes("/")) {
      const [remain, total] = amount.split("/").map((s) => s.trim());
      return (
        <div className="flex justify-between text-gray-300 text-300-10 md:text-300-16">
          <span>{amountLabel}</span>
          <span>
            <span className="text-white text-400-10 md:text-300-16">
              {remain}
            </span>
            <span> / {total}</span>
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
    <div className="bg-my-black text-white w-full px-2 py-2 md:px-5 md:py-5 lg:px-8 lg:py-8 border border-gray-800">
      {/* 이미지 */}
      <div className="w-full aspect-[4/3] relative mb-3 md:mb-5">
        <Image src={example} alt={title} fill className="object-cover" />
      </div>

      {/* 제목 */}
      <h3 className="text-700-14 md:text-700-22 truncate mb-1">{title}</h3>

      {/* 등급, 카테고리, 작성자 */}
      <div className="flex items-center text-400-10 md:text-400-16 gap-1.5">
        {/* 기본값 */}
        <div className="md:hidden">
          <GradeTag grade={grade} size="xxs" />
        </div>

        {/* md 이상 */}
        <div className="hidden md:block">
          <GradeTag grade={grade} size="md" />
        </div>

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

      {/* 가격 / 수량,잔여 */}
      <div className="space-y-1">
        {price && !showPurchasePrice && (
          <div className="flex justify-between">
            <span className="text-gray-300 text-300-10 md:text-300-16">
              가격
            </span>
            <span className="text-400-10 md:text-400-16">{price} P</span>
          </div>
        )}
        {optionAmount()}
      </div>

      {/* 설명, 버튼 영역 */}
      {children && <div className="mt-4">{children}</div>}

      <div className="hidden md:flex justify-center mt-4">
        <Image src={favicon} alt="최애" className="w-20 h-4" />
      </div>
    </div>
  );
}
