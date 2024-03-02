import React from 'react';
import './Button.css'
//
const Button = (color, value) => {
    console.log(value)
    return (
        <input
            className={'button'}
            style={{background: `${color.color}`}}
            value={value.value}
            type={'button'} />
    );
}

export default Button;