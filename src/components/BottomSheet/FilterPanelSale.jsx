const saleKeys = ["onSale", "soldOut"];
const saleLabels = {
  onSale: "판매 중",
  soldOut: "판매 완료",
};

export default function FilterPanelSale({
  sales = {},
  selectedSale,
  onSelectSale,
}) {
  // 카운트 합산 함수
  const getCount = (key) => {
    if (key === "onSale") {
      return (sales["onSale"] || 0) + (sales["판매중"] || 0);
    }
    if (key === "soldOut") {
      return (sales["soldOut"] || 0) + (sales["판매완료"] || 0);
    }
    return sales[key] || 0;
  };

  return (
    <ul>
      {saleKeys.map((key) => {
        const count = getCount(key);
        const label = saleLabels[key];
        const isSelected = selectedSale === key || selectedSale === label;

        return (
          <li
            key={key}
            className={`flex justify-between py-2 cursor-pointer ${
              isSelected ? "bg-gray-500" : ""
            }`}
            onClick={() => onSelectSale(key)}
          >
            <span
              className={
                isSelected ? "text-white text-400-14" : "text-gray-300 text-400-14"
              }
            >
              {label}
            </span>
            <span
              className={
                isSelected ? "text-white text-400-14" : "text-gray-300 text-400-14"
              }
            >
              {count}개
            </span>
          </li>
        );
      })}
    </ul>
  );
}
