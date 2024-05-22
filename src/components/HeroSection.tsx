import React from 'react'
import Image from "next/image";
import Vedio from "../../public/vedio.png";
const HeroSection = () => {
    return(
        <section className="w-[100%] h-[100%] gap-[20px] md:gap-0 md:h-screen md:max-w-[1440px] flex flex-col-reverse md:flex-row items-center justify-between px-[20px] md:px-[40px]">
            <div className="w-[100%] md:w-[55vw] md:py-0 py-[20px]">
                <h1 className="text-[4.6vw] text-center md:text-start leading-[6vw] font-bold text-[#263238]">Host your meeting with world-class amenities. Starting at <span className="text-[#FFBB00]">₹199/-!</span></h1>
            </div>
            <div className="w-[100%] md:w-[34vw]">
                <Image src={Vedio} alt={'icon'} className="w-[100%] h-auto object-fill" />
            </div>
        </section>
    )
}

export default HeroSection;
