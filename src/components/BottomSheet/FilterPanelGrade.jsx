const gradeOptions = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];

export default function FilterPanelGrade({ grades = {}, selectedGrade, onSelectGrade }) {
  return (
    <ul>
      {gradeOptions.map((grade) => {
        const count = grades[grade] || 0;
        return (
          <li
            key={grade}
            className={`flex justify-between py-2 cursor-pointer ${
              selectedGrade === grade ? "bg-gray-800" : ""
            }`}
            onClick={() => onSelectGrade(grade)}
          >
            <span>{grade}</span>
            <span>{count}개</span>
          </li>
        );
      })}
    </ul>
  );
}
