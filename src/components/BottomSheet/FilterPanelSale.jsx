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
        return (
          <li
            key={key}
            className={`flex justify-between py-2 cursor-pointer ${
              selectedSale === key ? "bg-gray-800" : ""
            }`}
            onClick={() => onSelectSale(key)}
          >
            <span>{saleLabels[key]}</span>
            <span>{count}개</span>
          </li>
        );
      })}
    </ul>
  );
}
