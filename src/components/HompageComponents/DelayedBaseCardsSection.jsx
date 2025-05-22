"use client";

import { useEffect, useState } from "react";
import BaseCardList from "../ui/BaseCardList";
import HomeFallback from "../skeletons/HomeFallback";

export default function DelayedBaseCardsSection({ cards }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      localStorage.setItem("hasVisited", "true");
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    } else {
      setShow(true);
    }
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3 lg:gap-20">
      {!show ? <HomeFallback /> : <BaseCardList cards={cards} />}
    </div>
  );
}
