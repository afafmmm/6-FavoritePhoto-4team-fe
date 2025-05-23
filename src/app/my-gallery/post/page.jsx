"use client";

import React from "react";
import PostForm from "./_component/PostForm";
import PostTitle from "./_component/PostTitle";
import StateModal from "@/components/modal/StateModal";
import { useQuery } from "@tanstack/react-query";
import { getCardMeta, getMonthlyCardCount } from "@/lib/api/api-users";
import Noti from "./_component/Noti";

export default function CardPostPage() {
  const {
    data: meta,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["cardMeta"],
    queryFn: getCardMeta,
  });

  const { data } = useQuery({
    queryKey: ["creationCardCount"],
    queryFn: getMonthlyCardCount,
  });

  if (isPending) return <p>로딩 중입니다...</p>;
  if (isError) return <p>데이터를 불러오는 데 실패했습니다.</p>;

  return (
    <>
      {data?.count >= 3 && <Noti />}
      <PostTitle creationNumber={data?.count ?? 0} />
      <PostForm
        genres={meta.genres}
        grades={meta.grades}
        disabled={data?.count >= 3}
      />
      <StateModal />
    </>
  );
}
