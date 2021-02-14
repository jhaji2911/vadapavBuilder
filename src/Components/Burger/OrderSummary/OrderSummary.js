import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component
{  

  componentDidUpdate() 
  {
      console.log('[order]');
  }

   render()
   {
    const IngredientSummary = Object.keys(this.props.ingredients).map(igKey =>{
        return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}:</span> {this.props.ingredients[igKey]}</li>
        });
    
   return (
   <Aux>
       <h3>Your Order Summary</h3>
       <p>A delicious Burger with the following ingredients:</p>
       <ul>
            {IngredientSummary}
       </ul>
   <p><strong>Your Sum Total is  : Rs {this.props.totalPrice}</strong></p>
       <p>Proceed to checkout?</p>
       <Button btnType={'Danger'} clicked={this.props.purchaseCancelled}>CANCEL</Button>
       <Button btnType={'Success'} clicked={this.props.purchaseConfirm}>CONFIRM</Button>
    </Aux>
   );
}

}



export default OrderSummary;