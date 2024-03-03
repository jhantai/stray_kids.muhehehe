import React from 'react'
import './Background.css'
import {animate} from "../../constants/animate";
import { motion } from "framer-motion";

const Background = (props) => {
  return (
    <motion.div
        className='div'
        variants={animate}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
    >
    <div className='titleAbout'>
      <p>О нас</p>
    </div>
</motion.div>
  )
}

export default Background