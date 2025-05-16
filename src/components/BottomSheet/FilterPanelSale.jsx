const sales = [
  { label: '판매 중', key: 'onSale', count: 212 },
  { label: '판매 완료', key: 'soldOut', count: 58 },
];

export default function FilterPanelSale({ filter, setFilter }) {
  return (
    <ul>
      {sales.map((item) => (
        <li
          key={item.key}
          className={`flex justify-between py-2 cursor-pointer ${
            filter.sale === item.key ? 'bg-gray-800' : ''
          }`}
          onClick={() => setFilter((prev) => ({ ...prev, sale: item.key }))}
        >
          <span>{item.label}</span>
          <span>{item.count}개</span>
        </li>
      ))}
    </ul>
  );
}
