import React from 'react';
import './FoodListTitle.css'
import {animate} from "../../constants/animate";
import { motion } from "framer-motion";

function FoodlistTitle(props) {
    return (
        <section>
            <motion.div
                className="text_forback"
                variants={animate}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            >
                <p>Наше Меню</p>
            </motion.div>
        </section>
    );
}

export default FoodlistTitle;