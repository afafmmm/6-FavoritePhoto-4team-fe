import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

// 테스트용 알림 데이터
const testNotifications = [
  {
    id: 1,
    userId: 101,
    message: "기며누님이 [RARE | 우리집 앞마당]을 1장 구매했습니다.",
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

function Notification({ className = "", userId }) {
  const [open, setOpen] = React.useState(false);
  // 로그인한 유저의 알림만 필터링
  const [notifications, setNotifications] = React.useState(
    userId
      ? testNotifications.filter((n) => n.userId === userId)
      : testNotifications
  );
  const hasUnread = notifications.some((n) => !n.read);
  const router = useRouter();

  // 바깥 클릭 시 드롭다운 닫기
  React.useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (!e.target.closest(".notification-dropdown-root")) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleNotificationClick = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  // 모바일 환경 감지
  const isMobile = typeof window !== "undefined" && window.innerWidth < 744;

  const handleIconClick = () => {
    if (isMobile) {
      router.push("/notification");
    } else {
      setOpen((prev) => !prev);
    }
  };

  return (
    <div className="w-6 h-6 relative notification-dropdown-root">
      {/* 알림 아이콘 버튼 */}
      <button
        className="relative focus:outline-none cursor-pointer"
        onClick={handleIconClick}
        aria-label="알림 열기"
      >
        <Image
          src={
            hasUnread
              ? require("@/assets/icom_alrma_active.svg")
              : require("@/assets/icon_alarm.svg")
          }
          alt="알림"
          width={24}
          height={24}
        />
      </button>

      {/* 드롭다운: md 이상에서만 보임 */}
      {open && (
        <div className="hidden md:block absolute top-full right-0 mt-0 w-[300px] max-h-[535px] rounded-xs z-20 bg-my-black text-white ">
          <ul
            className="max-h-[535px] h-auto overflow-y-auto divide-y divide-gray-600"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(120,120,120,0.3) transparent",
            }}
          >
            {notifications.length === 0 ? (
              <li className="p-5 text-center text-gray-400">
                알림이 없습니다.
              </li>
            ) : (
              notifications.map((n) => (
                <li
                  key={n.id}
                  className={`w-full h-[107px] p-5 text-sm ${
                    n.read ? "bg-gray-500" : "bg-my-black text-white"
                  } cursor-pointer`}
                  onClick={() => !n.read && handleNotificationClick(n.id)}
                >
                  <Link href="/notification" className="block h-full w-full">
                    <div className="flex flex-col justify-between h-full">
                      <span
                        className={`text-400-14 ${
                          n.read ? "opacity-70" : "font-semibold"
                        }`}
                      >
                        {n.message}
                      </span>
                      <div className="text-xs text-gray-300 mt-2.5">
                        {getTimeAgo(n.createdAt)}
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

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

export default Notification;
