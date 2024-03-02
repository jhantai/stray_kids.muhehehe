import React from 'react'
import './Footer.css'

const Footer = (props) => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-list">
          <h3>Mozza</h3>
          <ul>
            <li>Service</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-list">
          <h3>Cafe</h3>
          <ul>
            <li>Food</li>
            <li>Drink</li>
            <li>Snacks</li>
          </ul>
        </div>
        <div className="footer-list">
          <h3>Follow us</h3>
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Dribbblegit <input type="git" name="" id="" /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
  

export default Footer