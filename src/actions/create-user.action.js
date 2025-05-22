'use server'
import { delay } from "@/delay"

export async function createUserAction(state, formData) {
    await delay(2000)
    
    try {
        const values = { 
            email : formData.get("userEmail"),
            nickname : formData.get("userNickname"),
            password : formData.get("userPassword"),
        }
        const res = await fetch('https://six-favoritephoto-4team-be.onrender.com/api/auth/login', { method : "POST", body : JSON.stringify(values) }) 

        if(!res.ok) {
            throw new Error(res.statusText)
        }

        return { status : true }
    } catch(err) {
        console.error(err);

        return {
            status : false,
            error : "회원가입에 실패했습니다."
        }
    }
}



