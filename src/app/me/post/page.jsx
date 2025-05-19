"use client";

import React from "react";
import PostForm from "./_component/PostForm";
import PostTitle from "./_component/PostTitle";
import StateModal from "@/components/modal/StateModal";

export default function CardPostPage() {
  return (
    <>
      <PostTitle />
      <PostForm />
      <StateModal />
    </>
  );
}
