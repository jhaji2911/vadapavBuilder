import React,{Component} from 'react';
//FIXME:fix redux problem 
//import {connect} from 'react-redux';
import Aux  from '../../hoc/Auxillary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from "../../Components/Burger/BuildControls/BulidControls";
import Modal from '../../Components/UI/modal/modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
//import * as actionType from  '../../store/actions';
import Spinner from '../../Components/UI/spinner/spinner';
import withErrorHandler from '../../withErrorHandler/withErrorHandler';
const INGREDIENT_PRICES ={
    salad:20,
    bacon:30,
    cheese:25,
    patty:40
}
class BurgerBuilder extends Component {

    state = {
        ingredients:{
                salad:0,
                bacon:0,
                cheese:0,
                patty:0
        },
            totalprice:50,
            isPurchaseable:false,
            isPurchasing :false,
            loading:false,
            error:false
    }

    componentDidMount()
    { 
          console.log(this.state.ingredients)
         axios.get('/ingredients.json')
         .then(response =>
             {
                 this.setState({ingredients:response.data})
             })
         .catch( error => {
                 this.setState({error:true})
         })
    }
    orderActive (ingredients) {
        
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum,el)=>{
            return sum+el;
        });
        this.setState({isPurchaseable:sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount +1;
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type]=newCount;
        const priceAdittion = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalprice;
        const newPrice = oldPrice + priceAdittion;
        this.setState({
            totalprice:newPrice,
            ingredients:newIngredients
        })
        this.orderActive(newIngredients);

    }

    removeIngredientHandler = (type) =>
    {   
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount -1;
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type]=newCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        if(oldCount <= 0)
        {
            return;
        }
        const oldPrice = this.state.totalprice;
        const newPrice = oldPrice - priceDeduction ;
        this.setState({
            totalprice:newPrice,
            ingredients:newIngredients
        })
    this.orderActive(newIngredients);
    }
    isPurchasingHandler =  () =>
    {
        this.setState({isPurchasing:true})
    }
    isPurchasingCancel =() =>
    {
        this.setState({isPurchasing:false})
    }
    isPurchaseConfirm =() => {
       // alert('You continued!!');
    

    //we create a array where we store the ingredients one by one by using for loop 
    const queryParams = [];
    for(let i in this.state.ingredients)
    {       //encodeURIComponent helps to encode the data which can be used as URL elements in the address bar
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
    }
        queryParams.push('price='  +this.state.totalprice);//we take the state of the total price and push into the stack of price 
    //we join the data we obtained from the state to the queryString which can be further used in search and concatanate with '?'+
    const queryString = queryParams.join('&');
            //this is used to add a stack of page over the page where it shows the previously loaded data
        this.props.history.push({
            pathname:'/checkout',
            search: '?' + queryString
        });
    }
    render() 
    {   
        const disabledInput ={
            ...this.state.ingredients
        };
    for(let key in disabledInput)
    {
        disabledInput[key] = disabledInput[key] <= 0;
    }
    let orderSummary = null;  
    let burger = this.state.error ? <p>OOps!, Your ingredients are not ready :(</p> :<Spinner />
 if(this.state.ingredients)
 {
    burger = (<Aux>
        <Burger ingredients={this.state.ingredients}/>
                    
    
        <BuildControls 
        ingredientAdded={this.addIngredientHandler}
        ingredientRemove={this.removeIngredientHandler}  
        disabled={disabledInput}
        purchaseable={this.state.isPurchaseable}
        ordered={this.isPurchasingHandler}
        price={this.state.totalprice}/>
        </Aux>);  
        orderSummary =  <OrderSummary 
        ingredients={this.state.ingredients}
        purchaseConfirm={this.isPurchaseConfirm}
        purchaseCancelled={this.isPurchasingCancel}
        totalPrice={this.state.totalprice}></OrderSummary>;
 }
 if(this.state.loading) 
 {
     orderSummary = <Spinner />;
 }               
        return (    
            <Aux>

                <Modal show={this.state.isPurchasing} modalClosed={this.isPurchasingCancel} >
                    {orderSummary}    
                </Modal>
                {burger}
                   
            </Aux>

        );

    }
} 
// const mapStateToProps = (state)  =>
// {
//     return {
//         ings:state.ingredients
//     };  
// }
//   const mapDispatchToProps = dispatch =>
//   {     
//       return {
//      onIngredientAdded :(ingName) => dispatch ({type : actionType.ADD_INGREDIENT, ingredientName:ingName}) ,
//      onIngredientRemoved :(ingName) => dispatch ({type : actionType.REMOVE_INGREDIENT, ingredientName:ingName}) 
//   }  }

export default withErrorHandler(BurgerBuilder,axios) // if we have any other hoc then we can wrap it entirely 
