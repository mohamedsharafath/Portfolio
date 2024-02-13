import React from 'react'
import { Data } from './Data'
import {Swiper,SwiperSlide} from "swiper/react";
import{ Pagination } from "swiper/modules";
import "./testimonials.css"
import "swiper/css";
import"swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="testimonials container section">
        <h2 className="section__title">My clients say</h2>
        <span className="section__subtitle">Testimonial</span>
        <Swiper className="testimonial__container"
        loop={true}
        grabCursor={true}
        // slidesPerView={1}
        spaceBetween={24}
        pagination={{clickable:true}}
        breakpoints={{
            576:{
                slidesPerView:2,
                // spaceBetween:20,
            },
            768:{
                slidesPerView:2,
                spaceBetween:48,
            },
            1024:{
                slidesPerView:5,
                spaceBetween:50,
            },
        }}
        modules={[Pagination]}
        
        >
            {Data.map(({id,image,title,description})=>{
                return (
                    <SwiperSlide className='testimonial__card'>
                        <img src={image} alt=""  className='testimonial__img'/>
                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials