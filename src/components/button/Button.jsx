import React from 'react';
//
const Button = (color) => {
    console.log(color)
    return (
        <input style={{background: `${color.color}`}} value={'ddd'} type={'button'} />
    );
}

export default Button;