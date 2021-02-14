import React from 'react';
import Order from './order';
import axios from '../../axios-orders';
import withErrorHandler from '../../withErrorHandler/withErrorHandler';
class Orders extends React.Component {
    state = 
    {
        orders : [],
        loading:true
    } // set a state where the data is to be stored from the firebase

    componentDidMount() //we fetch the data from the firebase and convert the object into array 
    {
        axios.get('/orders.json')
        .then( res => {
             
               const fetchedOrders =[]; //make an empty array to store the orders 
              for (let key in res.data) //loop through the firebase res.data 
              {
                fetchedOrders.push({
                    ...res.data[key],
                    id:key
                }); //spread the data fetched and store a seperate key value  created by firebase
              }
              this.setState({loading:false, orders:fetchedOrders});
              
        })
        .catch(err => {
            this.setState({loading:false});
        } )
    }
    render()
    {
        return(

            <div>
                {this.state.orders.map(order =>
                    (
                        <Order key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        );
    }
}
export default withErrorHandler(Orders,axios);