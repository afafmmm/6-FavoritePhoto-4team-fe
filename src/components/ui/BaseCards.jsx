import { delay } from "@/delay";
import BaseCardList from "./BaseCardList";

export default async function BaseCards() {
    await delay(10000); // 로컬 환경에서는 꼭 1000으로 설정하고 작업하기
    // const res = await fetch('http://localhost:3000/data/cards.json', {cache : "force-cache"}); //로컬환경
    const res = await fetch('https://6-favorite-photo-4team-fe.vercel.app/data/cards.json', { cache :"no-store"});
    
    if(!res.ok) return null;

    const data = await res.json();
    
    return <BaseCardList cards={data} />
}
