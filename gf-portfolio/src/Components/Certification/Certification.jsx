import React from 'react'
import './Certification.css'
import { Swiper, SwiperSlide, } from "swiper/react";
import Cert1 from '../../img/c1.png'
import Cert2 from '../../img/c2.png'
import Cert3 from '../../img/c3.png'
import Cert4 from '../../img/c4.png'
import Cert5 from '../../img/c5.png'
import Cert6 from '../../img/c6.png'
import {Pagination} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'




const Certification = () => {
    const courses = 
    [
    {
        img: Cert1,
        review:"Full stack development refers to the end-to-end application software development, including the front end and back end. The front end consists of the user interface, and the back end takes care of the business logic and application workflows."   
    },
    {
        img: Cert2,
        review:"Python is as efficient and comfortable as reptile Python. Python is immensely useful for companies using multiple software and vendors. The overall experience is very satisfactory as the product is extremely easy to learn."   
    },
    {
        img: Cert3,
        review:"React's primary goal is to minimize the bugs that occur when developers are building UIs. It does this through the use of components — self-contained, logical pieces of code that describe a portion of the user interface."   
    },
    {
        img: Cert4,
        review:"JavaScript , often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior"   
    },
    {
        img: Cert5,
        review:"JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[10] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles."   
    },
    {
        img: Cert6,
        review:"Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation."   
    },
]
  return (
    <div className='t-wrapper'>
      <div className='t-heading'>
        <span>You'll always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      </div>
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
        {courses.map((course, index)=>{
            return(
                <SwiperSlide key={index}>
                    <div className='testimonial'>
                    <img src={course.img} alt="" />
                    <span>{course.review}</span>
                    </div>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </div>
  )
}

export default Certification
