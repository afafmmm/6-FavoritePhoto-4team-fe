"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Notification.jsx의 테스트 알림 데이터 복사
const testNotifications = [
  {
    id: 1,
    userId: 101,
    message: "새로운 댓글이 달렸습니다.",
    createdAt: "2025-05-19T09:00:00Z",
    read: false,
  },
  {
    id: 2,
    userId: 102,
    message: "포인트가 적립되었습니다.",
    createdAt: "2025-05-18T15:30:00Z",
    read: true,
  },
  {
    id: 3,
    userId: 101,
    message: "이벤트에 당첨되셨습니다!",
    createdAt: "2025-05-17T12:10:00Z",
    read: false,
  },
  {
    id: 4,
    userId: 103,
    message: "비밀번호가 변경되었습니다.",
    createdAt: "2025-05-16T20:45:00Z",
    read: true,
  },
  {
    id: 5,
    userId: 104,
    message: "새로운 친구 요청이 도착했습니다.",
    createdAt: "2025-05-15T08:25:00Z",
    read: false,
  },
  {
    id: 6,
    userId: 104,
    message: "새로운 친구 요청이 도착했습니다.",
    createdAt: "2025-05-15T08:25:00Z",
    read: false,
  },
];

// 시간 표시 포맷 함수
function getTimeAgo(dateString) {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);

  if (diffHour >= 1 && diffHour < 24) {
    return `${diffHour}시간 전`;
  } else if (diffDay >= 1 && diffDay < 7) {
    return `${diffDay}일 전`;
  } else if (diffWeek >= 1 && diffWeek <= 3) {
    return `${diffWeek}주일 전`;
  } else if (diffMonth >= 1 && diffMonth <= 11) {
    return `${diffMonth}개월 전`;
  } else if (diffYear >= 1) {
    return `${diffYear}년 전`;
  } else {
    // 1시간 미만은 분 단위로 표시
    return `${diffMin}분 전`;
  }
}

export default function NotificationPage() {
  //로그인 유저의 id를 context나 props 등에서 받아와야 함
  const userId = 101; // 예시: 로그인된 유저 id
  const [notifications, setNotifications] = React.useState(
    testNotifications.filter((n) => n.userId === userId)
  );
  const router = useRouter();

  const handleNotificationClick = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div className="min-h-screen bg-my-black text-white flex flex-col px-0">
      {/* 알림 리스트 */}
      <ul className="flex-1 overflow-y-auto divide-y divide-my-black">
        {notifications.length === 0 ? (
          <li className="p-8 text-center text-gray-400">알림이 없습니다.</li>
        ) : (
          notifications.map((n) => (
            <li
              key={n.id}
              className={`h-[87px] p-5 text-sm cursor-pointer ${
                n.read ? "bg-gray-500" : "bg-[#242424] text-white"
              }`}
              onClick={() => !n.read && handleNotificationClick(n.id)}
            >
              <div className="flex flex-col justify-center h-full">
                <span className={n.read ? "opacity-70" : "font-semibold"}>
                  {n.message}
                </span>
                <div className="text-xs text-gray-400 mt-2.5">
                  {getTimeAgo(n.createdAt)}
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
