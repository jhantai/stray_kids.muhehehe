import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import {animalsSwiper} from "../../constants/animalsSwiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperAnimals.css'
import {animate} from "../../constants/animate";
import { motion } from "framer-motion";


export default function App() {
  return (
    <motion.section
        variants={animate}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
    >
      <h3 className='title'>Наши животные</h3>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
        grabCursor={true}
      >
        {animalsSwiper.map((item, idx) => {
          return (
              <SwiperSlide key={idx}>
                <div>
                  <img className={'swiperAnimalsImg'} src={item.src} alt="cat"/>
                </div>
                {/* <p className='swiper-animals-description'>{item.description}</p> */}
              </SwiperSlide>
          )
        })}
      </Swiper>
    </motion.section>
  );
}
