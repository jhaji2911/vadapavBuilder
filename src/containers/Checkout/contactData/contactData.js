import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import contactStyle from './contactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/spinner/spinner';
import withErroHandler from '../../../withErrorHandler/withErrorHandler';
import Input from '../../../Components/UI/input/input';

//here we take the data which the user enters in the specified form
class ContactData extends Component
{       /* in this orderForm jsObject we seperately define all the inputs in elementType and  elementConfig and the value plays important role in accessing them 
    this is certainly passed as a props to the  input componnent to make it aware that we defined our custom input elements */
    state={
        orderForm: {
            name:
            {
                elementType: 'input',
                elementConfig :
                {
                    type:'text',
                    placeholder:'Name here',
                },
                value: '',
                validation :{
                required:true
                },
                valid:false,
                touched:false
            },
            street:{
                elementType: 'input',
                elementConfig :
                {
                    type:'text',
                    placeholder:'Street Name ',
                },
                value: '',
                validation :{
                    required:true
                    },
                    valid:false,
                    touched:false

            },
            zipCode: {
                elementType: 'input',
                elementConfig :
                {
                    type:'text',
                    placeholder:'Zipcode ',
                },
                value: '',
                validation: {
                    required:true,
                    minLength:5,
                    maxLength:6 
                    },
                    valid:false,
                    touched:false
                    

            },
            country:{
                elementType: 'input',
                elementConfig :
                {
                    type:'text',
                    placeholder:'Country ',
                },
                value: '',
                validation: {
                    required:true
                    },
                    valid:false,
                    touched:false
            },

            email:{
                elementType: 'input',
                elementConfig :
                {
                    type:'email',
                    placeholder:'Your E-mail ',
                },
                value: '',
                validation: {
                    required:true
                    },
                    valid:false,
                    touched:false

            },
            paymentMode:{
                elementType: 'select',
                elementConfig :
                {
                    options :[ { value:'upi',displayValue:'UPI Payment'},
                                {value:'Debitcard',displayValue:'Debit Card'},
                                {value:'Onlinebanking',displayValue:'Online Banking'}]
                },
                value: '',
                validation: {
                    },
                valid:true
            },
        },
        formIsValid:false,
        loading:false
    }
orderHandler = (event) =>
{   //by calling this we are preventing the default behaviour
    event.preventDefault();
    //in the checkout container we need to access it from there
    console.log(this.props.ingredients);
       this.setState(
           {loading:true}
       )
       //we create a empty object and then feed with it the orderForm.value
       const formData ={};
       for(let formInputdata in this.state.orderForm)
       {
           formData[formInputdata] =  this.state.orderForm[formInputdata].value; 
       }
       //we are statically passing the parameters here
       const order ={
           //we got the ingredients via checkout where we rendered it by passing the component name and added the ingredient property
            ingredients :this.props.ingredients,
            price :this.props.price,//we just got the price from the checkout component
            orderData : formData //we pass the data here and this sent to firebase
        }
       //orders.json is the default for the purpose of connectiong to firebase
        axios.post('/orders.json',order)
            .then(response => {
                this.setState({loading:false});
                this.props.history.push('/'); // from the history property it helps us to push it back to the main page once it is done
                
            })
            .catch(error => {
                this.setState({loading:false});
            });
        
}


    checkValidityHandler = (value,rules) => 
    {   let isValid =true;                                                                          //these all check for the rules i.e  true or false values
        if(rules.required) 
        {
            isValid = value.trim() !== '' && isValid ;

        }
        if(rules.minLength)
        {
            isValid = value.length >= rules.minLength && isValid  
        }
        if(rules.maxLength)
        {
            isValid = value.length <= rules.maxLength && isValid 
        }
        return isValid;


    }
        inputChangeHandler = (event,inputIdentifier) => //here event is the touching object helps us in getting to the value and the inputIdentifier is the sub-value traversal 
        {
            const updatedOrderInput = { ...this.state.orderForm}; //as we know we have to mutate the state in the immutable way we create a copy of all of its properties
            const updatedSingleElement ={...updatedOrderInput[inputIdentifier]};// and then the sub inputIdentifier gets the value of the single elements  like elemenConfig
            updatedSingleElement.value = event.target.value; //we now access that value of the object which is unique and set that particular one to the event.target.value
            updatedSingleElement.valid = this.checkValidityHandler(updatedSingleElement.value , updatedSingleElement.validation);
            updatedSingleElement.touched=true;
            updatedOrderInput[inputIdentifier] = updatedSingleElement; //and then that singleChanged element is given back to the main copied variable 
           let formIsValid = true;
           for(let inputIdentifier in updatedOrderInput)
           {
               formIsValid= updatedOrderInput[inputIdentifier].valid &&  formIsValid;
           }
            this.setState({orderForm:updatedOrderInput,formIsValid:formIsValid});  //and here we setState of the orderForm
            

        }
    render()
    {   
        const formElementArrays = [];
        for (let key in this.state.orderForm)
        {
            formElementArrays.push({
                id:key,
                config:this.state.orderForm[key]
            });
        }
        let  form = (
            
            <div className={contactStyle.ContactData}><h4>Enter your contact details</h4>
                                    <form onSubmit={this.orderHandler}>
                                        
                                        {formElementArrays.map(formElement =>
                                            (
                                                <Input key={formElement.id} elementType={formElement.config.elementType} 
                                                        elementConfig={formElement.config.elementConfig}
                                                        value={formElement.config.value}
                                                        shouldValidate={formElement.config.validation}
                                                        invalid={!formElement.config.valid}// props passed to the input !
                                                        touched={formElement.config.touched}
                                                        clicked={(event) => this.inputChangeHandler(event,formElement.id)}/>
                                        ))}
                                        <Button btnType="Success" disabled={!this.state.formIsValid} clicked={this.orderHandler}>ORDER</Button>
                                    </form>
                            </div>
                        );
        if(this.state.loading)
        {
        form = <Spinner/>;
        }
    
    return (
        <div>
            {form}  
            </div>    
    );
    }
}

export default withErroHandler(ContactData,axios);