import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class AddEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'',
            email :'',
         //  password: '',
            role:'',
            address:'',
            phone:'',
            branchId:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeBranchIdHandler = this.changeBranchIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employees = {name: this.state.name,email: this.state.email, role: this.state.role,password: this.state.password,
                         address: this.state.address,   phone:this.state.phone, branchId: this.state.branchId};
            console.log('employee =>' +JSON.stringify(employees));
    
            EmployeeService.addEmployee(employees).then(res =>{
                this.props.history.push('/employees');
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
    changeRoleHandler = (event) =>{
        this.setState({role: event.target.value});
    }
    changePhoneHandler = (event) =>{
        this.setState({phone: event.target.value});
    }
    changeAddressHandler = (event) =>{
        this.setState({address: event.target.value});
    }
    changeBranchIdHandler = (event) =>{
        this.setState({branchId: event.target.value});
    }
    cancel(){
        this.props.history.push('/employees');
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className ="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center"> Add Employee</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input placeholder = "Name" name = "name" className ="form-control"
                                        value = {this.state.name} onChange = {this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id:</label>
                                        <input placeholder = "Email Id" name = "email" className ="form-control"
                                        value = {this.state.email} onChange = {this.changeEmailIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password :</label>
                                        <input placeholder = "Password" name = "password" className ="form-control"
                                        value = {this.state.password} onChange = {this.changePasswordHandler} />
                                    </div> 
                                    <div className="form-group">
                                        <label>Role:</label>
                                        <input placeholder = "Role" name = "role" className ="form-control"
                                        value = {this.state.role} onChange = {this.changeRoleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Address:</label>
                                        <input placeholder = "Address" name = "address" className ="form-control"
                                        value = {this.state.address} onChange = {this.changeAddressHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Contact No:</label>
                                        <input placeholder = "Contact No" name = "phone" className ="form-control"
                                        value = {this.state.phone} onChange = {this.changePhoneHandler} />
                                    </div>
                                     <div className="form-group">
                                        <label>Branch Id:</label>
                                        <input placeholder = "Branch Id" name = "branchId" className ="form-control"
                                        value = {this.state.branchId} onChange = {this.changeBranchIdHandler} />
                                    </div>
                                    <button className ="btn btn-success" onClick ={this.saveEmployee}>Save</button>
                                    <button className ="btn btn-danger" onClick ={this.cancel.bind(this)} style ={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddEmployeeComponent