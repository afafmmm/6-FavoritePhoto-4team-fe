"use client";

import { useState } from "react";
import GradeTag from "../tag/GradeTag";

// 고정된 subLabel 목록
const FIXED_LABELS = ["여행", "풍경", "인물", "사물"];

export default function CardBuyer({
  tier,
  subLabel = "",
  creator,
  description = "",
  pricePerCard,
  remaining,
  total,
  onBuy,
}) {
  const [quantity, setQuantity] = useState(2);

  const safeSubLabel = FIXED_LABELS.includes(subLabel) ? subLabel : "풍경";

  const handleQuantity = (amount) => {
    const next = Math.max(1, Math.min(quantity + amount, remaining));
    setQuantity(next);
  };

  const totalPrice = pricePerCard * quantity;

  return (
    <div className="border border-gray-700 p-4 flex flex-col gap-4 bg-black text-white w-full max-w-sm">
      {/* 타이틀 */}
      <div className="flex items-center gap-2 text-sm border-b">
        {/* 여기서 GradeTag를 사용 */}
        <GradeTag grade={tier} size="lg" />
        <span className="text-700-18 text-gray-300">| {safeSubLabel}</span>
        {creator && <span className="ml-auto text-700-18">{creator}</span>}
      </div>

      {/* 설명 */}
      <p className="text-400-16 leading-snug">{description}</p>

      {/* 가격 및 잔여 */}
      <div className="flex flex-col gap-1 text-sm">
        {/* 가격 */}
        <div className="flex justify-between">
          <span>가격</span>
          <span className="font-semibold">{pricePerCard}P</span>
        </div>

        {/* 잔여 */}
        <div className="flex justify-between">
          <span>잔여</span>
          <span className="font-semibold">
            {remaining} / {total}
          </span>
        </div>
      </div>

      {/* 수량 선택 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm">구매수량</span>
          <button
            onClick={() => handleQuantity(-1)}
            disabled={quantity <= 1}
            aria-label="수량 감소"
            className="border px-2 text-lg disabled:opacity-50"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleQuantity(1)}
            disabled={quantity >= remaining}
            aria-label="수량 증가"
            className="border px-2 text-lg disabled:opacity-50"
          >
            +
          </button>
        </div>
        <div className="text-sm">
          <strong>{totalPrice}P</strong> ({quantity}장)
        </div>
      </div>

      {/* 구매 버튼 */}
      <button
        onClick={() => onBuy(quantity)}
        disabled={remaining === 0}
        className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 w-full mt-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {remaining === 0 ? "품절되었습니다" : "포토카드 구매하기"}
      </button>
    </div>
  );
}
