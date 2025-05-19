import HomeFallback from "@/components/skeletons/HomeFallback";
import BaseCards from "@/components/ui/BaseCards";
import { Suspense } from "react";

export default function HomePage() {
  return ( 
      <div>
        {/* 카드 영역 */}
        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3 lg:gap-20 ">
          <Suspense fallback={<HomeFallback count={15}/>}>
            <BaseCards />
          </Suspense>
        </div>
      </div>
  )
}
