import React from 'react';
import './Advantages.css'
import {advantagesList} from "../../constants/advantages";

function Advantages(props) {
    return (
        <section className={''}>
            <h2>У нас есть:</h2>
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
        </section>
    );
}

export default Advantages;