import React from 'react';
import {Route} from 'react-router-dom';
import { Component } from 'react';
import CheckoutSummary from '../../Components/CheckoutSummary/CheckoutSummary';
import ContactData from './contactData/contactData';
//making this for using the forms to display the data of the orders placed
class Checkout  extends Component
{
   state= {
        ingredients : null,
        price:0
        
    }

//every time it mounts it gets the state when rendered
    UNSAFE_componentWillMount() //WE tried to access the ingredients before setting up the state that's why it will throw error

    {   
        

                   //we search the queryparams for the specific loactions of the state
            const query  = new URLSearchParams(this.props.location.search); //this here helps us to to search the location of the props in the Url IN THE ADDRESS BAR
            const ingredients ={ }; //create a js object
            let price = 0;//we set price is 0
            for(let param of  query.entries()) //for of  the entries of the query which was obatianed and then we pass directly  to the current page ingredients
        {
            
            //if the params recieved from the queryParams check
            if(param[0] === 'price')
            {
                    price =param[1];//store in the price
            }
            else
            {   //['salad' ,'1']
                ingredients[param[0]] = +param[1]; //the params will fill in the ingerdients inside it
            }
           

        }
        this.setState({ingredients:ingredients, totalprice:price}); //we setState to the new ingredient we got by this one
    }
//making a function to go back tto the prevoius page
    CheckoutCancelledHandler =() =>
    {

        this.props.history.goBack();

    }

    //making a function to change the URL onclick of the button when new URL is to be appended
    CheckoutContinuedHandler =() =>
    {
        this.props.history.replace('/checkout/contact-data');
    }
        render()
        {
            return(
                //will be passed  dynamically to get the physical output of the ingredinets of the burger
            <div>
                
                <CheckoutSummary ingredients={this.state.ingredients}
                    CheckoutCancelled={this.CheckoutCancelledHandler}
                    CheckoutContinued={this.CheckoutContinuedHandler}/>
                <Route path={this.props.match.path  + '/contact-data' } render={(props) => ( <ContactData  ingredients={this.state.ingredients}  price={this.state.totalprice} {...props}/>)}/>
             </div>
            );
        }
}


export default Checkout;