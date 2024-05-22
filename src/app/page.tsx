import React from 'react';
import NavBar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/why-choose-us";
import OurSpaceOverview from "@/components/our-space-overview";


export default function Home() {
    return (
        <div className="bg-[#F9FAFF]">
            <NavBar/>
            <div className="hidden md:block" style={{
                backgroundImage:`url('/structure.png')`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"contain",
                marginTop:"-2%",
            }}>
                <HeroSection/>
            </div>
            <div className="block md:hidden" style={{
                backgroundImage:`url('/mobile-structure.png')`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                marginTop:"-5%",
                width:'100%'
            }}>
                <HeroSection/>
            </div>
            <WhyChooseUs/>
            <OurSpaceOverview/>
        </div>
    );
}
