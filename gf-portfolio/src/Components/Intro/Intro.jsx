import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkdin from '../../img/linkedin.png';
import Whatsapp from '../../img/whatsapp.png';
import Vectoer1 from '../../img/Vector1.png';
import Vectoer2 from '../../img/Vector2.png';
import boy from '../../img/g3.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glaessesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-scroll';

const Intro = () => {

    const transition = {duration : 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span style={{color: darkMode? 'white' : ''}}>Hi! I Am</span>
                <span>Guy Freeman</span>
                <span>After studying and gaining experience with Full Stack Development, 
                    I'm looking for an opportunity as a Full Stack Developer in the fields of development.
                    I have a strong and positive personality, sociable and hard working.
                    I am very eager to start working, I really like the code and enjoy developing.</span>
            </div>
            <Link to="contact-form" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
           </Link>
            <div className='i-icons'>
                <a href="https://github.com/GuyFreeman1?tab=repositories">
                <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/guy-freeman-26gf11/">
                <img src={Linkdin} alt="" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=0543996916">
                <img src={Whatsapp} alt="" />
                </a>
            </div>
        </div>
        <div className='i-right'>
            <img src={Vectoer1} alt=""  />
            <img src={Vectoer2} alt="" />
            <img src={boy} alt="" />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={glaessesimoji} alt="" />
            <motion.div 
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left: '68%'}}
            transition={transition}
            style={{top: '-4%', left: '68%'}}
            className='dloating-div'>
                <FloatingDiv image={crown} txt1='Full-Stack' txt2='Developer'/>
            </motion.div>
            <motion.div 
            initial={{left: '9rem',}}
            whileInView={{left: '0rem'}}
            transition={transition}
            style={{top: '22rem', left: '-5rem'}}
            className='dloating-div'>
                <FloatingDiv image={thumbup} txt1='Certified!'/>
            </motion.div>
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className='blur' style={{background: "#c1f5ff", top: "17rem", width: "21rem", height: "20rem", left: "-9rem"}}></div>
        </div>
    </div>
  )
}

export default Intro
