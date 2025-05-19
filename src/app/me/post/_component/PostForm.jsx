import React from "react";
import Input from "./Input";
import clsx from "clsx";
import TextArea from "./TextArea";
import { GenreSelect, GradeSelect } from "./Select";
import File from "./File";

export default function PostForm() {
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
        error="한국어로 입력해 주세요."
      />
      <GradeSelect />
      <GenreSelect />
      <Input
        label="가격"
        name="cardPrice"
        placeholder="가격을 입력해 주세요"
        error="숫자로만 입력할 수 있습니다."
      />
      <Input
        label="총 발행량"
        placeholder="총 발행량을 입력해 주세요"
        error="총 발행량은 10장 이하로 선택 가능합니다."
      />
      <File label="사진 업로드" />
      <TextArea
        label="포토카드 설명"
        placeholdrer="카드 설명을 입력해 주세요"
      />
    </form>
  );
}
