import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.jpg'



const Footer = (props) => {
  return (
    
    <footer>
      <div className="footer-container">
        <img className='img' src={logo} alt="" />
        <div className="footer-list">
          <h3>Навигация</h3>
          <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/foodlist">Меню</a></li>
          <li><a href="/about">О нас</a></li>
          </ul>
        </div>
        <div className="footer-list">
          <h3><a href="/foodlist">Меню</a></h3>
          <ul>
            <li><a href="/foodlist">Завтраки</a></li>
            <li><a href="/foodlist">Горячие блюда</a></li>
            <li><a href="/foodlist">Десерты</a></li>
          </ul>
        </div>
        <div className="footer-list">
          <h3>Соц.сети</h3>
          <ul>
            <li><a href='https://twitter.com/?lang=ru'>Twitter</a></li>
            <li><a href='https://www.instagram.com/'>Instagram</a></li>
            <li><a href='https://www.instagram.com/'>Facebook</a></li>
            <li><a href='https://www.tiktok.com/'>Tiktok</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
  

export default Footer