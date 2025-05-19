import React from "react";
import { format } from "date-fns";

export default function PostTitle() {
  const now = format(new Date(), "yyyy년 MM월");

  return (
    <div className="border-b border-gray-100 pb-5 mb-15 mt-10 flex justify-between items-end">
      <span className="title-48 lg:title-62">포토카드 생성</span>
      <span>
        <span className="mr-1 title-40 text-main">1</span>
        <span className="mr-3 title-28">/3</span>
        <span className="text-gray-300">{`(${now})`}</span>
      </span>
    </div>
  );
}
