import React from 'react';
import './Header.css'
import Button from "../../components/button/Button";
import logo from '../../assets/logo.png'

function Header(props) {
    return (
        <header>
            <img src={logo} alt=""/>
            <div>
                <ul>
                    <li>Меню</li>
                    <li>about</li>
                    <li>Меню</li>
                    <Button
                        color = '#FFC73B'
                    />
                </ul>
            </div>
        </header>
    );
}

export default Header;