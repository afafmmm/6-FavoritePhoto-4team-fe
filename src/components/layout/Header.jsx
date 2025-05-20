"use client";
import React, { useEffect, useState } from "react";
import mainLogoImg from "@/assets/main-logo.png";
import CurtainMenu from "./CurtainMenu";
import DropdownNavi from "./DropdownNavi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


// 임시 로그인 상태 (실제 구현시 props/context/hook 등으로 대체 필요)
const isLoggedIn = false; // true로 바꾸면 로그인 상태 테스트 가능
const user = {
  point: 1540,
  nickname: "유디",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    // update pathname
  }, [pathname])

  return (
    <header className="sticky top-0 left-0 z-[8888]  bg-my-black">
      <nav 
      className={`
          flex items-center 
          max-w-[1480px] h-[60px] md:h-[70px] lg:h-[80px]
          ${pathname && pathname === '/' ? "mx-auto px-4 md:px-9 lg:px-0" : ""}
      `}
      >
        {/* 왼쪽: 햄버거 메뉴 (sm=기본, md 이상에서 숨김) */}
        <div className="flex items-center md:hidden">
          <button type="button" onClick={() => setMenuOpen(true)}>
            <img
              src="/img/icon_menu.svg"
              alt="메뉴"
              className="w-[22px] h-[22px]"
            />
          </button>

        </div>
        {/* 가운데: 로고 (sm에서는 가운데, md 이상에서는 왼쪽) */}
        <div className="flex items-center justify-center flex-1 md:justify-start md:flex-none">
          <Link href={"/"}>
            <Image src={mainLogoImg} alt="main-logo" className="w-[83px] h-[15px] md:w-28 md:h-5 lg:w-[138px] lg:h-6"/>
          </Link>
        </div>
        {/* 오른쪽: 알림 또는 로그인 (sm에서만 보임) */}
        <div className="flex items-center justify-end md:hidden">
          {isLoggedIn ? (
            <img
              src="/img/icon_alarm.svg"
              alt="알림"
              className="w-[22px] h-[22px]"
            />
          ) : (
            <Link
              href={"/login"}
              className="text-400-14 text-gray-200 hover:text-gray-400"
            >
              로그인
            </Link>
          )}
        </div>
        {/* 데스크탑 네비게이션: md 이상에서만 보임 */}
        <div className="hidden md:flex flex-1 justify-end items-center">
          {isLoggedIn ? (
            <ul className="flex items-center space-x-[30px] text-gray-200 text-[14px]">
              <li className="text-700-14 text-gray-200">
                {user.point.toLocaleString()} P
              </li>
              <li>
                <img
                  src="/img/icon_alarm.svg"
                  alt="알림"
                  className="w-6 h-6"
                  style={{ width: 24, height: 24 }}
                />
              </li>
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
                <button className="border-l pl-[30px] text-gray-400 border-gray-400 hover:text-gray-400 h-4 flex items-center">
                  로그아웃
                </button>
              </li>
            </ul>
          ) : (
            <ul className="flex space-x-6 text-gray-200 text-[14px]">
              <li>
                <Link href={"/login"} className="hover:text-gray-400">
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
      </nav>
      {/* 커튼 메뉴 오버레이 */}
      {menuOpen && (
        <CurtainMenu user={user} onClose={() => setMenuOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;
