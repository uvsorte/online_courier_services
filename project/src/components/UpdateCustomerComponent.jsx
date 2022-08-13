// import React, { Component } from 'react';
// import CustomerService from '../services/CustomerService';

// class UpdateCustomerComponent extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             custId :this.props.match.params.custId,
//             email:'',
//             password:''
//         }
//         this.changeEmailHandler = this.changeEmailHandler.bind(this);
//         this.changePasswordHandler = this.changePasswordIdHandler.bind(this);
//         this.updateCustomer = this.updateCustomer.bind(this);
//     }
//     componentDidMount(){
//         CustomerService.getcustomerById(this.state.custId).then((res) =>{
//             let customers = res.data;
//             this.setState({email: customers.email,
//                 password:employees.password
//             });
//         })
//     }
//     updateCustomer = (e) => {
//         e.preventDefault();
//         let customers = { email: this.state.email, password: this.state.password};
//             console.log('customer =>' +JSON.stringify(customers));
//         CustomerService.updateCustomer(customers,this.state.custId).then(res =>{
//             this.props.history.push('/customers');
//         })
//         }
//     changeEmailHandler = (event) =>{
//         this.setState({role: event.target.value});
//     }
//     changePasswordHandler = (event) =>{
//         this.setState({branchId: event.target.value});
//     }
//     cancel(){
//         this.props.history.push('/customers');
//     }
//     render() {
//         return (
//             <div class="signup-form">
//                 <div class="register">
//                     <form action="updatecustomerdb" method="post">
//                         <p>Email</p>
//                         <input type="email" name="email" value = {this.state.email} onChange = {this.changeEmailHandler} /><br/>
//                         <p>Password</p>
//                         <input type="password" name="password" value = {this.state.password} onChange = {this.changePasswordHandler} /><br/>
//                         <button type="submit">Update</button>
//                     </form>    
//                 </div> 
//             </div>
//         );
//     }
// }

// export default UpdateCustomerComponent;