export default function FilterTab({ selected, onChange }) {
  const tabs = [
    { key: 'grade', label: '등급' },
    { key: 'genre', label: '장르' },
    { key: 'sale', label: '매진 여부' },
  ];

  return (
    <div className="flex border-b border-gray-700 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`flex-1 py-2 ${selected === tab.key ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
