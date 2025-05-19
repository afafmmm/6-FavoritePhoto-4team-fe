import HomeFallback from "@/components/skeletons/HomeFallback";
import BaseCard from "@/components/ui/BaseCard";
import { delay } from "@/delay"
import { Suspense } from "react";

async function BaseCards() {
  await delay(3500); 
  // const res = await fetch('http://localhost:3000/data/cards.json', {cache : "force-cache"}); //로컬환경
  const res = await fetch('https://6-favorite-photo-4team-fe.vercel.app/data/cards.json', {next : {revalidate : 300}});
  if(!res.ok) {
    return null;
  }
  const baseCards = await res.json();
  return(
      <>
        { baseCards.map((card, index) => 
            <BaseCard key={index} {...card}/>
          )}
      </>
  ) 
}

export default async function HomePage() {
  return ( 
      <div>
        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3 lg:gap-20 ">
          <Suspense fallback={<HomeFallback count={15}/>}>
            {BaseCards()}
          </Suspense>
        </div>
      </div>
  )
}
