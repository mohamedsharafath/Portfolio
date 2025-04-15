import React from 'react';
import { ProjectData } from './ProjectData';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCube, EffectCoverflow } from "swiper/modules";
import "./project.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";

const Projects = () => {
  return (
    <section className="projects container section">
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">Some of my work</span>

        <Swiper className="projects__container"
            loop={true}
            grabCursor={true}
            spaceBetween={40}
            pagination={{ clickable: true }}
            effect="cube"
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            
            breakpoints={{
                576: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
            }}
            modules={[Pagination, EffectCoverflow]} // Import effect modules
        >
            {ProjectData.map(({ id, icon, title, description, github }) => {
                return (
                    <SwiperSlide key={id} className='project__card'>
                        <div className="project__icon">{icon}</div>
                        <h3 className="project__name">{title}</h3>
                        <p className="project__description">{description}</p>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="project__link">
                            View on GitHub <i className="uil uil-github"></i>
                        </a>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </section>
  );
};

export default Projects;
