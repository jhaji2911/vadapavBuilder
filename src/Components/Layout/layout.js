import React, { Component } from 'react';
import classes from './layout.module.css';
import  Aux from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/sideDrawer/sideDrawer';
class Layout extends Component {
    state={
        showSideDrawer:false
    }
sideDrawerCloser = () =>
{
    this.setState({showSideDrawer:false});
}

SideDraweropener =() =>
{
    this.setState((prevState) =>{
        return { showSideDrawer :!prevState.showSideDrawer};
    } );
}
    render() {
     return (
 <Aux>
        
            <Toolbar toggle={this.SideDraweropener}/> 
            <SideDrawer open={this.state.showSideDrawer}  closed={this.sideDrawerCloser} ></SideDrawer>          
        <main className= {classes.content}>
            {this.props.children}
        </main>
        </Aux>
      ); }
}
export default Layout ;