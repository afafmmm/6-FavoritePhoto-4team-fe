import "./globals.css";

import Header from "@/components/layout/Header";
import Providers from "./providers";

export const metadata = {
  title: "최애의 포토",
  description: "사진을 만들고 공유할 수 있는 커뮤니티입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="w-full">
        <div className="mx-auto min-h-screen px-4  md:px-5 lg:px-0 max-w-[1480px]">
          <Header />
          <main className="pt-[60px] md:pt-[70px] lg:pt-[80px]">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
