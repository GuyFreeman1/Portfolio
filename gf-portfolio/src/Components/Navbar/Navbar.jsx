import React from 'react'
import Toggle from '../Toggle/Toggle';
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Guy</div>
            <Toggle/>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul style={{listStyleType: 'none'}}>

                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                    <li>Home</li>
                </Link>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
              <Link to="testimonial" spy={true} smooth={true}>
              Certification
              </Link>
                </ul>
            </div>
            <Link to="contact-form" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
        </div>
    </div>
  )
}

export default Navbar;
