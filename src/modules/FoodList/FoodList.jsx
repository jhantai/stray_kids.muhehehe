import React, {useState} from 'react';
import zavtraki from "../../assets/zavtraki.png"
import goryachie from "../../assets/goryachie_bluda.png"
import salaty from "../../assets/salat.png"
import deserty from "../../assets/deserty.png"
import './FoodList.css'
import {zavtrakii} from "../../constants/foodList/zavtrakii";
import {goryachee} from "../../constants/foodList/goryachee";
import {salat} from "../../constants/foodList/salat";
import {desert} from "../../constants/foodList/desert";
import CloseIcon from "@mui/icons-material/Close";

function FoodList(props) {
    const [deserts, setDeserts] = useState(false)
    const [zavtraks, setZavtraks] = useState(false)
    const [goryach, setGoryach] = useState(false)
    const [salats, setSalats] = useState(false)
    const [hidenFootList, setHidenFootList] = useState(false)
    console.log(deserts, zavtraks, goryach, salats)
    return (
        <section>
            <div>
                {hidenFootList ?
                    null
                    :
                    <div>
                        {zavtraks ?
                            null
                            :
                            <div
                                className='eda_photo'
                                onClick={() => {
                                    setZavtraks(true)
                                    setHidenFootList(true)
                                }}
                            >
                                <img
                                    className='tamak_photo'
                                    src={zavtraki} alt=""

                                />
                            </div>
                        }
                        {goryach ?
                            null
                            :
                            <div
                                className='eda_photo'
                            >
                                <img
                                    className='tamak_photo'
                                    src={goryachie} alt=""
                                    onClick={() => {
                                        setGoryach(true)
                                        setHidenFootList(true)
                                    }}
                                />
                            </div>
                        }
                        {salats ?
                            null
                            :
                            <div
                                className='eda_photo'
                            >
                                <img
                                    className='tamak_photo'
                                    src={salaty} alt=""
                                    onClick={() => {
                                        setSalats(true)
                                        setHidenFootList(true)
                                    }}
                                />
                            </div>
                        }
                        {deserts ?
                            null
                            :
                            <div
                                className='eda_photo'
                            >
                                <img
                                    className='tamak_photo'
                                    src={deserty} alt=""
                                    onClick={() => {
                                        setDeserts(true)
                                        setHidenFootList(true)
                                    }}
                                />
                            </div>
                        }
                    </div>
                }
            </div>
            <div>
                {hidenFootList ?
                    zavtraks &&
                    <div>
                        <div className={'foodCards'}>
                            <div
                                className={'CloseIcon'}
                                onClick={() => {
                                    setHidenFootList(false)
                                    setSalats(false)
                                    setDeserts(false)
                                    setGoryach(false)
                                    setZavtraks(false)
                                }}
                            >
                                <CloseIcon/>
                            </div>
                            {zavtrakii.map((item, idx) => {
                                return (
                                    <div className={'foodCard'}>
                                        <img className={'foodListImg'} src={item.img} alt=""/>
                                        <div className={'foodListInfo'}>
                                            <h3 className={'foodName'}>{item.foodName}</h3>
                                            <p className={'sostav'}>{item.sostav}</p>
                                            <p className={'price'}>{item.price}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    :
                    null

                }
            </div>


            <div>
                {hidenFootList ?
                    goryach &&
                    <div>
                        <div className={'foodCards'}>
                            <div
                                className={'CloseIcon'}
                                onClick={() => {
                                    setHidenFootList(false)
                                    setZavtraks(false)
                                    setSalats(false)
                                    setDeserts(false)
                                    setZavtraks(false)
                                }}
                            >
                                <CloseIcon/>
                            </div>
                            {goryachee.map((item, idx) => {
                                return (
                                    <div className={'foodCard'}>
                                        <img className={'foodListImg'} src={item.img} alt=""/>
                                        <div className={'foodListInfo'}>
                                            <h3 className={'foodName'}>{item.foodName}</h3>
                                            <p className={'sostav'}>{item.sostav}</p>
                                            <p className={'price'}>{item.price}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    :
                    null

                }
            </div>

            <div>
                {hidenFootList ?
                    salats &&
                    <div>
                        <div className={'foodCards'}>
                            <div
                                className={'CloseIcon'}
                                onClick={() => {
                                    setHidenFootList(false)
                                    setDeserts(false)
                                    setGoryach(false)
                                    setZavtraks(false)
                                }}
                            >
                                <CloseIcon/>
                            </div>
                            {salat.map((item, idx) => {
                                return (
                                    <div className={'foodCard'}>
                                        <img className={'foodListImg'} src={item.img} alt=""/>
                                        <div className={'foodListInfo'}>
                                            <h3 className={'foodName'}>{item.foodName}</h3>
                                            <p className={'sostav'}>{item.sostav}</p>
                                            <p className={'price'}>{item.price}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    :
                    null

                }
            </div>


            <div>
                {hidenFootList ?
                    deserts &&
                    <div>
                        <div className={'foodCards'}>
                            <div
                                className={'CloseIcon'}
                                onClick={() => {
                                    setHidenFootList(false)
                                    setGoryach(false)
                                    setZavtraks(false)
                                    setSalats(false)
                                }}
                            >
                                <CloseIcon/>
                            </div>
                            {desert.map((item, idx) => {
                                return (
                                    <div className={'foodCard'}>
                                        <img className={'foodListImg'} src={item.img} alt=""/>
                                        <div className={'foodListInfo'}>
                                            <h3 className={'foodName'}>{item.foodName}</h3>
                                            <p className={'sostav'}>{item.sostav}</p>
                                            <p className={'price'}>{item.price}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    :
                    null

                }
            </div>


        </section>
    );
}

export default FoodList;