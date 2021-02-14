import React, { Component } from 'react';
import mStyle from './modal.module.css';
import Aux from '../../../hoc/Auxillary';
import Backdrop from "../backdrop/Backdrop";
class Modal extends Component
{   

shouldComponentUpdate (nextProps, nextState)
{
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
}

componentDidUpdate
()
{

}
    render()
    {
        return(
    <Aux>
        <Backdrop show ={this.props.show} clicked={this.props.modalClosed}/>
    <div className={mStyle.Modal} 
    style={{transform :this.props.show ?'translateY(0)' : 'translateY(-100vh)',
    opacity : this.props.show ? '1' : '0'}}>
        {this.props.children}
    </div>
    </Aux>
           );   }
};

export default Modal;