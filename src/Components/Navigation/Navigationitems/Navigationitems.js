import React from 'react';
import Navigationitem from './Navigationitem/Navigationitem';
import Nstyles from './Navigationitems.module.css';
const Navigationitems = () => (
    <ul className={Nstyles.Navigationitems} >
            <Navigationitem link="/" exact>Burger Builder</Navigationitem>
            <Navigationitem link="/orders" >Orders</Navigationitem>
    </ul>
);
export default Navigationitems;