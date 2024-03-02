import React from 'react';
import './TitleSection.css'
import {animate} from "../../constants/animate";
import { motion } from "framer-motion";

function TitleSection(props) {
    return (
        <motion.section
            className={'titleSectionMain'}
            variants={animate}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
            <div>
                <h1>Мы приглашаем вас в наше зоо-кафе!</h1>
            </div>
        </motion.section>
    );
}

export default TitleSection;