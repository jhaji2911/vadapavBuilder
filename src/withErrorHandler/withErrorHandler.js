import React, { Component } from 'react';
import Modal from '../Components/UI/modal/modal';
import Aux from '../hoc/Auxillary';


/* this is a functional component which returns class based component and has interceptors to display or manipulate request and response at the time of get or post req */
const WithErrorHandler = (WrappedComponent , axios) =>
{
    return class extends Component 
    { 
        state = {
            error:null
        }
        
        UNSAFE_componentWillMount()
        {
                   
            this.reqinterceptor = axios.interceptors.request.use(req =>
                {   
                    this.setState({error:null})
                    return req;
                })
           this.resinterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error:error});
               
            });
        }
             componentWillUnmount()
        {   
            
            console.log(this.reqinterceptor,this.resinterceptor);
            axios.interceptors.request.eject(this.reqinterceptor);
            axios.interceptors.response.eject(this.resinterceptor);
        }
        errorCancelled = () =>
        {
            this.setState({error:null})
        }
        render()
        {
            return ( 
                <Aux>
                    <Modal show={this.state.error}
                    modalClosed={this.errorCancelled} >
                        {this.state.error ? this.state.error.message :null}
                    </Modal>
                <WrappedComponent {...this.props} />
                </Aux>
            );
    }
    }
    
}


export default WithErrorHandler;