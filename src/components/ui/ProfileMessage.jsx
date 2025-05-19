import React from "react";

const ProfileMessage = ({ userName = "유디", points = 300 }) => {
  return (
    <div className="w-[260px] h-[83px] border-b border-gray-400 border-opacity-50 flex justify-center items-start">
      <div className="w-[220px] h-[63px] flex flex-col gap-[20px]">
        <div className="w-full h-[26px] md:h-[22px] text-700-18 leading-none tracking-normal text-white">
          안녕하세요, {userName}님!
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="w-full h-[17px] md:h-[14px] text-300-12 leading-none tracking-normal text-gray-300">
            보유 포인트
          </div>
          <div className="w-full h-[17px] md:h-[14px] text-400-12 leading-none tracking-normal text-main text-right">
            {points} P
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMessage;
