"use client";
import React, { useEffect, useState } from "react";
import mainLogoImg from "@/assets/main-logo.png";
import CurtainMenu from "./CurtainMenu";
import DropdownNavi from "./DropdownNavi";
import Notification from "./Notification";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// 임시 로그인 상태 (실제 구현시 props/context/hook 등으로 대체 필요)
const isLoggedIn = true; // true로 바꾸면 로그인 상태 테스트 가능
const user = {
  id: 101,
  point: 1540,
  nickname: "유디",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showBackHeader, setShowBackHeader] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // 모바일에서 뒤로가기/페이지이름을 보여줄 경로 목록
  const mobileBackPages = [
    "/notification",
    // 필요시 추가
  ];
  // 각 경로별 페이지 이름 매핑
  const pageNames = {
    "/notification": "알림",
    // 필요시 추가
  };

  // 모바일에서 뒤로가기 헤더를 보여줄지 결정
  React.useEffect(() => {
    setShowBackHeader(mobileBackPages.includes(pathname));
  }, [pathname]);

  // 모바일에서 뒤로가기/페이지이름 노출 여부
  const isMobileBackPage = mobileBackPages.includes(pathname);
  const pageTitle = pageNames[pathname] || "";

  return (
    <header>
      <nav className="w-full bg-my-black sticky top-0 z-50 ">
        <div className="h-14 px-5 md:px-10 md:h-20 lg:px-0 lg:py-[27px] flex items-center justify-between py-3  md:py-[23px]  mx-auto md:flex md:grid-cols-none md:items-center md:justify-between">
          {/* 왼쪽: 햄버거 메뉴 또는 뒤로가기 (showBackHeader가 true면 모든 해상도에서 뒤로가기, 아니면 기존대로) */}
          <div
            className={`flex items-center min-w-[44px] justify-start${
              showBackHeader ? "" : " md:hidden"
            }`}
          >
            {showBackHeader ? (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="뒤로가기"
                className="ml-5"
              >
                <Image
                  src={require("@/assets/icon_back.svg")}
                  alt="뒤로가기"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                  priority
                />
              </button>
            ) : (
              <button type="button" onClick={() => setMenuOpen(true)}>
                <Image
                  src={require("@/assets/icon_menu.svg")}
                  alt="메뉴"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                  priority
                />
              </button>
            )}
          </div>
          {/* 가운데: 로고 또는 페이지 이름 */}
          <div className="flex items-center justify-center flex-1 md:justify-start md:flex-none">
            {showBackHeader ? (
              <span
                className="text-white"
                style={{
                  fontFamily: "BRB, baskin, sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  letterSpacing: 0,
                  lineHeight: "normal",
                }}
              >
                {pageTitle}
              </span>
            ) : (
              <Link href="/">
                <Image
                  src={require("@/assets/logo.svg")}
                  alt="최애의포토"
                  width={139}
                  height={25}
                  className="w-[83.37px] h-[15.12px] md:w-[111px] md:h-[20px] lg:w-[138.94px] lg:h-[25.2px]"
                  priority
                />
              </Link>
            )}
          </div>
          {/* 오른쪽: 알림/로그인 (sm에서만 보임) */}
          <div className="flex items-center justify-end md:hidden min-w-[44px]">
            {!showBackHeader && (
              <>
                {isLoggedIn && <Notification userId={user.id} />}
                {!isLoggedIn && (
                  <Link
                    href="/login"
                    className="text-400-14 text-white hover:text-gray-400"
                  >
                    로그인
                  </Link>
                )}
              </>
            )}
            {/* 뒤로가기 헤더일 때 오른쪽 공간 맞추기용 투명 div */}
            {showBackHeader && <div style={{ width: 22, height: 22 }} />}
          </div>
          {/* 데스크탑 네비게이션: md 이상에서만 보임 */}
          <div className="hidden md:flex flex-1 justify-end items-center">
            {isLoggedIn ? (
              <ul className="flex items-center space-x-[30px] text-gray-200 text-[14px]">
                <li className="text-700-14 text-gray-200">
                  {user.point.toLocaleString()} P
                </li>
                {/* 알림: 포인트와 닉네임 사이, 로그인 시 항상 보임 */}
                <Notification userId={user.id} />
                <li className="relative">
                  <button
                    className="title-18 text-gray-200 focus:outline-none"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    style={{ marginBottom: 0, paddingBottom: 0 }}
                  >
                    {user.nickname}
                  </button>
                  <DropdownNavi
                    user={user}
                    open={dropdownOpen}
                    onClose={() => setDropdownOpen(false)}
                  />
                </li>
                <li>
                  <Link
                    href="/logout"
                    className="border-l pl-[30px] text-gray-400 border-gray-400 hover:text-gray-400 h-4 flex items-center"
                    style={{ alignSelf: "center" }}
                  >
                    로그아웃
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="flex space-x-6 text-gray-200 text-[14px]">
                <li>
                  <Link href="/login" className="hover:text-gray-400">
                    로그인
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-gray-400">
                    회원가입
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      {/* 커튼 메뉴 오버레이 */}
      {menuOpen && (
        <CurtainMenu user={user} onClose={() => setMenuOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;
