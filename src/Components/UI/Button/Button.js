import React from 'react';
import btstyle from './Button.module.css';
const Button = (props) =>
{
  

        return(
    <button className={[btstyle.Button, btstyle[props.btnType]].join(' ') }
    onClick={props.clicked} disabled={props.disabled}>
            {props.children}
    </button>);
};

export default Button;