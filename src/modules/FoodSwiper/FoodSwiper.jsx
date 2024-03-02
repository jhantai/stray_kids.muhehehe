import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination} from "swiper/modules";
import {food} from "../../constants/foodSwiper";
import './FoodSwiper.css'
function FoodSwiper(props) {
    return (
        <section className={'FoodSwiper'}>
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
                            <h3>{item.name}</h3>
                            <div>
                                <img src={item.src} alt="food"/>
                            </div>
                            <p>{item.description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
}

export default FoodSwiper;