import React from 'react';
import {NavLink} from 'react-router-dom';
import NStyle from './Navigationitem.module.css';
const Navigationitem =(props) =>
( 
    <li className={NStyle.Navigationitem}>
        <NavLink to={props.link} exact={props.exact} activeClassName={NStyle.active } >{props.children}
</NavLink>
        
        </li>
);

export default Navigationitem;
