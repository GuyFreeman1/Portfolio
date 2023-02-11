import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Experience = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience'>
        <div className='achievement'>
            <div className='circle' >1+</div>
            <span>years </span>
            <span>Experience</span>
            <div className='blur t-blur' style={{background: "var(--purple)"}}></div>

        </div>
        <div className='achievement'>
            <div className='circle'>20+</div>
            <span>completed </span>
            <span>Projects</span>
        </div>
    </div>
  )
}

export default Experience
