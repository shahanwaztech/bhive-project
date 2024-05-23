'use client'
import React, {useEffect, useState} from 'react';
import Logo from "../../public/navbar/logo.png";
import CallIcon from "../../public/navbar/call.svg";
import Image from "next/image";

const NavBar = () => {
    const [navHeight, setNavHeight] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setNavHeight(window.scrollY);
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav
            className={`w-[100%] ${navHeight > 50 ? ' z-[9999] shadow-md top-0 sticky' : 'relative border-[#eee] border-b-[2px]'} flex items-center justify-center bg-white`}>
            <div className="w-[100%] md:max-w-[1440px] flex flex-row items-center justify-between px-[20px] md:px-[40px] py-[20px]">
            <div className="cursor-pointer">
                <Image src={Logo} alt={'Logo'} placeholder="blur" className="h-[40px]  w-auto object-fill"/>
            </div>
            <div
                className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer border-[2px] rounded-lg border-[#F2B304]">
                <Image src={CallIcon} alt='Icon' className="h-[20px] w-[20px]"/>
            </div>
            </div>
        </nav>
    )
}

export default NavBar;
