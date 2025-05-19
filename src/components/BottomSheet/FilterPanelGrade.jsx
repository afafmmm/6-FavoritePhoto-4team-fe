const gradeOptions = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];

export default function FilterPanelGrade({ grades = {}, selectedGrades = [], onSelectGrade }) {
  // 중복 선택 토글 함수
  const handleClick = (grade) => {
    if (selectedGrades.includes(grade)) {
      // 이미 선택된 거면 제거
      onSelectGrade(selectedGrades.filter((g) => g !== grade));
    } else {
      // 선택 안된 거면 추가
      onSelectGrade([...selectedGrades, grade]);
    }
  };

  return (
    <ul>
      {gradeOptions.map((grade) => {
        const count = grades[grade] || 0;
        const isSelected = selectedGrades.includes(grade);

        return (
          <li
            key={grade}
            className={`flex justify-between py-2 cursor-pointer ${
              isSelected ? "bg-gray-800" : ""
            }`}
            onClick={() => handleClick(grade)}
          >
            <span>{grade}</span>
            <span>{count}개</span>
          </li>
        );
      })}
    </ul>
  );
}
