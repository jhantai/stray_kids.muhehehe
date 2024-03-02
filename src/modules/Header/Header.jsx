import React, {useState} from 'react';
import './Header.css'
import logo from '../../assets/logo.png'
import CloseIcon from '@mui/icons-material/Close';
import {animate} from "../../constants/animate";
import { motion } from "framer-motion";

function Header(props) {
    const [activeModalWindov, setActiveModalWindov] = useState(false)
    return (
        <div>
            {activeModalWindov ?
                <motion.div
                    className={'headerModalWindov'}
                    variants={animate}
                    initial="hidden"
                    whileInView="visible"
                >
                    {/*<div>{CloseIcon}</div>*/}
                    <button
                        className={'closeBtn'}
                        onClick={() => {setActiveModalWindov(!activeModalWindov)}}
                    >X</button>
                    <div>
                        <h2>Заказ брони</h2>
                        <div className={'headerForm'}>
                            <form>
                                <input placeholder={'Ваше имя'} type="text" name={'username'}/>
                                <input className={'inputTelephoneNumber'} placeholder={'Ваш номер телефона'} type="number" name={'telephone'}/>
                                <input type="date" name={'date'}/>
                                <button type="submit">Заказать бронь</button>
                            </form>
                            <p className={'modalWindovWarning'}>**вам позвонит менеджер для уточнения брони</p>
                        </div>
                    </div>
                </motion.div>
                :
                null

            }
            <header>
            <a href="/"><img src={logo} alt=""/></a>
                <div>
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/foodlist">Меню</a></li>
                        <li><a href="/about">о нас</a></li>
                        <input
                            type={"button"}
                            value={'Заказать бронь'}
                            onClick={() => {setActiveModalWindov(!activeModalWindov)}}
                        />
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;