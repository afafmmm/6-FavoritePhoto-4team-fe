"use client";

const { createContext, useContext, useState } = require("react");

// 1. 만든다
const StateModalContext = createContext();

// 2. 사용한다
export const useStateModal = () => useContext(StateModalContext);

// 4. 내용
export function StateModalProvider({ children }) {
  // 모달 상태 정리
  const [modalState, setModalState] = useState({
    isOpen: false,
    status: 200,
    type: "생성", // 구매, 판매, 생성 中 택1
    cardInfo: { grade: "", name: "", count: 1 },
  });

  // 모달 열기
  function openStateModal(status, type, cardInfo) {
    setModalState({
      isOpen: true,
      status,
      type,
      cardInfo,
    });
  }

  // 모달 닫기
  function closeStateModal() {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  }

  // 3. 반환한다
  return (
    <StateModalContext.Provider
      value={{
        ...modalState,
        openModal: openStateModal,
        closeModal: closeStateModal,
      }}
    >
      {children}
    </StateModalContext.Provider>
  );
}
