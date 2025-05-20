import { delay } from "@/delay";
import BaseCardList from "./BaseCardList";

export default async function BaseCards() {
    await delay(4000); 
    // const res = await fetch('http://localhost:3000/data/cards.json', {cache : "force-cache"}); //로컬환경
    const res = await fetch('https://6-favorite-photo-4team-fe.vercel.app/data/cards.json', { cache :"no-store"});
    
    if(!res.ok) return null;

    const data = await res.json();
    
    return <BaseCardList cards={data} />
}
