import ctaCard from "@/assets/cta-card.png"
import Image from "next/image"
import Link from "next/link"

export default function LadingCTASection() {
    return(
        <div className="flex items-center justify-center py-16 md:py-28 lg:py-32">
            <div className="flex flex-col items-center gap-4 md:gap-6">
                <Image
                src={ctaCard}
                alt="ctaCard"
                className="w-20 md:w-28 transition-transform duration-300 ease-in-out hover:rotate-[-6deg] hover:scale-105"
                />
                <h2 className="text-700-20 md:text-700-28">나의 최애를 지금 찾아보세요!</h2>
                <Link
                    href="/home"
                    className="flex justify-center items-center w-40 md:w-56 h-10 md:h-14 rounded-xs text-700-12 md:text-700-16 bg-main text-my-black transition-all duration-300 ease-in-out hover:brightness-110 hover:scale-105"
                    >
                    최애 찾으러 가기
                </Link>
            </div>
        </div>
    )
}