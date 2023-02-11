import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasess from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.docx'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";


const Services =()=> {

    const transition ={duration : 1, type : 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='services'>
        <div className='awesome'>
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>services</span>
            <span>Full Stack Development Course Graduate, 
                <br />
                familiar with a wide range of programming tools, knowledge in development of both Back and Front end
            </span>
            <a href={Resume}>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur' style={{background: "#abf1ff94"}}></div>
        </div>
        <div className='cards'>
            <motion.div 
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}>
                <Card
                emoji ={HeartEmoji}
                heading ={"Frontend"}
                detail ={"HTML, CSS, JavaScript, React, Bootstrap"}
                />
            </motion.div>
            <motion.div 
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
            style={{top: '12rem',left: '-5rem'}}>
                <Card
                emoji ={Glasess}
                heading ={"Full-stack"}
                detail ={"Web-development, JavaScript, Python, MongoDB, Node.js, jQuery"}
                />
            </motion.div>
            <motion.div 
                      initial={{ top: "19rem", left: "25rem" }}
                      whileInView={{ left: "12rem" }}
                      transition={transition}
            style={{top: '19rem',left: '15rem'}}>
                <Card
                emoji ={Humble}
                heading ={"Backend"}
                detail ={"Python, MongoDB, Node.js, NoSQL, MySQL"}
                />
            </motion.div>
            <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services
