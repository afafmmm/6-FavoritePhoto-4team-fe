import GradeTag from "../tag/GradeTag.jsx"; 

const gradeOptions = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];

export default function FilterPanelGrade({ grades = {}, selectedGrades = [], onSelectGrade }) {
  // 중복 선택 토글 함수
  const handleClick = (grade) => {
    if (selectedGrades.includes(grade)) {
      onSelectGrade(selectedGrades.filter((g) => g !== grade));
    } else {
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
              isSelected ? "bg-gray-500" : ""
            }`}
            onClick={() => handleClick(grade)}
          >
            <GradeTag grade={grade} size="xs" />

            <span>{count}개</span>
          </li>
        );
      })}
    </ul>
  );
}
