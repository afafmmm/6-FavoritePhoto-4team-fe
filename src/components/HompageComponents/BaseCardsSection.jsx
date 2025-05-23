import BaseCardList from "../ui/BaseCardList";
import FilterDropdown from "../FllterDropdown/FilterDropdown";
import Search from "../ui/Search";
import Sort from "../ui/Sort";
import { storeService } from "@/lib/api/api-store";

export default async function BaseCardsSection({ grade, genre, sale }) {
  const data = await storeService.getAllStoreCards();

  const filtered = data.filter((card) => {
    const matchGrade = !grade || card.gradeId === Number(grade);
    const matchGenre = !genre || card.genreId === Number(genre);
    const matchSale =
      !sale ||
      (sale === "판매중" ? card.sale === "판매중" : card.sale === "판매완료");

    return matchGrade && matchGenre && matchSale;
  });

  return (
    <>
      <div className="py-5">
        <div className="flex flex-col gap-4">
          <div className="md:hidden">
            <Search />
          </div>
          <div className="md:hidden w-full h-[1px] bg-gray-400" />
        </div>
        <div className="flex items-center justify-between md:justify-start my-4 md:my-0">
          <div className="hidden md:block">
            <Search />
          </div>
          <FilterDropdown visibleFilters={["grade", "genre", "sale"]} />
          <Sort />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3 lg:gap-20">
        <BaseCardList cards={filtered} />
      </div>
    </>
  );
}
