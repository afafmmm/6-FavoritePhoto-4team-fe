const genreOptions = ['여행', '풍경', '인물', '사물'];

export default function FilterPanelGenre({ counts = {}, selectedGenres = [], onSelectGenres }) {
  const handleClick = (label) => {
    if (selectedGenres.includes(label)) {
      onSelectGenres(selectedGenres.filter((g) => g !== label));
    } else {
      onSelectGenres([...selectedGenres, label]);
    }
  };

  return (
    <ul>
      {genreOptions.map((label) => {
        const count = counts[label] || 0;
        const isSelected = selectedGenres.includes(label);
        return (
          <li
            key={label}
            className={`flex justify-between py-2 cursor-pointer ${
              isSelected ? 'bg-gray-500' : ''
            }`}
            onClick={() => handleClick(label)}
          >
            <span className={isSelected ? 'text-white text-400-14' : 'text-gray-300 text-400-14'}>
              {label}
            </span>
            <span className={isSelected ? 'text-white text-400-14' : 'text-gray-300 text-400-14'}>
              {count}개
            </span>
          </li>
        );
      })}
    </ul>
  );
}
