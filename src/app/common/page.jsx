/**
 * 
 [정렬]
 
노션에 사용법 넣어뒀으니까 보세요! ↓

  1. api 함수 제작 부분

export async function get페이지({ orderBy = "낮은 가격순", ... }) // 정렬 설정 넣어줌
	const { getSortParam } = useSort("낮은 가격순") // 괄호 안은 selectBox의 초깃값(글자)
	
	const query = new URLSearchParams({
		orderBy: orderBy,
		page...
		limit 또는 take...
		search...
	})
	
	await 함수(`기본 주소?${query}`)
	...
}

2. 컴포넌트 불러오는 곳에서

const [orderBy, setOrderBy] = useState("price_asc"); // state 추가

const { data } = useQuery({
	queryKey: ["이름 알아서", orderBy, ...],
	queryFn: () => api함수명({ data, orderBy, ... })

<Sort onClick={(data) => setOrderBy(data)} />
 */

"use client";
import CardListPageEx from "@/components/FllterDropdown/CardListPageEx";
import { Suspense, useState } from "react"; //useSearchParams를 사용해서 Suspense로 감싸야 안전하게 CSR 처리가 됩니다.

import Link from "next/link";
import React from "react";
import Sort from "@/components/ui/Sort";
import { useQuery } from "@tanstack/react-query";
import { Title } from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import StatusTag from "@/components/tag/StatusTag";
import GradeTag from "@/components/tag/GradeTag";


const mockdata = [
  // 가데이터 ↔ DB에 저장된 데이터 (안 씀)
  { id: "1", name: "풍경화1", price: "1", createdAt: "4" },
  { id: "2", name: "풍경화2", price: "4", createdAt: "3" },
  { id: "3", name: "풍경화3", price: "3", createdAt: "2" },
  { id: "4", name: "풍경화4", price: "2", createdAt: "1" },
  { id: "5", name: "풍경화5", price: "5", createdAt: "5" },
];

const sortMockData = (data, orderBy) => {
  // 가-api 함수 (BE에서 처리하므로 .sort 쓸 일은 없음 = 안 씀22)
  const copy = [...data];
  switch (orderBy) {
    case "price_asc":
      return copy.sort((a, b) => Number(a.price) - Number(b.price));
    case "price_desc":
      return copy.sort((a, b) => Number(b.price) - Number(a.price));
    case "created_desc":
      return copy.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
    default:
      return copy;
  }
};

export default function CommonPage() {
  const [orderBy, setOrderBy] = useState("price_asc"); // state 추가

  const { data = [] } = useQuery({
    queryKey: ["cards", orderBy], // 조건에 order 넣고
    queryFn: () => sortMockData(mockdata, orderBy), // 함수 실행할 때도 조건 넣음
  });

  return (
    <div className="w-full">
      HomePage
      <Title
        title="마이페이지"
        buttonText="수정하기"
        onButtonClick={() => console.log("수정")}
        font="titleLg_Noto"
        buttonColor="yellow"
      />
      HomePage eddfered
      <Suspense fallback={null}>
        <CardListPageEx />
      </Suspense>
      <Link href="/test">
        <div>Input컴포넌트 확인용 페이지 클릭</div>
      </Link>
      배포 확인(배포에 문제가 있는 확인)
      <Sort onClick={(data) => setOrderBy(data)} />
      {data?.map((data) => {
        return <div key={data.id}>{data.name}</div>;
      })}
      {/* Button 컴포넌트 테스트 섹션 - Button.jsx에 정의된 type 사용 */}
      <div className="mt-8 p-4 border-t border-gray-700">
        <h2 className="text-xl text-white mb-4">
          Button 컴포넌트 타입별 테스트
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button type="purchase" />
            <Button type="exchangeGreen" />
            <Button type="approve" />

            <Button type="purchase" disabled />
            <Button type="exchangeGreen" disabled />
            <Button type="approve" disabled />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button type="exchangeBlack" />
            <Button type="reject" />
            <Button type="sellDown" />

            <Button type="exchangeBlack" disabled />
            <Button type="reject" disabled />
            <Button type="sellDown" disabled />
          </div>
        </div>
      </div>
      <div>
        <div>
          <StatusTag type="sale" size="sm" />
          <StatusTag type="sale" size="md" />
          <StatusTag type="sale" size="lg" />
        </div>
        <div>
          <StatusTag type="exchange" size="sm" />
          <StatusTag type="exchange" size="md" />
          <StatusTag type="exchange" size="lg" />
        </div>
        <div>
          <GradeTag grade="COMMON" size="xs" />
          <GradeTag grade="COMMON" size="md" />
          <GradeTag grade="COMMON" size="lg" />
          <GradeTag grade="COMMON" size="xl" />

          <GradeTag grade="RARE" size="xs" />
          <GradeTag grade="RARE" size="md" />
          <GradeTag grade="RARE" size="lg" />
          <GradeTag grade="RARE" size="xl" />

          <GradeTag grade="SUPER RARE" size="xs" />
          <GradeTag grade="SUPER RARE" size="md" />
          <GradeTag grade="SUPER RARE" size="lg" />
          <GradeTag grade="SUPER RARE" size="xl" />

          <GradeTag grade="LEGENDARY" size="xs" />
          <GradeTag grade="LEGENDARY" size="md" />
          <GradeTag grade="LEGENDARY" size="lg" />
          <GradeTag grade="LEGENDARY" size="xl" />
        </div>
      </div>
    </div>
  );
}
