const genreOptions = ['여행', '풍경', '인물', '사물'];

export default function FilterPanelGenre({ counts = {}, filter = {}, setFilter }) {
  return (
    <ul>
      {genreOptions.map((label) => {
        const count = counts[label] || 0;
        return (
          <li
            key={label}
            className={`flex justify-between py-2 cursor-pointer ${
              filter.genre === label ? 'bg-gray-800' : ''
            }`}
            onClick={() => setFilter({ genre: label })}
          >
            <span>{label}</span>
            <span>{count}개</span>
          </li>
        );
      })}
    </ul>
  );
}
