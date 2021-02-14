import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl'
import bcs from './BuildControls.module.css';

const controls = [
        {label :'Salad', type:'salad'},
        {label :'Cheese', type:'cheese'},
        {label :'Bacon', type:'bacon'},
        {label :'Patty', type:'patty'},
];
 const buildControls = (props)=>
(
    <div className={bcs.BuildControls}>
        <strong><p>Burger Total :{props.price}</p></strong>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label} 
                added={() =>props.ingredientAdded(ctrl.type) }
                removed={() => props.ingredientRemoved(ctrl.type) }
                disabled= {props.disabled[ctrl.type]}/>
            )
            )
        }
        <button className={bcs.OrderButton} disabled={!props.purchaseable} onClick={props.ordered}> Order Now</button>
    </div>

            
);
 export default buildControls;

