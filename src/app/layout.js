import "./globals.css";
import "./../components/styles/index.css";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "최애의 포토",
  description: "사진을 만들고 공유할 수 있는 커뮤니티입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="mx-auto min-h-screen w-full sm:max-w-[345px] md:max-w-[704px] lg:max-w-[1480px]">
          {children}
        </main>
      </body>
    </html>
  );
}
