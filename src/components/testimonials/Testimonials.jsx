import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'


import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const data=[
  {
    avatar:AVTR1,
    name: 'Richard William',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure illum autem dicta inventore distinctio natus dolores aut non nulla, sed, molestias suscipit, obcaecati sequi cupiditate quisquam minima sint incidunt!'
  },
  {
    avatar:AVTR2,
    name: 'Lilly Norman',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure illum autem dicta inventore distinctio natus dolores aut non nulla, sed, molestias suscipit, obcaecati sequi cupiditate quisquam minima sint incidunt!'
  },
  {
    avatar:AVTR3,
    name: 'Kail Jake',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure illum autem dicta inventore distinctio natus dolores aut non nulla, sed, molestias suscipit, obcaecati sequi cupiditate quisquam minima sint incidunt!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review},index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={name} /> 
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials