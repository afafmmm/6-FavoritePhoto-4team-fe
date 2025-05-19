"use client";

import { useEffect, useRef, useState } from "react";

export default function useSort() {
  const [isOpen, setIsOpen] = useState(false);
  const [order, setOrder] = useState("낮은 가격순"); // 정렬 옵션
  const sortRef = useRef(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const handleSelect = (option) => {
    setOrder(option);
    close();
  };

  // orderBy param 변환
  function getSortParam(label = order) {
    switch (label) {
      case "낮은 가격순":
        return "price_asc";
      case "높은 가격순":
        return "price_desc";
      case "최신순":
        return "created_desc";
      default:
        return "price_asc";
    }
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { isOpen, order, sortRef, toggle, handleSelect, getSortParam };
}
