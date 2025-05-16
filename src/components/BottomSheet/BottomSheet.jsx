'use client';
import { useState } from 'react';
import FilterTab from './FilterTab';
import FilterPanelGrade from './FilterPanelGrade';
import FilterPanelGenre from './FilterPanelGenre';
import FilterPanelSale from './FilterPanelSale';

export default function BottomSheet() {
  const [selectedTab, setSelectedTab] = useState('grade');
  const [filter, setFilter] = useState({
    grade: null,
    genre: null,
    sale: null,
  });

  const handleApply = async () => {
    const query = Object.entries(filter)
      .filter(([_, value]) => value !== null)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    try {
      const res = await fetch(`/api/photos?${query}`);
      const data = await res.json();
      console.log('필터 결과:', data);
    } catch (err) {
      console.error('API 요청 실패:', err);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 z-50 border-t border-gray-700">
      <FilterTab selected={selectedTab} onChange={setSelectedTab} />

      {selectedTab === 'grade' && <FilterPanelGrade filter={filter} setFilter={setFilter} />}
      {selectedTab === 'genre' && <FilterPanelGenre filter={filter} setFilter={setFilter} />}
      {selectedTab === 'sale' && <FilterPanelSale filter={filter} setFilter={setFilter} />}

      <button
        className="w-full bg-yellow-400 text-black py-3 font-bold mt-4 rounded"
        onClick={handleApply}
      >
        포토보기
      </button>
    </div>
  );
}
