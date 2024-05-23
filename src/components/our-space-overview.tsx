'use client'
import React from 'react'
import Image from "next/image";
import ArrowIcon from "../../public/arrow.svg";
import Icon1 from "../../public/our-space-overview/icon1.png";
import Icon2 from "../../public/our-space-overview/icon2.svg";
import Icon3 from "../../public/our-space-overview/icon3.svg";
import Icon4 from "../../public/our-space-overview/icon1.png";
import Icon5 from "../../public/our-space-overview/icon5.svg";
import Icon6 from "../../public/our-space-overview/icon6.svg";
import Image1 from "../../public/our-space-overview/1.png";
import Image2 from "../../public/our-space-overview/2.png";
import Image3 from "../../public/our-space-overview/3.png";
import Image4 from "../../public/our-space-overview/4.png";
import Image5 from "../../public/our-space-overview/5.png";
import Image6 from "../../public/our-space-overview/6.png";
import LocationArrow from "../../public/our-space-overview/location-arrow.svg";
import GoArrow from "../../public/our-space-overview/go-arrow.svg";
import {useRouter} from "next/navigation";
import {motion} from "framer-motion";

interface PropsObject {
    id: number,
    name: string,
    imgSrc: any,
    range: number,
    dayPassAmount: number,
    bukPassAmount: number,
    discount: number,
    href: string,
    tag: {
        tagIcon: any,
        tagName: string
    }
}

