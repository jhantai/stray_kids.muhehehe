import React from 'react';
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WifiIcon from "@mui/icons-material/Wifi";
import cotik from "../../assets/catstanding.png";
import './FoodListInfo.css'

function FoodListInfo() {
    return (
        <section className={'foodListSection'}>
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
                        <p>Wifi_Passsword123</p></div>

                    <ul className='info_about_us'>
                        <li>Обслуживание:7%</li>
                        <li>Работаем:С 9:00 до 21:00</li>
                        <li>0550 123 567</li>
                    </ul>
                </div>
                <img className='cotik_photo' src={cotik} alt=""/>
            </div>
        </section>
    );
}

export default FoodListInfo;