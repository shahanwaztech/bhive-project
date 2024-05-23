import React from 'react';
import MobileAppModel from "../../public/footer/mobileAppModel.png";
import AppModel from "../../public/footer/appmodel.png";
import GooglePlay from "../../public/footer/googleplay.png";
import AppStore from "../../public/footer/appstore.png";
import Image from "next/image";
import ArrowIcon from "../../public/arrow.svg";
import {motion} from "framer-motion";

const Footer = () => {
    const MotionImage = motion(Image);
    return (
        <footer
            className="w-[100%] h-[100%] pt-[10px] md:pt-[40px] md:max-w-[1440px] flex flex-col items-center justify-center px-[20px] md:px-[40px]">
            <div
                className="flex w-[100%] flex-row md:items-start md:justify-start items-center justify-between pt-[10px] pb-[20px] md:pb-[100px] lg:pb-[180px]">
                <motion.h1
                    initial={{x: -20, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{
                        duration: 0.1,
                        ease: 'easeOut',
                        type: 'spring',
                        damping: 6,
                        stiffness: 100,
                        delay: 0.25
                    }}
                    className="text-[#263238] font-bold md:text-[36px] text-[24px]">Download our app now
                </motion.h1>
                <MotionImage
                    initial={{x: 20, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{
                        duration: 0.1,
                        ease: 'easeOut',
                        type: 'spring',
                        damping: 6,
                        stiffness: 100,
                        delay: 0.25
                    }}
                    src={ArrowIcon} alt={'arrow-icon'} className="w-[24px] h-auto block md:hidden object-fill"/>
            </div>
            <motion.div
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{
                    duration: 0.1,
                    ease: 'easeOut',
                    type: 'spring',
                    damping: 6,
                    stiffness: 100,
                    delay: 0.25
                }}
                className="p-0 md:p-[16px] lg:p-[26px] relative flex flex-col md:flex-row justify-end items-center shadow-md rounded-lg bg-white w-[100%]">
                <div className="relative md:absolute md:left-[16px] lg:left-[26px] md:bottom-[16px] lg:bottom-[26px]">
                    <Image src={AppModel} alt={'AppModel'} placeholder="blur"
                           className="w-[100%] pt-[20px] md:w-[280px] lg:w-[400px] h-auto object-fill"/>
                </div>
                <div
                    className="flex flex-col items-start gap-[20px] lg:gap-[40px] md:mt-[10px] lg:mt-[70px] w-[100%] p-[15px] md:p-0 md:w-[45vw]">
                    <p className="text-[20px] hidden md:block font-medium text-[#605F5F]">Boost your productivity with
                        the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive
                        perks.</p>
                    <div className="flex flex-row items-center gap-[20px]">
                        <Image src={GooglePlay} alt={'Icon'} placeholder="blur"
                               className="w-[146px] cursor-pointer h-auto object-fill"/>
                        <Image src={AppStore} alt={'Icon'} placeholder="blur"
                               className="w-[146px] cursor-pointer h-auto object-fill"/>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer;
