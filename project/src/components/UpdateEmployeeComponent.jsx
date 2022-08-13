import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            empId :this.props.match.params.empId,
            role:'',
            branchId:''
        }
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.changeBranchIdHandler = this.changeBranchIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getemployeeById(this.state.empId).then((res) =>{
            let employees = res.data;
            this.setState({role: employees.role,
                branchId:employees.branchId
            });
        })
    }
    updateEmployee = (e) => {
        e.preventDefault();
        let employees = { role: this.state.role, branchId: this.state.branchId};
            console.log('employee =>' +JSON.stringify(employees));
        EmployeeService.updateEmployee(employees,this.state.empId).then(res =>{
            this.props.history.push('/employees');
        })
        }
    changeRoleHandler = (event) =>{
        this.setState({role: event.target.value});
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
                            <h3 className = "text-center"> Update Employee</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Role:</label>
                                        <input placeholder = "Role" name = "role" className ="form-control"
                                        value = {this.state.role} onChange = {this.changeRoleHandler} />
                                    </div>
                                     <div className="form-group">
                                        <label>Branch Id:</label>
                                        <input placeholder = "Branch Id" name = "branchId" className ="form-control"
                                        value = {this.state.branchId} onChange = {this.changeBranchIdHandler} />
                                    </div>
                                    <button className ="btn btn-success" onClick ={this.updateEmployee}>Save</button>
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

export default UpdateEmployeeComponent;