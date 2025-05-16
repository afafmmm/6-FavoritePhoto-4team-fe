const options = [
  { label: 'COMMON', count: 52, color: 'text-yellow-300' },
  { label: 'RARE', count: 16, color: 'text-blue-400' },
  { label: 'SUPER RARE', count: 5, color: 'text-purple-400' },
  { label: 'LEGENDARY', count: 3, color: 'text-red-500' },
];

export default function FilterPanelGrade({ filter, setFilter }) {
  return (
    <ul>
      {options.map((item) => (
        <li
          key={item.label}
          className={`flex justify-between py-2 cursor-pointer ${
            filter.grade === item.label ? 'bg-gray-800' : ''
          }`}
          onClick={() => setFilter((prev) => ({ ...prev, grade: item.label }))}
        >
          <span className={item.color}>{item.label}</span>
          <span>{item.count}개</span>
        </li>
      ))}
    </ul>
  );
}
