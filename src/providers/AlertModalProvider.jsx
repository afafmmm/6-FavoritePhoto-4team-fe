"use client";

import React, { createContext, useContext, useState } from "react";

// 1. 만든다
const AlertModalContext = createContext();

// 2. 사용한다
export const useAlertModal = () => useContext(AlertModalContext);

// 4. 내용
export function AlertModalProvider({ children }) {
  // 상태 정리
  const [alertState, setAlertState] = useState({
    isOpen: false,
    type: null, // 로그인, 구매, 교환 취소, 교환 거절, 교환 승인 中 택1
    cardInfo: { grade: "", name: "", count: 1 },
    onAction: null, // 버튼 클릭 시 실행할 동작 정의
  });

  // 모달 열기
  function openModal(type, cardInfo, onAction) {
    setAlertState({
      isOpen: true,
      type,
      cardInfo,
      onAction,
    });
  }

  // 모달 닫기
  function closeModal() {
    setAlertState((prev) => ({ ...prev, isOpen: false }));
  }

  // 3. 반환한다
  return (
    <AlertModalContext.Provider
      value={{ ...alertState, openModal, closeModal }}
    >
      {children}
    </AlertModalContext.Provider>
  );
}
