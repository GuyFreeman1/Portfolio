import React from 'react'
import './Works.css'
import Resume from './resume.docx'
import C1 from '../../img/1.png'
import C2 from '../../img/2.png'
import C3 from '../../img/3.png'
import C4 from '../../img/4.png'
import C5 from '../../img/5.png'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";


const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className='works'>
      <div className='awesome'>
            <span style={{color: darkMode? 'white': ''}}>Done all of these</span>
            <span>Cuorses & Bootcamps</span>
            <span>You should hire me because of my proven ability 
                <br /> to build efficient front end user interfaces in line with modern best practices. 
                <br /> I am experienced in using JavaScript, 
                <br /> as well as the React framework, to develop both front & back end applications
            </span>
            <a href={Resume}>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur' style={{background: "#abf1ff94"}}></div>
            <div className='blur s-blurs' style={{background: "var(--purple)"}}></div>
        </div>
        <div className='w-right'>
        <motion.div 
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className='w-mainCircle'>
            <div className='w-secCircle'>
                <img src={C1} alt="" />
            </div>
            <div className='w-secCircle'>
                <img src={C2} alt="" />
            </div>
            <div className='w-secCircle'>
                <img src={C5} alt="" />
            </div>
            <div className='w-secCircle'>
                <img src={C3} alt="" />
            </div>
            <div className='w-secCircle'>
                <img src={C4} alt="" />
            </div>
        </motion.div>
      <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
        </div>
      </div>
    </div>
  )
}

export default Works
