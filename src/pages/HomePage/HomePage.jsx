import React from 'react';
import TitleSection from "../../modules/TitleSection/TitleSection";
import Advantages from "../../modules/Advantages/Advantages";
import Grooming from "../../modules/Grooming/Grooming";
import FoodSwiper from "../../modules/FoodSwiper/FoodSwiper";

const HomePage = () => {
    return (
        <div style={{overflow: "hidden"}}>
           <TitleSection />
           <Advantages />
           <Grooming/>
           <FoodSwiper />
        </div>
    );
};

export default HomePage;