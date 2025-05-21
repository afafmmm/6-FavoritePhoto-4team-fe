"use client";

import React from "react";
import PostForm from "./_component/PostForm";
import PostTitle from "./_component/PostTitle";
import StateModal from "@/components/modal/StateModal";
import { useQuery } from "@tanstack/react-query";
import { getCardMeta } from "@/lib/api/api-users";

export default function CardPostPage() {
  const {
    data: meta,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["cardMeta"],
    queryFn: getCardMeta,
  });

  // const { data: count } = useQuery({
  //   queryKey: ["usingPostCount"],
  // });

  if (isPending) return <p>로딩 중입니다...</p>;
  if (isError) return <p>데이터를 불러오는 데 실패했습니다.</p>;

  return (
    <>
      <PostTitle usingNumber="1" />
      <PostForm genres={meta.genres} grades={meta.grades} />
      <StateModal />
    </>
  );
}
