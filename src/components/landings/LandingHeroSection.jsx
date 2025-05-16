import ladingMbBgImg from "@/assets/landing-mb-bg.png"
import ladingTaBgImg from "@/assets/landing-ta-bg.png"
import ladingPcBgImg from "@/assets/landing-pc-bg.png"
import ladingHeroImg from "@/assets/landing-hero.png"
import mainLogoImg from "@/assets/main-logo.png"
import Link from "next/link"
import Image from "next/image"

export default function LadingHeroSection() {
  return (
    <div className="relative">
        <div className="">
            <Image src={ladingMbBgImg} alt="mobile"  className="flex w-full px-4 max-h-[700px] box-border md:hidden"/>
            <Image src={ladingTaBgImg} alt="tablet"  className="w-full hidden max-h-[1000px] px-9 md:block lg:hidden"/>
            <Image src={ladingPcBgImg} alt="pc" className=" w-full min-h-[1100px] hidden px-14 lg:block"/>
            <div className="absolute bottom-0 h-full flex flex-col justify-evenly items-center">
                <div className="flex flex-col gap-4  md:gap-10 items-center md:py-10 text-center">
                    <Image src={mainLogoImg} alt="mainLogo"/>
                    <h2 className="text-700-20 md:text-700-40 ">구하기 어려웠던<br/><span className="text-main">나의 최애</span>가 여기에!</h2>
                    <Link
                    href="/home"
                    className="flex justify-center items-center w-40 md:w-56 h-10 md:h-14 rounded-xs text-700-12 md:text-700-16 bg-main text-my-black transition-all duration-300 ease-in-out hover:brightness-110 hover:scale-105"
                    >
                    최애 찾으러 가기
                    </Link>
                </div>
                <div className="">
                    <Image src={ladingHeroImg} alt="landing" className=""/>
                </div>
            </div>
        </div>
    </div>
  )
}
