import React from 'react';
import './Button.css'
//
const Button = (color, value) => {
    console.log(color)
    return (
        <input
            className={'button'}
            style={{background: `${color.color}`}}
            value={value}
            type={'button'} />
    );
}

export default Button;