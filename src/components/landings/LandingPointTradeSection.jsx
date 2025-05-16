import landingEllipseMbImg from "@/assets/ellipse-mb.png"
import landingEllipseTaImg from "@/assets/ellipse-ta.png"
import landingEllipsePcImg from "@/assets/ellipse-pc.png"
import landingPointTradeMbImg from "@/assets/landing-point-trade-mb.png"
import landingPointTradeTaImg from "@/assets/landing-point-trade-ta.png"
import landingPointTradePcImg from "@/assets/landing-point-trade-pc.png"
import Image from "next/image";

export default function LandingPointTradeSection() {
    return(
        <div className="relative pt-16 md:pt-28 lg:pt-32 ">
            <div className="flex flex-col gap-4 justify-between">
                <div className="flex flex-col gap-3 md:gap-3.5 px-8 md:px-16 lg:px-0 lg:w-[1068px] lg:mx-auto">
                    <h1 className="text-700-20 md:text-700-40">포인트로 <span className=" text-main">안전하게 거래</span>하세요</h1>
                    <p className="text-400-14 md:text-400-18 text-gray-600">
                        내 포토카드를 포인트로 팔고, 원하는 포토카드를<br/>
                        포인트로 안전하게 교환하세요
                    </p>
                </div>
                <div className="relative flex-1 flex justify-end pb-[10%] lg:pb-6 [&>img]:w-11/12">
                    <Image src={landingPointTradeMbImg} alt="landingPointTradeMbImg" className="md:hidden"/>    
                    <Image src={landingPointTradeTaImg} alt="landingPointTradeTaImg" className="hidden md:block lg:hidden pr-14"/>    
                    <Image src={landingPointTradePcImg} alt="landingPointTradePcImg" className="hidden lg:block max-w-[1068px] mx-auto"/>    
                    <div className="w-full flex justify-end absolute -z-10 bottom-0 right-0  [&>img]:w-3/5 md:[&>img]:w-3/4">
                        <Image src={landingEllipseMbImg} alt="landingEllipseMbImg" className="md:hidden"/>    
                        <Image src={landingEllipseTaImg} alt="landingEllipseTaImg" className="hidden md:block lg:hidden"/>    
                        <Image src={landingEllipsePcImg} alt="landingEllipsePcImg" className="hidden lg:block w-[1480px] "/>    
                    </div>        
                </div>
            </div>
        </div>
    )
}