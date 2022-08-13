import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class SignupCustomerComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'',
            email :'',
            password: '',
            state: '',
            pincode:'',
            address:'',
            phone:'',
            //custId:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changePincodeHandler = this.changePincodeHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
      //  this.changeCustIdHandler = this.changeCustIdHandler.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
    }

    saveCustomer = (c) => {
        c.preventDefault();
        let customers = {name: this.state.name,email: this.state.email, password: this.state.password, state: this.state.state,
                      pincode: this.state.pincode, address: this.state.address,   phone:this.state.phone,};
            console.log('customer =>' +JSON.stringify(customers));
    
            CustomerService.addCustomer(customers).then(res =>{
                this.props.history.push('/customers');
            })
        }
    changeNameHandler = (event) =>{
        this.setState({name: event.target.value});
    }
    changeEmailIdHandler = (event) =>{
        this.setState({email: event.target.value});
    }
    changePasswordHandler = (event) =>{
        this.setState({password: event.target.value});
    }
    changeStateHandler = (event) =>{
        this.setState({role: event.target.value});
    }
    changePincodeHandler = (event) =>{
        this.setState({phone: event.target.value});
    }
    changeAddressHandler = (event) =>{
        this.setState({address: event.target.value});
    }
    changePhoneHandler = (event) =>{
        this.setState({phone: event.target.value});
    }
    // changeCustIdHandler = (event) =>{
    //     this.setState({branchId: event.target.value});
    // }
    cancel(){
        this.props.history.push('/customers');
    }
    render() {
        return (
            <div class="signup-form">
               <div class="register">
                    <form action="addcustomer" method="post">
                        <p>Name</p>
                        <input type="text" name="user" value = {this.state.name} onChange = {this.changeNameHandler} /><br/>
                        <p>Email</p>
                        <input type="email" name="email" value = {this.state.email} onChange = {this.changeEmailIdHandler}/><br/>
                        <p>Password</p>
                        <input type="password" name="password" value = {this.state.password} onChange = {this.changePasswordHandler} /><br/>
                        <p>Contact number</p>
                        <input type="tel" name="phone" maxlength="10" value = {this.state.password} onChange = {this.changePhoneHandler}/><br/>
                        <p>Address</p>
                        <input type="text" name="address" value = {this.state.address} onChange = {this.changeAddressHandler} /><br/>
                        <p>State</p>
                        <input type="text" name="state" value = {this.state.state} onChange = {this.changeStateHandler} /><br/>
                        <p>PinCode</p>
                        <input type="text" name="pincode" maxlength="6" value = {this.state.pincode} onChange = {this.changePincodeHandler} />
                        <br/><br/>
                        <button type="submit">Signup</button>
                        <button className ="btn btn-success" onClick ={this.saveCustomer}>Save</button>
                    </form>    
                </div> 
            </div>
        );
    }
}
export default SignupCustomerComponent