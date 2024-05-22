import React from 'react';
import Logo from "../../public/navbar/logo.png";
import CallIcon from "../../public/navbar/call.svg";
import Image from "next/image";

const NavBar = () => {
    return (
        <nav
            className="w-[100%] md:max-w-[1440px] z-[9999999999] relative flex flex-row items-center justify-between px-[20px] md:px-[40px] py-[20px] bg-white border-[#eee] border-b-[2px]">
            <div className="cursor-pointer">
                <Image src={Logo} alt={'Logo'} placeholder="blur" className="h-[40px]  w-auto object-fill"/>
            </div>
            <div
                className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer border-[2px] rounded-lg border-[#F2B304]">
                <Image src={CallIcon} alt='Icon' className="h-[20px] w-[20px]"/>
            </div>
        </nav>
    )
}

export default NavBar;
