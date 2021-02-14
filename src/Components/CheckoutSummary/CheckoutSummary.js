import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import Checkstyle from './CheckoutSummary.module.css';
//we display the user's order here using the Burger component
const checkoutSummary = (props )=>
{
            return(
                /* the ingredients is accquired from the burger where it us passed as a prop and the
                button component is imported to use the buttons for final proceeding and different routes 
                will be used throughout the section 
                */
                <div className={Checkstyle.CheckoutSummary}>
                            <h1> We hope you like it!!</h1>
                            <div style={{width:'100%',height:'auto',margin:'auto'}}>
                                <Burger ingredients={props.ingredients }/>
                            </div>

                            <Button btnType="Danger" clicked={props.CheckoutCancelled}>CANCEL</Button>
                            <Button btnType="Success" clicked={props.CheckoutContinued}>CONTINUE</Button>
                </div>
            );
}

export  default checkoutSummary;