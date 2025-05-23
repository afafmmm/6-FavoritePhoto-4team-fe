export default function GradeTag({ grade = 1 }) {
  const gradeMap = {
    1: "COMMON",
    2: "RARE",
    3: "SUPER RARE",
    4: "LEGENDARY",
  };

  const colorMap = {
    COMMON: "text-main",
    RARE: "text-my-blue",
    "SUPER RARE": "text-my-purple",
    LEGENDARY: "text-my-pink",
  };

  const gradeLabel = gradeMap[grade] || "COMMON";
  const colorClass = colorMap[gradeLabel];

  return <span className={`font-light ${colorClass}`}>{gradeLabel}</span>;
}
