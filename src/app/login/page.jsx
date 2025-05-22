"use client";

import InputField from "@/components/ui/InputField";
import PasswordField from "@/components/ui/PasswordField";
import Link from "next/link";
import {useActionState, useEffect, useState } from "react";
import mainLogoImg from "@/assets/main-logo.png";
import googleLogoImg from "@/assets/google-logo.png";
import loadingGif from "@/assets/loading.gif";
import Image from "next/image";
import { createUserAction } from "@/actions/create-user.action";
import { loginUserAction } from "@/actions/login-user.action";


export default function Page() {
  const [form , setForm] = useState({})
  const [writeError , setWriteError] = useState({})
  const [state, formAction, isPending] = useActionState(loginUserAction, null);

  useEffect(() => {
    if(state && !state.status) {
      alert(state.error)
    }

    // 성공하면 토큰 저장 및 필요한 다양한 작업을 수행
  }, [state])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({...prev, [name] : value}))
  }
  
  const handleSubmit = (e) => {
    const errors = {}

    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.userEmail || !emailRegex.test(form.userEmail)) {
      if (!form.userEmail || form.userEmail.trim().length === 0) {
        errors.userEmail = "가입된 이메일을 입력해 주세요";
      } else {
        errors.userEmail = "이메일 형식이 아닙니다";
      }
    }
    
    // 비밀번호 유효성 검사
    if(!form.userPassword || form.userPassword.length < 8) {
      if(!form.userPassword || form.userPassword.trim().length === 0) {
        errors.userPassword ="가입된 이메일의 비밀번호를 입력해 주세요"
      } else {
        errors.userPassword ="비밀번호는 8자리 이상이어야 합니다"
      }
    }

    setWriteError(errors);

    // 모든 조건을 충족한 경우 폼 데이터 전송
    if (Object.keys(errors).length > 0) {
      e.preventDefault();
    }
  }

  return (
    <div className="fixed left-0 top-0 px-4 md:px-0  w-full h-full overflow-y-auto bg-my-black z-[8888]">
      <div className="md:max-w-[440px] lg:max-w-[520px] md:w-full md:absolute md:left-1/2 md:top-1/2 md:-translate-1/2">
          <h2 className="flex justify-center mt-20 md:mt-0 lg:mt-0">
            <Link href={"/"} className=""><Image src={mainLogoImg} alt="main-logo" className="w-48 h-9 "/></Link>
          </h2>
          <form action={formAction} onSubmit={handleSubmit} className="mt-[60px] mb-8 flex flex-col gap-8 md:w-full">
            <InputField
              label="이메일"
              placeholder="이메일을 입력해 주세요"
              type="userEmail"
              name="userEmail"
              value={form.userEmail || ""}
              onChange={handleChange}
              labelClassName="text-sm font-medium"
              error={writeError.userEmail || ""} 
            />

            <PasswordField
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요"
              name="userPassword"
              value={form.userPassword || ""}
              onChange={handleChange}
              error={writeError.userPassword || ""}
            />
            
            <div className="flex flex-col gap-4">
              <button type="submit"  disabled={isPending}  className="flex items-center justify-center gap-2 w-full h-[55px] lg:h-[60px] text-700-16 rounded-xs bg-main text-my-black disabled:!cursor-not-allowed disabled:bg-[#bfc802]">
                    {isPending ? "로그인 요청 처리 중.." : "로그인"}
                    {isPending && (
                      <Image src={loadingGif} alt="로딩중" width={20} height={20} />
                    )} 
              </button>
              <button className="w-full">
                <div className="flex items-center justify-center gap-2 h-[55px] lg:h-[60px] rounded-xs bg-white">
                  <Image src={googleLogoImg} alt="google" className="w-[22px] h-[22px]"/>
                  <span className="text-my-black">Google로 시작하기</span>
                </div>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-400-14 lg:text-400-16">
              <span>최애의 포토가 처음이신가요?</span>
              <Link href={"/signup"}><span className="text-main underline">회원가입하기</span></Link>
            </div>
          </form> 
        </div>
      </div>
  );
}
