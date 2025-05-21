import LadingCTASection from "@/components/landings/LandingCTASection";
import LadingHeroSection from "@/components/landings/LandingHeroSection";
import LandingNotificationFeatureSection from "@/components/landings/LandingNotificationFeatureSection";
import LadingPointTradeSection from "@/components/landings/LandingPointTradeSection";
import LandingRandomPointBoxSection from "@/components/landings/LandingRandomPointBoxSection";

export default function RandingPage() {
  return (
    <div className="root-page w-full max-w-none min-h-screen bg-my-black px-0 md:px-0 lg:px-0 py-0 md:py-0 lg:py-0">
      {/* 해더의 경우 작업된 결과를 받음 */}
      <LadingHeroSection />
      <LadingPointTradeSection />
      <LandingNotificationFeatureSection />
      <LandingRandomPointBoxSection />
      <LadingCTASection />
    </div>
  );
}
