import { delay } from "@/delay";
import BaseCardList from "./BaseCardList";

export default async function BaseCards({ searchParams }) {
  const gradeFilter = searchParams.grade;
  const genreFilter = searchParams.genre;
  const saleFilter = searchParams.sale;

  const hasInitialParams = gradeFilter || genreFilter || saleFilter;

  if (!hasInitialParams) {
    // await delay(1000); //일단 여기는 나중에 처리하겠습니다.
  } 

  const res = await fetch("https://6-favorite-photo-4team-fe.vercel.app/data/cards.json", {
        cache : "no-store"
      });

  if (!res.ok) return null;

  const data = await res.json();

  const filtered = data.filter((card) => {
    const matchGrade = !gradeFilter || card.grade === gradeFilter;
    const matchGenre = !genreFilter || card.genre === genreFilter;
    const matchSale = !saleFilter || card.sale === saleFilter;

    return matchGrade && matchGenre && matchSale;
  });

  return <BaseCardList cards={filtered} />
}
