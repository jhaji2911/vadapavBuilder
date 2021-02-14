import React, { Component } from 'react';
import Layout from './Components/Layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/orders/Orders';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
class App extends Component
{
// state ={
//   show:true
// }

// componentDidMount(){
//   setTimeout(()=>
//   {
//     this.setState({show:false})
//   },5000);
// }
/* here we wrapped the main component with the BrowserRouter Component from the 
React-Router-Dom
and used the Switch to load one at a time and used exact to prefixed with '/'
*/ 
//TODO:make this whole app transformed into vada pav builder

render() {
 
  return (
    <div >
    
      <BrowserRouter>
      <Layout>
        <Switch>
        <Route path="/orders" exact component={Orders} />
        <Route path="/checkout" component={Checkout}/>
      <Route path="/" exact component={BurgerBuilder}/>
      
        </Switch>
     </Layout>
      </BrowserRouter>
     
  </div>
  );
  }
}

export default App;
