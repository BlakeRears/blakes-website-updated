import React, { useState } from 'react';
import HamBurgerIcon from './assets/Hamburger_icon.svg.png';

function Nav({ menuOpen, setMenuOpen }) {

    return (
        <div className="fixed top-0 w-full z-60 flex items-center justify-between px-6 py-4 bg-transparent">
            <a href='#topPage' onClick={() => setMenuOpen(false)}><h1 className="flex justify-end text-cyan-100 font-extrabold text-2xl">Blake Rears</h1></a>

            <div className='flex items-center gap-4'>
                <a href='https://www.linkedin.com/in/blakerears/'
                    className='flex items-center text-white border-2 border-white rounded-3xl px-2 py-1'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Resume | CV
                </a>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={HamBurgerIcon} alt='menu' className='size-10 text-white hover:scale-102' />
                </button>
            </div>

        </div>
    );
}

export default Nav