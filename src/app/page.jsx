"use client";
import CardListPageEx from "@/components/FllterDropdown/CardListPageEx";
import { Suspense } from "react"; //useSearchParams를 사용해서 Suspense로 감싸야 안전하게 CSR 처리가 됩니다.
import Link from "next/link";
import React from "react";
import { Title } from "@/components/ui/Title";

export default function HomePage() {
  const handleSellClick = () => alert("내 포토카드 판매하기 클릭");
  return (
    <div>
      HomePage
        <Title 
      title="마이페이지" 
      buttonText="수정하기" 
      onButtonClick={() => console.log("수정")} 
      font="titleLg_Noto" 
      buttonColor="yellow" 
    />
      <Suspense fallback={null}>
        <CardListPageEx />
      </Suspense>
      <Link href="/signup">
        <div>Input컴포넌트 확인용 페이지 클릭</div>
      </Link>
      배포 확인(배포에 문제가 있는 확인)
    </div>
  );
}
