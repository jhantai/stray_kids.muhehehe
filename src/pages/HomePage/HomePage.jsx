import React from 'react';
import TitleSection from "../../modules/TitleSection/TitleSection";
import Advantages from "../../modules/Advantages/Advantages";
import Grooming from "../../modules/Grooming/Grooming";

const HomePage = () => {
    return (
        <div style={{overflow: "hidden"}}>
           <TitleSection />
           <Advantages />
           <Grooming/>
        </div>
    );
};

export default HomePage;