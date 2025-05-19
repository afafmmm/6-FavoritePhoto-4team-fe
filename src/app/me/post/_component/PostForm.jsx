"use client";

import React, { useState } from "react";
import Input from "./Input";
import clsx from "clsx";
import TextArea from "./TextArea";
import Select from "./Select";
import File from "./File";
import Button from "@/components/ui/Button";

export default function PostForm() {
  const [errors, setErrors] = useState({});

  return (
    <form
      action="/api/me/post"
      method="POST"
      encType="multipart/form-data"
      className={clsx("gap-10", "flex flex-col justify-center items-center")}
    >
      <Input
        label="포토카드 이름"
        name="cardName"
        placeholder="포토카드 이름을 입력해 주세요"
        error="15자 이내로 입력해 주세요."
      />
      <Select type="등급" error="등급을 선택해 주세요." />
      <Select type="장르" />
      <Input
        label="가격"
        name="cardPrice"
        placeholder="가격을 입력해 주세요"
        error="숫자만 입력해 주세요."
      />
      <Input
        label="총 발행량"
        placeholder="총 발행량을 입력해 주세요"
        error="총 발행량은 10장 이하로 선택 가능합니다."
      />
      <File label="사진 업로드" error="파일을 선택해 주세요." />
      <TextArea
        label="포토카드 설명"
        placeholdrer="카드 설명을 입력해 주세요"
      />
      <Button>생성하기</Button>
    </form>
  );
}
