"use client";
import React, { useState } from "react";
import CurtainMenu from "./CurtainMenu";
import DropdownNavi from "./DropdownNavi";

// 임시 로그인 상태 (실제 구현시 props/context/hook 등으로 대체 필요)
const isLoggedIn = false; // true로 바꾸면 로그인 상태 테스트 가능
const user = {
  point: 1540,
  nickname: "유디",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="bg-black w-full h-14 flex items-center justify-between px-4 py-3 md:h-20 md:px-[40px] md:py-[23px] lg:px-[220px] lg:py-[27px] md:flex md:grid-cols-none md:items-center md:justify-between">
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
          <a href="/">
            <img
              src="/img/logo.svg"
              alt="최애의포토"
              className="w-[83.37px] h-[15.12px] md:w-[111px] md:h-[20px] lg:w-[138.94px] lg:h-[25.2px]"
            />
          </a>
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
            <a
              href="/login"
              className="text-400-14 text-white hover:text-gray-400"
            >
              로그인
            </a>
          )}
        </div>
        {/* 데스크탑 네비게이션: md 이상에서만 보임 */}
        <div className="hidden md:flex flex-1 justify-end items-center">
          {isLoggedIn ? (
            <ul className="flex items-center space-x-[30px] text-white text-[14px]">
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
                <a
                  href="/logout"
                  className="border-l pl-[30px] text-gray-400 border-gray-400 hover:text-gray-400 h-4 flex items-center"
                  style={{ alignSelf: "center" }}
                >
                  로그아웃
                </a>
              </li>
            </ul>
          ) : (
            <ul className="flex space-x-6 text-white text-[14px]">
              <li>
                <a href="/login" className="hover:text-gray-400">
                  로그인
                </a>
              </li>
              <li>
                <a href="/signup" className="hover:text-gray-400">
                  회원가입
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
      {/* 커튼 메뉴 오버레이 */}
      {menuOpen && (
        <CurtainMenu user={user} onClose={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
