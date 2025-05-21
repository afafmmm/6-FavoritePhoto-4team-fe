import "./globals.css";

import Header from "@/components/layout/Header";
import Providers from "../providers/providers";
import AppContainer from "./AppContainer";

export const metadata = {
  title: "최애의 포토",
  description: "사진을 만들고 공유할 수 있는 커뮤니티입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="w-full">
        <AppContainer>
          <Header />
          <main className="pb-20">
            <Providers>{children}</Providers>
          </main>
        </AppContainer>
      </body>
    </html>
  );
}
