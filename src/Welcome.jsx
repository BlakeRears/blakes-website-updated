import { useEffect } from "react";
import React, { useState } from 'react';
import pfp from '/public/HeadshotPFPCircle.png';
import pfpanimation from './assets/headshotanimationweb.webm';

function Welcome() {

    const fullText = 'Full Stack Developer';
    const [displayedText, setDisplayedText] = useState("rs%^&tu213xyz0@#$%^1");

    useEffect(() => {
        let index = 0;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        const interval = setInterval(() => {
            if (index < fullText.length) {
                let scrambled = "";
                for (let i = index; i < fullText.length; i++) {
                    scrambled += chars[Math.floor(Math.random() * chars.length)];
                }
                setDisplayedText(fullText.slice(0, index) + scrambled);
                index++;
            } else {
                setDisplayedText(fullText);
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row md:justify-between justify-center items-center text-white pt-10 md:mx-5">
                <div className="">
                    <h2 id='topPage' className="text-4xl md:text-5xl lg:text-6xl xl:text-[110px]">Hello I'm</h2>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-[130px] font-bold">Blake Rears</h2>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-[50px] font-mono text-cyan-200 my-2 mx-1">{displayedText}</h2>
                    <a
                        href="#projects"
                        className="hidden text-4xl bg-transparent border-2 rounded-[50px] hover:bg-gray-200 text-cyan-500 font-semibold p-5 shadow-lg transition-colors duration-300 xl:inline-block mt-10 text-shadow-mg"
                    >
                        View Projects
                    </a>
                </div>

                <div className="relative overflow-hidden p-3 w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={pfpanimation} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div >



            <hr className="w-full h-px my-2 bg-gradient-to-r from-transparent via-gray-500 to-transparent border-none"></hr>


        </>
    );
}

export default Welcome