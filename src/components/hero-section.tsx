import React from 'react'
import Image from "next/image";
import Vedio from "../../public/vedio.png";
import {motion} from "framer-motion";
const HeroSection = () => {
    return(
        <section className="w-[100%] h-[100%] gap-[20px] md:gap-0 md:h-screen lg:h-[600px] md:max-w-[1440px] flex flex-col-reverse md:flex-row items-center justify-between px-[20px] md:px-[40px]">
            <div className="w-[100%] md:w-[55vw] md:py-0 py-[20px]">
                <motion.h1
                    initial={{x:-20,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    viewport={{once: true}}
                    transition={{
                        duration: 0.1,
                        ease: 'easeOut',
                        type: 'spring',
                        damping: 6,
                        stiffness: 100,
                        delay: 0.25
                    }}
                    className="text-[4.6vw] lg:text-[58px] text-center md:text-start leading-[6vw] lg:leading-[70px] font-bold text-[#263238]">Host your meeting with world-class amenities. Starting at <span className="text-[#FFBB00]">₹199/-!</span>
                </motion.h1>
            </div>
            <motion.div
                initial={{x:20,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{once: true}}
                transition={{
                    duration: 0.1,
                    ease: 'easeOut',
                    type: 'spring',
                    damping: 6,
                    stiffness: 100,
                    delay: 0.25
                }}
                className="w-[100%] md:w-[34vw]">
                <Image src={Vedio} alt={'icon'} className="w-[100%] h-auto object-fill" />
            </motion.div>
        </section>
    )
}

export default HeroSection;
