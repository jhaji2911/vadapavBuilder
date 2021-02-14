import React from 'react';
import ostyle from './order.module.css';
const Order = (props) =>
{
    const ingredients = []; //creatr a empty array for storing 
    for(let ingredientName in props.ingredients) //traverse through the ingredients 
    {
            ingredients.push({
                name:ingredientName,
                quantity:props.ingredients[ingredientName]
            }); //push the name and the quantity  of the ingredient into the empty array
    }
    const displayIngredient = ingredients.map(ig => {
    return <span style={{
        textTransform:'capitalize',
        display:'inline-block',
        margin:'0 8px',
        border: '1px solid #ccc',
        padding:'5px' 
    }} key={ig.name}> {ig.name} [{ig.quantity}]</span>; //set a key which is unique i.e ID 
    });
return(
    <div className={ostyle.order}>
        <p>Ingredients : {displayIngredient}</p>
<p> Price : <strong>₹ {props.price}</strong></p>
    </div>
);
}
export default Order;