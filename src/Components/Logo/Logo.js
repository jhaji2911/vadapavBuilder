import React from 'react';
import logoStyle from './Logo.module.css';
import Aux from '../../hoc/Auxillary'
import  burgerlogo from '../../../src/assets/Images/burger-logo.png.png';
const Logo =(props) =>
(   <Aux>
    <div className={logoStyle.Logo}   style={{height:props.height}}>
            <img src={burgerlogo} alt="myBurger"></img>
    </div>
    </Aux>
);
export default Logo;