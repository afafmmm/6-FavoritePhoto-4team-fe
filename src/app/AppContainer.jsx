"use client";
import { usePathname } from "next/navigation";

export default function AppContainer({ children }) {
  const pathname = usePathname();
  // 루트(/) 페이지일 때만 px-4 적용
  const isRoot = pathname === "/";
  return (
    <div
      className={`mx-auto min-h-screen ${
        isRoot ? "px-0 md:pr-5 md:pl-0" : "px-0"
      } max-w-[1480px]`}
    >
      {children}
    </div>
  );
}