const OurSpaceOverviewObject: PropsObject[] = [
    {
        id: 1,
        name: 'HSR Sector 6, Service Road',
        imgSrc: Image1,
        range: 6,
        dayPassAmount: 249,
        bukPassAmount: 2400,
        discount: 20,
        href: '',
        tag: {
            tagIcon: Icon1,
            tagName: 'Workspace'
        }
    },
    {
        id: 2,
        name: 'HSR Sector 6, Service Road',
        imgSrc: Image2,
        range: 6,
        dayPassAmount: 249,
        bukPassAmount: 2400,
        discount: 20,
        href: '',
        tag: {
            tagIcon: Icon2,
            tagName: 'Honeykomb'
        }
    },
    {
        id: 3,
        name: 'HSR Sector -6, 5th main Road',
        imgSrc: Image3,
        range: 6,
        dayPassAmount: 249,
        bukPassAmount: 2400,
        discount: 20,
        href: '',
        tag: {
            tagIcon: Icon3,
            tagName: 'Platinum'
        }
    },
    {
        id: 4,
        name: 'HSR Sector -2, 27th main Road',
        imgSrc: Image4,
        range: 6,
        dayPassAmount: 249,
        bukPassAmount: 2400,
        discount: 20,
        href: '',
        tag: {
            tagIcon: Icon4,
            tagName: 'Workspace'
        }
    },
    {
        id: 5,
        name: 'HSR Sector 6, Service Road',
        imgSrc: Image5,
        range: 6,
        dayPassAmount: 249,
        bukPassAmount: 2400,
        discount: 20,
        href: '',
        tag: {
            tagIcon: Icon5,
            tagName: 'Campus'
        }
    },
    {
        id: 6,
        name: 'HSR Sector -6, 5th main Road',
        imgSrc: Image6,
        range: 6,
        dayPassAmount: 249,
        bukPassAmount: 2400,
        discount: 20,
        href: '',
        tag: {
            tagIcon: Icon6,
            tagName: 'Premium'
        }
    }
]
const OurSpaceOverview: React.FC<any> = () => {

    const router = useRouter();
    const MotionImage = motion(Image);

    return (
        <section
            className="w-[100%] h-[100%] pt-[10px] md:pt-[40px] md:max-w-[1440px] flex flex-col items-start justify-start px-[20px] md:px-[40px]">
            <div
                className="flex w-[100%] flex-row md:items-start md:justify-start items-center justify-between md:pt-0 md:pb-0 pt-[20px] pb-[30px]">
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
                    className="text-[#263238] font-bold md:text-[36px] text-[24px]">Our Space Overview</motion.h1>
                <MotionImage
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
                    src={ArrowIcon} alt={'arrow-icon'} className="w-[24px] h-auto block md:hidden object-fill"/>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-3  w-[100%]  pt-0 pb-[10px] py-0 md:py-[20px] gap-[16px] md:gap-[45px]">
                {OurSpaceOverviewObject.map((item) => {
                    return (
                        <motion.div
                            key={item.id}
                            initial={{x:-20,opacity:0}}
                            whileInView={{x:0,opacity:1}}
                            viewport={{once: true}}
                            transition={{
                                duration: 0.05*item.id,
                                ease: 'easeOut',
                                type: 'spring',
                                damping: 6,
                                stiffness: 100,
                                delay: 0.15*item.id
                            }}
                            onClick={() => router.push(`${item.href}`)}
                             className="p-[12px] border-[#EEE7E7] cursor-pointer border-[1.08px] bg-white rounded-[8px]">
                            <div className="flex flex-row items-center pb-[16px] justify-between">
                                <h1 className="text-[18px] md:text-[20px] font-semibold text-[#263238] mr-[30px]">{item.name}</h1>
                                <div
                                    className="px-[15px] py-[7px] gap-[8px] bg-[#F9F9F9] border-[#EEE7E7] border-[0.47px] rounded-[6.47px] flex flex-col items-center justify-center">
                                    <Image src={LocationArrow} alt='icon'
                                           className="w-[15px] md:w-[18px] h-[15px] md:h-[18px]"/>
                                    <span
                                        className="text-[#263238] opacity-50 text-[7.46px] md:text-[8px] font-medium">{item.range}Kms</span>
                                </div>
                            </div>
                            <div className="relative">
                                <Image src={item.imgSrc} alt={item.name} placeholder="blur"
                                       className="w-[100%] rounded-[6px] overflow-hidden h-auto object-fill"/>
                                <div
                                    className="bg-gradient absolute rounded-[5px] px-[8px] py-[5px] items-center top-[10px] left-[10px] flex flex-row gap-[8px]">
                                    <Image src={item.tag.tagIcon} alt={item.tag.tagName}
                                           className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] object-cover"/>
                                    <span
                                        className="text-[#FFBB00] text-[12px] md:text-[14px] font-medium">{item.tag.tagName}</span>
                                </div>
                            </div>
                            <div
                                className="pt-[22px] flex flex-row gap-[6px] md:gap-[12px] items-center justify-between">
                                <div
                                    className="flex w-[100%] rounded-[6px] flex-row justify-between items-center px-[12px] py-[8px] bg-[#F9F9F9] border-[#EEE7E7] border-[0.5px]">
                                    <div className="flex flex-col gap-[8px]">
                                        <span
                                            className="text-[#65624C] text-[12px] md:text-[14px] font-medium">Day Pass</span>
                                        <div className="flex flex-row items-center">
                                            <h1 className="text-[#263238] text-[18px] md:text-[20px] font-semibold">₹{item.dayPassAmount}</h1>
                                            <span
                                                className="text-[#263238] opacity-80 font-medium text-[11px] md:text-[12px]"> / Day</span>
                                        </div>
                                    </div>
                                    <Image src={GoArrow} alt={'icon'} className="w-[21px] h-[12px] object-fill"/>
                                </div>
                                <div
                                    className="w-[100%] relative rounded-[6px] flex flex-row justify-between items-center px-[12px] py-[8px] bg-[#FFCF4B] border-[#FFC422] border-[1px]">
                                    <div className="flex flex-col gap-[8px]">
                                        <span className="text-[#65624C] text-[12px] md:text-[14px] font-medium">Bulk Pass</span>
                                        <div className="flex flex-row items-center">
                                            <h1 className="text-[#263238] text-[18px] md:text-[20px] font-semibold">₹{item.bukPassAmount}</h1>
                                            <span
                                                className="text-[#263238] opacity-80 font-medium text-[11px] md:text-[12px]"> / 10 Days</span>
                                        </div>
                                    </div>
                                    <Image src={GoArrow} alt={'icon'} className="w-[21px] h-[12px] object-fill"/>
                                    <div
                                        className="absolute px-[8px] py-[4px] top-[-13px] left-[30%] flex items-center justify-center bg-[#263238] rounded-[3px]">
                                        <span className="text-[8px] font-medium text-[#FFFDF7]">{item.discount}% Discount</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default OurSpaceOverview;
