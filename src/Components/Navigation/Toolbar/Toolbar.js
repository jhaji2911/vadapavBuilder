import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import SideDrawer from '../sideDrawer/sideDrawer';
import tstyle from './Toolbar.module.css';
import ToggleButtonn from '../ToogleButton/ToggleButton';
const Toolbar = (props) =>
( <header className={tstyle.Toolbar}>
    <ToggleButtonn clicked={props.toggle}/>
    <SideDrawer/>
    <Logo />
    <nav className={tstyle.Desktoponly}>
        <Navigationitems/>
    </nav>
</header>
);

export default Toolbar;