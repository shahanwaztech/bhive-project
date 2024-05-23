'use client'
import React, {useState} from 'react';
import HeroSection from "@/components/hero-section";
import WhyChooseUs from "@/components/why-choose-us";
import OurSpaceOverview from "@/components/our-space-overview";
import Footer from "@/components/footer";
import {AnimatePresence} from "framer-motion";
import Loading from "@/components/loading";
import NavBar from "@/components/navbar";
import BottomText from "@/components/bottom-text";

export default function Home() {
    const [loading, setLoading] = useState(true)
    return (
        <AnimatePresence>
            {loading ? (
                <Loading setLoading={setLoading}/>
            ) : (
                <div className="bg-[#F9FAFF]">
                    <NavBar/>
                    <div className="flex flex-col items-center justify-center w-[100%]">
                        <div className="hidden md:block" style={{
                            backgroundImage: `url('/structure.png')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            marginTop: "-2%",
                        }}>
                            <HeroSection/>
                        </div>
                        <div className="block md:hidden" style={{
                            backgroundImage: `url('/mobile-structure.png')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            marginTop: "-5%",
                            width: '100%'
                        }}>
                            <HeroSection/>
                        </div>
                        <WhyChooseUs/>
                        <OurSpaceOverview/>
                        <Footer/>
                    </div>
                    <BottomText/>
                </div>)}
        </AnimatePresence>
    );
}
