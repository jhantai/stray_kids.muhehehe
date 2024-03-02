import React from 'react';
import './Button.css'
//
const Button = ({color, value}) => {
    return (
        <input
            className={'button'}
            style={{background: `${color}`}}
            value={value}
            type={'button'} />
    );
}

export default Button;