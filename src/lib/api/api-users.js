import { baseUrl } from "./fetch-client";

// 장르 + 등급 get
export async function getCardMeta() {
  const res = await fetch(`${baseUrl}/users/card-meta`);

  if (!res.ok) {
    throw new Error("장르, 등급 불러오기 실패");
  }

  return res.json();
}
