import BaseCard from "@/components/ui/BaseCard";
import { delay } from "@/delay";

export default async function BaseCards() {
    await delay(3500);
    // const res = await fetch('http://localhost:3000/data/cards.json', {cache : "force-cache"}); //로컬환경
    const res = await fetch('https://6-favorite-photo-4team-fe.vercel.app/data/cards.json', {next : {revalidate : 300}});
    if(!res.ok) {
      return null;
    }
    const data = await res.json();
    return(
        <>
          {data.map((card, index) => 
              <BaseCard key={index} {...card}/>
            )}
        </>
    ) 
}
