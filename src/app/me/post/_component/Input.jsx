"use client";

import React, { useState } from "react";
import clsx from "clsx";
import ErrorText from "./ErrorText";

export default function Input({
  label,
  name,
  placeholder = "",
  value,
  onChange,
  error = "",
}) {
  const [inputText, setInputText] = useState(false); // 입력 상태: 처음에 오류 메시지 안 보이게 하려고 만듦

  return (
    <div className="bg-transparent flex flex-col gap-2.5 w-full">
      <label className="text-700-16 lg:text-700-20">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e);
          setInputText(true);
        }}
        className={clsx(
          inputText && error ? "border-my-red" : "border-gray-200",
          "border rounded-[2px] px-5 py-[18px] w-full placeholder:text-gray-200 placeholder:text-300-14 lg:placeholder:text-300-16 focus:outline-none text-400-14 lg:text-400-16"
        )}
      />
      <ErrorText error={inputText && error} />
    </div>
  );
}
