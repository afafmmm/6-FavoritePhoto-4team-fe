"use client";

import clsx from "clsx";
import React, { useRef, useState } from "react";

export default function File({ label }) {
  const fileRef = useRef();

  const [fileName, setFileName] = useState("사진 업로드");

  const handleFileChange = (e) => {
    const file = e.target.file;

    if (file) {
      setFileName(file.name);
    } else {
      setFileName("사진 업로드");
    }
  };

  return (
    <div className="bg-transparent flex flex-col gap-2.5 w-full max-w-[345px] md:max-w-110 lg:max-w-130">
      <label className="text-700-16 lg:text-700-20">{label}</label>
      <div>
        <div
          placeholder="사진 업로드"
          className={clsx(
            fileName === "사진 업로드" ? "text-gray-200" : "text-white",
            "h-[55px] w-[230px] md:w-[310px] lg:w-[390px] outline-none text-300-14 lg:text-300-16 border border-gray-200 rounded-[2px] flex items-center px-5 py-[18px]"
          )}
        >
          {fileName}
        </div>
      </div>
      {/* ↓ 숨김 */}
      <input
        type="file"
        ref={fileRef}
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
