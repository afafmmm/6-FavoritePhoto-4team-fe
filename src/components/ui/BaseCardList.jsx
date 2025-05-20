// src/components/ui/BaseCardList.tsx
'use client';

import BaseCard from './BaseCard';

export default function BaseCardList({ cards }) {
  return (
    <>
      {cards.map((card, index) => (
        <BaseCard key={index} {...card} />
      ))}
    </>
  );
}
