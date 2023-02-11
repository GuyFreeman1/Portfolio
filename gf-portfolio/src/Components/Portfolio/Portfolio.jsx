import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Sm from '../../img/p1.png';
import Qr from '../../img/p2.png';
import Cc from '../../img/p3.png';
import Mg from '../../img/p4.png';
import We from '../../img/p5.png';
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio'>

        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={5}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a href="https://guyfreeman-weather.netlify.app/">
                <img src={We} alt="" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://guyfreeman-qr-generator.netlify.app/">
                <img src={Qr} alt="" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://guyfreeman1.github.io/SmartHouse1/">
                <img src={Sm} alt="" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://guyfreeman-currencyconvertor.netlify.app/">
                <img src={Cc} alt="" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://guyfreeman-movieguides.netlify.app/">
                <img src={Mg} alt="" />
                </a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
