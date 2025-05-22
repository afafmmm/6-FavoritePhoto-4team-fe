'use server'
import { delay } from "@/delay"

export async function loginUserAction(state, formData) {
  await delay(2000)

  try {
    const values = {
      email: formData.get("userEmail"),
      password: formData.get("userPassword"),
    }

    const res = await fetch('https://six-favoritephoto-4team-be.onrender.com/api/auth/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      throw new Error("로그인 실패")
    }

    const data = await res.json() // JWT 토큰 등 응답 받을 수 있음

    return {
      status: true,
      user: data.user,
      token: data.token, // 백엔드가 토큰을 넘긴다면
    }
  } catch (err) {
    console.error(err)
    return {
      status: false,
      error: "이메일 또는 비밀번호가 잘못되었습니다.",
    }
  }
}
