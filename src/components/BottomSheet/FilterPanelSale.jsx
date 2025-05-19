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
  return (
    <ul>
      {saleKeys.map((key) => {
        const count = sales[key] || 0;
        const isSelected = selectedSale === key;
        return (
          <li
            key={key}
            className={`flex justify-between py-2 cursor-pointer ${
              isSelected ? "bg-gray-500" : ""
            }`}
            onClick={() => onSelectSale(key)}
          >
            <span className={isSelected ? "text-white text-400-14" : "text-gray-300 text-400-14"}>
              {saleLabels[key]}
            </span>
            <span className={isSelected ? "text-white text-400-14" : "text-gray-300 text-400-14"}>
              {count}개
            </span>
          </li>
        );
      })}
    </ul>
  );
}
