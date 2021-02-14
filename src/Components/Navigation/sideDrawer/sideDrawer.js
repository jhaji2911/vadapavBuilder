import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import SideStyle from './SideDrawer.module.css';
import Backdrop from '../../UI/backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary';
const SideDrawer = (props) =>
{
let attachedClasses = [SideStyle.SideDrawer ,SideStyle.Close];
    if(props.open) {
        attachedClasses =[SideStyle.SideDrawer ,SideStyle.open];
    }

    return( 
        <Aux>
        <Backdrop show={props.open}  clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <Logo height="11%"  />
            <nav>
                <Navigationitems />
            </nav>
        </div>
        </Aux>
    );
};

export  default SideDrawer;