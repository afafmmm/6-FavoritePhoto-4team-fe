'use client';
import FillterDropdown from '@/components/FllterDropdown/FillterDropdown';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// 테스트용 카드 데이터 
const allCards = [
  { id: 1, name: '카드 A', grade: 'COMMON' },
  { id: 2, name: '카드 B', grade: 'RARE' },
  { id: 3, name: '카드 C', grade: 'LEGENDARY' },
  { id: 4, name: '카드 D', grade: 'SUPER RARE' },
];
//주석처리 지워용용

export default function CardListPageEx() {
  // URL의 쿼리 파라미터를 가져오는 훅
  const searchParams = useSearchParams();

  // 현재 선택된 필터 값 (등급)
  const gradeParam = searchParams.get('grade');

  // 보여줄 카드 리스트 상태
  const [visibleCards, setVisibleCards] = useState(allCards);

  // grade 쿼리 파라미터가 바뀔 때마다 카드 필터링
  useEffect(() => {
    if (!gradeParam) {
      // 전체 보기일 경우 모든 카드 표시
      setVisibleCards(allCards);
    } else {
      // 특정 등급만 필터링
      setVisibleCards(allCards.filter(card => card.grade === gradeParam));
    }
  }, [gradeParam]);

  return (
    <div className="p-6 space-y-4">
      <FillterDropdown />
      
      <div className="grid grid-cols-2 gap-4">
        {visibleCards.map(card => (
          <div key={card.id} className="bg-gray-800 text-white p-4 rounded shadow">
            {card.name} - {card.grade}
          </div>
        ))}
      </div>
    </div>
  );
}
