import React from "react";
import ProfileMessage from "./ProfileMessage";

const Profile = () => {
  return (
    <div
      className={`w-[260px] h-[231px] max-md:h-[812px] flex flex-col relative pt-[20px]`}
      style={{ backgroundColor: "var(--color-gray-500)" }}
    >
      <ProfileMessage />

      <div className="h-[128px] flex flex-col pl-[20px] pr-[20px] pt-[1px]">
        <div
          className={`w-full h-[87px] mt-[20px] flex-col gap-[15px] hidden md:flex`}
        >
          <div className="w-full h-[17px] text-700-14 leading-none tracking-normal text-white">
            마켓플레이스
          </div>

          <div className="w-full h-[20px] text-700-14 leading-none tracking-normal text-white">
            마이갤러리
          </div>

          <div className="w-full h-[20px] text-700-14 leading-none tracking-normal text-white">
            판매 중인 포토카드
          </div>
        </div>

        <div
          className="hidden max-md:block absolute w-[52px] h-[20px]"
          style={{
            top: "752px",
            left: "20px",
          }}
        >
          <p
            className="text-400-14 leading-none tracking-normal w-full h-full"
            style={{
              color: "var(--color-gray-400)",
              textAlign: "right",
            }}
          >
            로그아웃
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
