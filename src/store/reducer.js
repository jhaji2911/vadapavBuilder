// import * as actionType from './actions';


// const initialState = {
//     ingredients :{
//         salad:0,
//         cheese:0,
//         bacon:0,
//         patty:0,
//     }, // we keep it null because we mount it from the server
//     totalPrice:4
// }


// const reducer = (state = initialState, action) =>
// { 
//     switch(action.type)
//     {
//         case actionType.ADD_INGREDIENT:
//             return { 
//                 ...state, //copy the whole state
//                 ingredients: {  //create a copy of the state of ingredients and store it in the new ingredients object 
//                     ...state.ingredients, //copy the state of the ingredient
//                 [action.ingredientName]:state.ingredients[action.ingredientName] +1 //we specified a action which is to be dispatched and then we assign it to the respective ingredients by adding one to it
//                 }

//             };
//         case actionType.REMOVE_INGREDIENT:
//             return {
//                 ...state,
//                 ingredients: {
//                     ...state.ingredients,
//                 [action.ingredientName]:state.ingredients[action.ingredientName] -1
//                 }

//             };
//         default :
//         return state;
        
//     }

// }


// export default reducer;