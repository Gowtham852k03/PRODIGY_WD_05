import React from 'react';

import { MdSunny } from "react-icons/md";
import { PiMoonStarsFill } from "react-icons/pi";


const Footer = ({ isDay }) => {
    return (
        <footer className='d-flex justify-content-center'>
            <div className='footer-content'>


                <div className='daynight display-9 text-center  '>
                    <div className='dnicon'>{isDay === "" ? "" : isDay ? <MdSunny className='sun' /> : <PiMoonStarsFill className='moon' />}</div>
                    {isDay === "" ? "" : isDay ? 'day' : 'night'}

                </div>


            </div>
        </footer>
    );
}

export default Footer;
