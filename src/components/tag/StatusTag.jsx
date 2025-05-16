export default function StatusTag({ type = 'sale', size = 'md' }) {
  const text = type === 'sale' ? '판매 중' : '교환 제시 대기 중';
  const textColor = type === 'sale' ? 'text-white' : 'text-[#efff04]';
  const textSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }[size];
  const padding = {
    sm: 'px-2 py-0.5',
    md: 'px-3 py-1',
    lg: 'px-4 py-1.5',
  }[size];

  return (
    <span className={`inline-block bg-black/50 rounded font-normal ${padding} ${textSize}  ${textColor}`}>
      {text}
    </span>
  );
}
