import oopsImg1 from '@/assets/oops_1.png'
import oopsImg2 from '@/assets/oops_2.png'
import mainLogo from '@/assets/main-logo.png'
import Image from "next/image";
import Link from 'next/link';

export default function NotFound() {
    return(
        <div className='fixed top-0 left-0 w-full h-screen overflow-y-auto  bg-black'>
            <div className="relative h-screen overflow-y-hidden">
                <Link href={"/"}><Image src={mainLogo} alt='main_logo' className='absolute w-28 top-6 left-6'/></Link>
                <Image src={oopsImg1} alt="oops_img1" className='absolute -left-5 bottom-14 md:-left-12 md:-bottom-12 max-w-[180px] md:max-w-[420px] lg:max-w-[554px] aspect-square '/>
                <Image src={oopsImg2} alt="oops_img2" className='absolute right-0 top-1/5 max-w-[190px] md:max-w-[300px] lg:max-w-[400px] aspect-square'/>
                <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold text-center text-nowrap'>현재 접속하신 페이지가<br/>존재하지 않습니다</h2>
                    <p className='text-xs md:text-sm lg:text-base text-center text-nowrap'>
                        서비스 이용에 불편을 드려서 대단히 죄송합니다.<br/>
                        현재 해당 사이트의 페이지가 존재하지 않습니다.<br/>
                        확인하고 다시 시도해 주세요.
                    </p>
                    <Link href={"/"} className='flex justify-center items-center px-4 h-12 text-sm font-semibold bg-main text-my-black rounded-sm'>메인으로 이동하기</Link>
                </div>
                <span className='absolute left-1/2 -translate-x-1/2 bottom-7 text-gray-300 text-xs md:text-sm lg:text-base text-nowrap'>Copyright© Photo Corp. All Rights Reserved.</span>
            </div>
        </div>
    )
}




// NotFound + 나머지 컴포넌트 제작 후 잠자기