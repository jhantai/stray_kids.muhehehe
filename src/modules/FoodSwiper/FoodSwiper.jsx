import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination} from "swiper/modules";
import {food} from "../../constants/foodSwiper";
import './FoodSwiper.css'
import {animate} from "../../constants/animate";
import { motion } from "framer-motion";

function FoodSwiper() {
    return (
        <motion.section
            className={'FoodSwiper'}
            variants={animate}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
            <h2>Наша еда</h2>
            <Swiper
                navigation={true}
                pagination={true}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                grabCursor={true}
            >
                {food.map((item, idx) => {
                    return (
                        <SwiperSlide className={'mainSwiperSlide'} key={idx}>
                            <div>
                                <a href="foodlist">
                                    <img className={'swiperFoodImg'} src={item.src} alt="food"/>
                                </a>
                            </div>
                            <p>{item.description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </motion.section>
    );
}

export default FoodSwiper;