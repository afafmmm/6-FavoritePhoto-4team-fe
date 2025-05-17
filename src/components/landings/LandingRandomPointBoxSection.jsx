
import randomPointPcImg from "@/assets/randompoint-pc.png"
import randomPointGiftBlueImg from "@/assets/randompoint-gift-blue.png"
import randomPointGiftRedImg from "@/assets/randompoint-gift-red.png"
import randomPointGiftBluePcImg from "@/assets/randompoint-gift-blue-pc.png"
import randomPointGiftRedPcImg from "@/assets/randompoint-gift-red-pc.png"
import Image from "next/image"

export default function LandingRandomPointBoxSection() {
    return(
        <div 
        className="relative pt-16 pb-8 md:pb-16 lg:pb-0 md:pt-28 lg:pt-32 bg-cover bg-center overflow-y-hidden"
        style={{
        background: 'linear-gradient(0deg, rgba(42, 123, 155, 1) 0%, rgba(80, 82, 51, 1) 0%, rgba(0, 0, 0, 1) 100%)'
        }}
        >
            < div className="relative z-10 px-8 md:px-16 lg:px-0 flex flex-col gap-8 lg:gap-10">
                <div className="flex flex-col gap-3 md:gap-3.5 lg:w-[1068px] lg:mx-auto">
                    <h1 className="text-700-20 md:text-700-40">랜덤 상자로 <span className="text-main">포인트 받자! 🎉</span></h1>
                    <p className="text-400-14 md:text-400-18 text-gray-600">
                        한 시간마다 주어지는 랜덤 상자를 열고,<br/>       
                        포인트를 획득하세요
                    </p>               
                </div>
                <div className="relative lg:hidden ">
                    <Image src={randomPointPcImg} alt="randomPointPcImg" className="md:px-6 lg:px-0 lg:w-3/5 lg:max-w-[900px] lg:inline-block"/>
                </div>
            </div>                
            <Image src={randomPointGiftBlueImg} alt="randomPointGiftBlueImg" className="absolute -left-[10%] md:-left-0 bottom-0 md:w-96 lg:hidden"/>
            <Image src={randomPointGiftRedImg} alt="randomPointGiftRedImg" className="absolute top-1/2 -translate-y-1/2 md:-translate-y-0 right-0 md:w-32 lg:hidden"/>
            <div className="hidden lg:block text-center mt-10 ">
                <div className="inline-block relative z-50 pb-16">
                    <Image
                    src={randomPointPcImg}
                    alt="randomPointPcImg"
                    className="max-w-[900px] w-full"
                    />
                    <Image src={randomPointGiftBluePcImg} alt="randomPointGiftBluePcImg" className="hidden -z-10 lg:block absolute -bottom-2 -left-6/12"/>
                    <Image src={randomPointGiftRedPcImg} alt="randomPointGiftRedPcImg" className="hidden w-72 -z-10 lg:block absolute -right-3/12 top-1/6"/>
                </div>
            </div>
        </div>
    )
}