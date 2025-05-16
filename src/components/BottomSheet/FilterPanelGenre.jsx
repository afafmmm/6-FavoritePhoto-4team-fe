const genres = [
  { label: '여행', count: 65 },
  { label: '풍경', count: 58 },
  { label: '인물', count: 101 },
  { label: '사물', count: 9 },
];

export default function FilterPanelGenre({ filter, setFilter }) {
  return (
    <ul>
      {genres.map((item) => (
        <li
          key={item.label}
          className={`flex justify-between py-2 cursor-pointer ${
            filter.genre === item.label ? 'bg-gray-800' : ''
          }`}
          onClick={() => setFilter((prev) => ({ ...prev, genre: item.label }))}
        >
          <span>{item.label}</span>
          <span>{item.count}개</span>
        </li>
      ))}
    </ul>
  );
}
