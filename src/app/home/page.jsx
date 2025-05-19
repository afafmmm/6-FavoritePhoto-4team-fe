import BaseCard from "@/components/ui/BaseCard";
import example from "@/assets/example.svg";
import { delay } from "@/delay"
import { Suspense } from "react";

async function BaseCards() {
  // await delay(2000); 
  
  const res = await fetch('http://localhost:3000/data/cards.json', {cache : "force-cache"});
  if(!res.ok) {
    return null;
  }
  const baseCards = await res.json();
  return(
    <>
      {
        baseCards.map((card, index) => 
          <BaseCard key={index} {...card}/>
        )
      }
    </>
  ) 
}

export default function HomePage() {
  return ( 
      <div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:gap-20 ">
          <Suspense fallback={<div>Loading...</div>}>
            {BaseCards()}
          </Suspense>
        </div>
    </div>
  )
}