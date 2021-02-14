import React from 'react';
import iStyle from './input.module.css';


const Input = (props) =>
{
                let inputElement = null;
                const inputClasses = [iStyle.InputElement ]; //here  we create a const and store the css style for the inputElements

        if (props.invalid && props.shouldValidate && props.touched) //check whether it is invalid or not bt  the props recieved from the Input in contact
        {
            inputClasses.push(iStyle.Invalid); // here we push the invalid style element to the corresponding input elements 
        }
                switch(props.elementType)
                {   
                        case ('input') : // in that we join it with the conditional styling
                            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig}   value={props.value}onChange={props.clicked}  />;
                            break;
                        case ('textarea'): 
                            inputElement = <textarea  className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.clicked}/>
                            break;
                            case ('select'): 
                            inputElement = 
                            <select  className={inputClasses.join(' ')}  value={props.value}onChange={props.clicked}>
                            {props.elementConfig.options.map(option => 
                            (<option key={option.value} value={option.value}  >{option.displayValue }</option>))}
                            </select>
                            break;
                        default:
                            inputElement= <input   className={iStyle.InputElement} {...props.elementConfig} value={props.value} onChange={props.clicked} />


                }
return(
        <div className={iStyle.Input}>  
            <label className={iStyle.Label}> {props.label}</label>
            {inputElement}
        </div>
);

};


export default  Input;