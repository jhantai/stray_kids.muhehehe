import React from 'react';
import './Advantages.css'
import {advantagesList} from "../../constants/advantages";
import {animate} from "../../constants/animate";
import { motion } from "framer-motion";

function Advantages(props) {
    return (
        <motion.section
            variants={animate}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
            <h2 className={'advantagesTitle'}>У нас есть:</h2>
            <div className={'advantagesSection'}>
                <div className={'catAdvantages'}></div>
                <div className={'advantagesCards'}>
                    {advantagesList.map((item, idx) => {
                        return (
                            <div className={`advantagesCard ${item.classname}`}>
                                <img src={item.src} alt=""/>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </motion.section>
    );
}

export default Advantages;