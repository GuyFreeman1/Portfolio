import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Git from '@iconscout/react-unicons/icons/uil-github'
import Lin from '@iconscout/react-unicons/icons/uil-linkedin'
import Wht from '@iconscout/react-unicons/icons/uil-whatsapp'

const Footer =()=> {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className='f-contact'>
            <span>Guyfree1991@gmail.com</span>
            <div className='f-icons'>
            <Git color='white' size='3rem'/>
            <Lin color='white' size='3rem'/>
            <Wht  color='white' size='3rem'/>
            </div>
       </div>
    </div>
  )
}

export default Footer
