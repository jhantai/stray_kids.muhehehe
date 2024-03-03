import React from 'react';
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WifiIcon from "@mui/icons-material/Wifi";
import cotik from "../../assets/catstanding.png";
import './FoodListInfo.css'
import {animate} from "../../constants/animate";
import { motion } from "framer-motion";

function FoodListInfo() {
    return (
        <motion.section
            className={'foodListSection'}
            variants={animate}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
            <div className="block_with_photo">
                <div className="text_info">
                    <p className='zoocafe_name'>Zoo Cafe</p>
                    <div className="info_dundun">
                        <div className="icon_geo">
                            <FmdGoodIcon/>
                        </div>
                        <p className={'adress'}>Бульвар Эркиндикб 58а б Бишкек</p></div>
                    <div className="info_dundun">
                        <div className="icon_wifi"><WifiIcon></WifiIcon></div>
                        <p>Wifi_Passsword: 123</p></div>

                    <ul className='info_about_us'>
                        <li>Обслуживание: 7%</li>
                        <li>Работаем:С 9:00 до 21:00</li>
                        <li>0550 123 567</li>
                    </ul>
                </div>
                <img className='cotik_photo' src={cotik} alt=""/>
            </div>
        </motion.section>
    );
}

export default FoodListInfo;