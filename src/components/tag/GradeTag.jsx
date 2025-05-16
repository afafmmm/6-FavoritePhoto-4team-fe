export default function GradeTag({ grade = 'COMMON', size = 'md' }) {
  const colorMap = {
    COMMON: 'text-main',
    RARE: 'text-my-blue',
    'SUPER RARE': 'text-my-purple',
    LEGENDARY: 'text-my-pink',
  };

  const textSize  = {
    xs: 'text-xs',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-2xl'
  }[size];

  return (
    <span className={`font-light ${colorMap[grade]} ${textSize} ${(textSize === "text-lg" || textSize === "text-2xl") ? "!font-bold" : ""}`}>
      {grade}
    </span>
  );
}
