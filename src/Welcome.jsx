import { useEffect } from "react";
import React, { useState } from 'react';

function Welcome() {

    const fullText = 'Full Stack Developer';
    const [displayedText, setDisplayedText] = useState("");

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
            <div className="flex flex-col justify-center items-center text-white pt-2">
                <h2 className="text-4xl">Hello I'm</h2>
                <h1 className="text-5xl font-bold">Blake Rears</h1>
                <h3 className="text-2xl font-mono text-cyan-200 pt-1">{displayedText}</h3>
            </div>
            <hr className="w-full h-px my-2 bg-gradient-to-r from-transparent via-gray-500 to-transparent border-none"></hr>
        </>
    );
}

export default Welcome