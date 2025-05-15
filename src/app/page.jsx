import CardListPageEx from "@/components/FllterDropdown/CardListPageEx";//현재는 txt로 바뀜
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div>
      HomePage
       <CardListPageEx/>
      <Link href="/signup">
        <div>Input컴포넌트 확인용 페이지 클릭
        </div>
      </Link>
    </div>
  );
}
