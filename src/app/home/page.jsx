import React, { Suspense } from "react";
import BaseCardsSection from "@/components/HompageComponents/BaseCardsSection";

export default function HomePage() {
  return (
    <div className="md:py-[30px] lg:py-14">
      <Suspense fallback={<div>로딩중...</div>}>
        <BaseCardsSection />
      </Suspense>
    </div>
  );
}
