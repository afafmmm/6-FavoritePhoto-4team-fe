import landingEllipseBlueMbImg from "@/assets/ellipse-blue-mb.png"
import landingEllipseBlueTaImg from "@/assets/ellipse-blue-ta.png"
import landingEllipseBluePcImg from "@/assets/ellipse-blue-pc.png"
import landingFeaturePcImg from "@/assets/feature-pc.png"
import landingFeatureTag1Img from "@/assets/feature-tag1.png"
import landingFeatureTag2Img from "@/assets/feature-tag2.png"
import Image from "next/image";

export default function LandingNotificationFeatureSection() {
    return (
        <div className="relative pt-16 md:pt-28 md:pb-12 lg:pt-32 lg:pb-20">
            <div className="flex flex-col gap-8 px-8 md:px-16 lg:px-0 lg:relative lg:w-[1068px] lg:mx-auto">
                <div className="flex flex-col gap-3 md:gap-3.5">
                    <h1 className="text-700-20 md:text-700-40">알림으로 보다 <span className="text-primay-blue">빨라진 거래</span></h1>
                    <p className="text-400-14 md:text-400-18 text-gray-600">
                        교환 제안부터 판매 완료까지,<br/>       
                        실시간 알림으로 놓치지 마세요
                    </p>               
                </div>
                <div className="flex flex-col items-center gap-4 md:relative">
                    <div className="max-w-64 w-full flex flex-col gap-2 md:hidden">
                        <Image src={landingFeatureTag1Img} alt="landingFeatureTag1Img"  className="self-start w-36"/>
                        <Image src={landingFeatureTag2Img} alt="landingFeatureTag2Img" className="self-end w-48"/>
                    </div>
                    <Image src={landingFeaturePcImg} alt="landingFeaturePcImg" className="md:px-6 lg:px-0 lg:max-w-3/4 lg:self-end"/>
                </div>
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-96 flex-col gap-4 ">
                    <Image src={landingFeatureTag1Img} alt="landingFeatureTag1Img"  className="self-start"/>
                    <Image src={landingFeatureTag2Img} alt="landingFeatureTag2Img" className="self-end"/>
                </div>
            </div>
            <div className="w-full absolute bottom-0 -z-10 lg:left-1/2 lg:-translate-x-1/2">
                <Image src={landingEllipseBlueMbImg} alt="landingEllipseBlueMbImg" className="w-3/4 md:hidden"/>
                <Image src={landingEllipseBlueTaImg} alt="landingEllipseBlueTaImg" className="w-3/4 hidden md:block lg:hidden"/>
                <Image src={landingEllipseBluePcImg} alt="landingEllipseBluePcImg" className="w-[80%] hidden lg:block"/>
            </div>
        </div>
    )
}