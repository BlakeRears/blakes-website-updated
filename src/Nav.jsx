import React, {useState} from 'react';
import HamBurgerIcon from './assets/Hamburger_icon.svg.png';

function Nav () {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="flex items-center justify-between px-6 py-4 bg-transparent">
            <h1 className= "flex justify-end text-cyan-100 font-extrabold text-2xl">Blake Rears</h1>

            <div className='flex items-center gap-4'>
                <button className='flex items-center text-white border border-white rounded-3xl px-2 py-1'>Resume | CV</button>
                <img src={HamBurgerIcon} alt='menu' className='size-10 text-white'/>
            </div>
            
        </div>
    );
}

export default Nav