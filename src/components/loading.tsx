'use client'
import React, {useEffect} from 'react';
import Image from "next/image";
import Logo from "../../public/navbar/logo.png";
import {motion} from "framer-motion";

interface LoadingProps {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const Loading:React.FC<LoadingProps> = ({setLoading}) => {

    const MotionImage = motion(Image);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        },1000);
        return() => clearTimeout(timer);
    });

    return(
        <div className="relative h-screen bg-[#F9FAFF] z-[999999999] w-[100%] flex items-center justify-center">
            <MotionImage
                animate={{
                    scale: [0.8, 1, 0.8],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                src={Logo}
                alt={'logo'}
                className="w-[40vw] h-auto object-contain"
            />

        </div>
    )
}

export default Loading;
