import React from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WifiIcon from '@mui/icons-material/Wifi';
import cotik from '../../assets/catstanding.png'
import {blyda} from '../../constants/vidy_blyd'
import './MenuPage.css'

const MenuPage = () => {
    return (
     <section style={{overflow: "hidden"}}>
         <div className="background">
             <div className="text_forback">
                 <p>Наше Меню</p>
             </div>

             <div className="form_about_menu">
                 <div className="block_with_photo">
                 <div className="text_info">
                     <p className='zoocafe_name'>Zoo Cafe</p>
                     <div className="info_dundun">
                         <div className="icon_geo"><FmdGoodIcon></FmdGoodIcon></div>
                         <p>Бульвар Эркиндикб 58а б Бишкек</p></div>

                     <div className="info_dundun">
                         <div className="icon_wifi"><WifiIcon></WifiIcon></div>
                         <p>Wifi_Passsword123</p></div>

                     <ul className='info_about_us'>
                         <li>Обслуживание:7%</li>
                         <li>Работаем:С 9:00 до 21:00</li>
                         <li>0550 123 567</li>
                     </ul>
                     <input type="button" className='button_glav_menu' value='Основное меню'/>

                 </div>
                 <img className='cotik_photo' src={cotik} alt=""/>
                 </div>

                 {blyda.map((item,idx) => {
                     return(
                         <div
                             className='eda_photo'
                             key={idx}>
                             <img src={item.src} alt=""/>

                         </div>
                     )
                 })}
             </div>


         </div>

     </section>
    );
};

export default MenuPage;