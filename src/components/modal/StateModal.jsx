import React from "react";
import { useRouter } from "next/navigation";
import { useModal } from "@/providers/ModalProvider";

export default function StateModal() {
  const router = useRouter();
  const { isOpen, status, type, cardInfo, openModal, closeModal } = useModal();

  if (!isOpen) return null;

  const isSuccess = status >= 200 && status < 300;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="relative bg-my-black w-full">
        <button onClick={closeModal} className="absolute">
          X
        </button>
        <h3>안녕</h3>
        <p></p>
      </div>
    </div>
  );
}
