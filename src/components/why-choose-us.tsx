import React from 'react'
import Image from "next/image";
import ArrowIcon from "../../public/arrow.svg";
import CommunityEvents from "../../public/why-choose-us/community-events.svg";
import GymFacilities from "../../public/why-choose-us/gym.svg";
import HighWifiSpeed from "../../public/why-choose-us/wifi.svg";
import CafeTeaBar from "../../public/why-choose-us/tea.svg";
import Affordable from "../../public/why-choose-us/affordable.svg";
import ComfortLounges from "../../public/why-choose-us/comfort-lounges.svg";
import QuickBooking from "../../public/why-choose-us/quick-booking.svg";
import SportsArea from "../../public/why-choose-us/sports-area.svg";
import {motion} from "framer-motion";

interface ObjectProps {
    id: number,
    name: string,
    imgSrc: string
}

const WhyChooseUsObject: ObjectProps[] = [
    {
        id: 1,
        name: 'Community Events',
        imgSrc: CommunityEvents
    },
    {
        id: 2,
        name: 'Gym Facilities',
        imgSrc: GymFacilities
    },
    {
        id: 3,
        name: 'High-Speed WiFi',
        imgSrc: HighWifiSpeed
    },
    {
        id: 4,
        name: 'Cafe & Tea Bar',
        imgSrc: CafeTeaBar
    },
    {
        id: 5,
        name: 'Affordable',
        imgSrc: Affordable
    },
    {
        id: 6,
        name: 'Comfort Lounges',
        imgSrc: ComfortLounges
    },
    {
        id: 7,
        name: 'Quick Booking',
        imgSrc: QuickBooking
    },
    {
        id: 8,
        name: 'Sports Area',
        imgSrc: SportsArea
    }
]
const WhyChooseUs: React.FC<any> = () => {
    const MotionImage = motion(Image);
    return (
        <section
            className="w-[100%] h-[100%] md:max-w-[1440px] flex flex-col items-start justify-start px-[20px] md:px-[40px]">
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
                    className="text-[#263238] font-bold md:text-[36px] text-[24px]">Why Choose us?</motion.h1>
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%]  pt-0 pb-[10px] py-0 md:py-[20px] gap-[12px] md:gap-[15px]">
                {WhyChooseUsObject.map((item) => {
                    return (
                        <motion.div key={item.id}
                             initial={{y:20,opacity:0}}
                             whileInView={{y:0,opacity:1}}
                             viewport={{once: true}}
                             transition={{
                                 duration: 0.05*item.id,
                                 ease: 'easeOut',
                                 type: 'spring',
                                 damping: 6,
                                 stiffness: 100,
                                 delay: 0.15*item.id
                             }}
                             className="flex flex-col md:flex-row bg-white rounded-lg p-[15px] md:p-[20px] border-[#EEE7E7] border-[1.5px] justify-center md:justify-start items-center gap-[15px]">
                            <Image src={item.imgSrc} alt={item.name} className="w-[28px] h-auto object-fill"/>
                            <span className="text-[13px] md:text-[14px] font-medium text-[#263238]">{item.name}</span>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default WhyChooseUs;
