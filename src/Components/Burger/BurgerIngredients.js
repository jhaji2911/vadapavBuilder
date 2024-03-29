import React, { Component } from 'react';
import PropTypes from 'prop-types';
import burgerStyle from './BurgerIngredients.module.css';
class BurgerIngredient extends Component
{   
    render() 
    {
    let ingredient = null;
    switch (this.props.type) {
        case ('bread-bottom'):
            ingredient =<div className={burgerStyle.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (<div className={burgerStyle.BreadTop}>
                        <div className={burgerStyle.Seeds1}></div>
                        <div className={burgerStyle.Seeds2}></div>
            </div>
            );
            break;
        case ('patty'):
            ingredient = <div className={burgerStyle.Patty}></div>;
            break;
        case ('cheese') :
            ingredient = <div className={burgerStyle.Cheese}></div>;
            break;
        case ('salad'):
            ingredient =<div className={burgerStyle.Salad}></div>;
            break;
        case ('bacon'):
            ingredient=<div className={burgerStyle.Bacon}></div>
            break;
        default:
            ingredient=null;
            }
        return ingredient;
    }
   
}

BurgerIngredient.propTypes = {
    type : PropTypes.string.isRequired
};
  

export default BurgerIngredient; 