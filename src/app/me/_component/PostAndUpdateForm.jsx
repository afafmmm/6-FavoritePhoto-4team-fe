import React from "react";
import Input from "./Input";
import clsx from "clsx";

export default function PostAndUpdateForm() {
  return (
    <section
      className={clsx(
        // isError ? "gap-8" : "gap-10",
        "flex flex-col justify-center items-center"
      )}
    >
      <Input
        label="포토카드 이름"
        placeholder="포토카드 이름을 입력해 주세요"
        isError={true}
        error="한국어로 입력해 주세요."
      />
      <Input
        label="포토카드 이름"
        placeholder="포토카드 이름을 입력해 주세요"
        isError={false}
        error="한국어로 입력해 주세요."
      />
    </section>
  );
}
