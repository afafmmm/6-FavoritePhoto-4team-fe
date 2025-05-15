import "./globals.css";

import Header from "@/components/layout/Header";

export const metadata = {
  title: "최애의 포토",
  description: "사진을 만들고 공유할 수 있는 커뮤니티입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col min-h-full px-4 md:px-5 lg:px-0 max-w-full lg:max-w-[1480px] mx-auto">
         
          <main className="flex-1">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
} 
