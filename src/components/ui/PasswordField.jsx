"use client";

import React, { useState } from "react";
import Image from "next/image";
import eyeVisible from "@/assets/eye-visible.svg";
import eyeInvisible from "@/assets/eye-invisible.svg";

function PasswordField({
  label,
  placeholder,
  value,
  onChange,
  name,
  error = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const isError = Boolean(error);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-white">{label}</label>
      )}

      <div className="relative w-full">
        <input
          type={isVisible ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 h-[55px] lg:h-[60px] border border-gray-400 rounded bg-my-black text-white placeholder-gray-400 placeholder:text-300-14 placeholder:lg:text-300-16 focus:outline-none focus:ring-2 focus:ring-white pr-10 ${
            isError
              ? "border border-red-500 focus:ring-red-500"
              : "border border-gray-400 focus:ring-white"
          }`}
        />
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          <Image
            src={isVisible ? eyeVisible : eyeInvisible}
            alt={isVisible ? "비밀번호 보기" : "비밀번호 숨기기"}
            width={20}
            height={20}
          />
        </button>
      </div>

      {isError && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default PasswordField;
