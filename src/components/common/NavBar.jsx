import React, { useState } from 'react';
import { Cross, TwoLine } from './Icon';

const NavBar = () => {
    const [show, setShow] = useState(false)
    function mobile() {
        setShow(!show)
        if (show === false) {
            document.body.classList.add('overflow_hidden')
        }
        else {
            document.body.classList.remove('overflow_hidden')
        }
    }

    return (
        <div className="container">
            <div className="flex items-center justify-between py-6">
                <a
                    href="/"
                    className="font-bebas-neue font-normal text-32 leading-normal text-chinese-silver"
                >
                    NAMAN
                </a>

                {/* Nav Links */}
                <ul
                    className={` ${show === true ? "left-0" : "left-[-100%]"}  flex items-center h-full gap-12 sm:gap-8 mobile-view z-[5] duration-300 w-full sm:w-[unset] sm:left-0 flex-col sm:flex-row bg-vampire-black justify-center top-[0%] sm:top-[unset] absolute sm:relative text-chinese-silver`}
                >
                    <li>
                        <a onClick={mobile} href="#work">Work</a>
                    </li>
                    <li>
                        <a onClick={mobile} href="#about">About</a>
                    </li>
                    <li>
                        <a onClick={mobile} href="#contact">Contact</a>
                    </li>
                </ul>
                <button onClick={mobile} className={`${show === false ? "rotate-0" : "rotate-180"} block sm:hidden relative z-[6] duration-300`}>{show === false ? <TwoLine/> : <Cross/> }</button>
            </div>
        </div>
    );
};

export default NavBar;
