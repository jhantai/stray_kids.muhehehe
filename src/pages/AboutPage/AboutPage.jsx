
import React from 'react'
import './AboutPage.css'
import Background from '../../components/Background/Background';
import Grooming from '../../modules/Grooming/Grooming';
import SwiperAnimals from '../../modules/SwiperAnimals/SwiperAnimals';
import Footer from '../../modules/Footer/Footer';


const AboutPage = () => {
    return (
       <div style={{overflow: "hidden"}}>
        <Background/>
        <Grooming/>
        <SwiperAnimals/>
       </div>
        
    );
};

export default AboutPage;