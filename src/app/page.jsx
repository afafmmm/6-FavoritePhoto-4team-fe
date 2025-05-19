import LadingCTASection from "@/components/landings/LandingCTASection";
import LadingHeroSection from "@/components/landings/LandingHeroSection";
import LandingNotificationFeatureSection from "@/components/landings/LandingNotificationFeatureSection";
import LadingPointTradeSection from "@/components/landings/LandingPointTradeSection";
import LandingRandomPointBoxSection from "@/components/landings/LandingRandomPointBoxSection";
import Header from "@/components/layout/Header";

export default function RandingPage() {
  return (
    <div className="fixed left-0 top-0 w-full h-screen overflow-y-auto bg-my-black">
      <div className="">
        {/* 해더의 경우 작업된 결과를 받음 */}
        <Header />
        <LadingHeroSection />
        <LadingPointTradeSection />
        <LandingNotificationFeatureSection />
        <LandingRandomPointBoxSection />
        <LadingCTASection />
      </div>
    </div>
  );
}
