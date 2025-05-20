"use client";

const { createContext, useContext, useState } = require("react");

// 1. 만든다
const ModalContext = createContext();

// 2. 사용한다
export const useModal = () => useContext(ModalContext);

// 4. 내용
export function ModalProvider({ children }) {
  // 모달 상태 정리
  const [modalState, setModalState] = useState({
    isOpen: false,
    status: 200,
    type: "생성",
    cardInfo: { grade: "", name: "", count: 1 },
  });

  // 모달 열기
  function openModal(status, type, cardInfo) {
    setModalState({
      isOpen: true,
      status,
      type,
      cardInfo,
    });
  }

  // 모달 닫기
  function closeModal() {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  }

  // 3. 반환한다
  return (
    <ModalContext.Provider value={{ ...modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
