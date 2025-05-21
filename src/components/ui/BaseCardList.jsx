import BaseCard from './BaseCard';

export default async function BaseCardList({ cards }) {
  return (
    <>
      {cards.map((card, index) => (
        <BaseCard key={index} {...card} />
      ))}
    </>
  );
}
