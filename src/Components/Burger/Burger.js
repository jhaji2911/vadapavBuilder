import React from 'react';
import styleBurger from './burger.module.css';
import BurgerIngredient from './BurgerIngredients';
//import BurgerBuilder from './../../containers/BurgerBuilder/BurgerBuilder';
const burger = (props) =>
{
    let changedIngredients =  Object.keys(props.ingredients).map( igKey => {
        return [...Array(props.ingredients[igKey] )].map( (_,i) =>
        {
           return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
     }).reduce((arr, el) =>
    {
        return arr.concat(el);
    },[]);
    if(changedIngredients.length === 0)
    {
        changedIngredients=<p> Make a delicious Burger!</p>;
    }
    console.log(changedIngredients);
    return( <div className={styleBurger.Burger}> 
        <BurgerIngredient type="bread-top"/>
       {changedIngredients}
        <BurgerIngredient type="bread-bottom"/>
        </div> );
};

export default burger;