import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    
    <Swiper className='container testimonials__container'
          // install Swiper modules
          modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
      <SwiperSlide className='testimonial'>
        <div className='client__avatar'>
        <img src={AVTR1} alt='avatar'/>
        </div>
        <h5 className='client__name'>Clare Mansilla</h5>
          <small className='client__review'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </small>
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className='client__avatar'>
        <img src={AVTR2} alt=''/>
        </div>
        <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </small>
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className='client__avatar'>
            <img src={AVTR3} alt=''/>
        </div>
        <h5 className='client__name'>Wilma Donet</h5>
          <small className='client__review'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </small>
      </SwiperSlide>
    </Swiper>
    
    </section>
  )
}

export default Testimonials