import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import HeaderComponent from './CustomerComponent'

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees:[]
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(empId){
        EmployeeService.deleteEmployee(empId).then(res => {
            this.setState({employees:this.state.employees.filter(employees => employees.empId !== empId)})
        })

    }

    editEmployee(empId){
        this.props.history.push(`/update-employee/${empId}`);

    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees: res.data})
        });
    }
    addEmployee(){
        this.props.history.push('/add-employee');
    }
    render() {
        return (
            <div className = "text-centre">
            <header>
        <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
            <div><a href="" className = "navbar-brand">Online Courier Service</a></div>
            <div><a href="/NewPackages" className = "navbar-brand">New Packages</a></div>
        </nav>
        
        
  
    </header>
                <h2 className="text-centre" >Employees List</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div><br/>
                <div className = "row">
                    <table className = "table table-striped table-bordered" >
                        <thead>
                            <tr>
                                <th>EmpId</th>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Role</th>
                                <th>Address</th>
                                <th>Contact No.</th>
                                <th>Branch Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employees =>
                                    <tr key = {employees.empId}>
                                        <td>{employees.empId}</td>
                                        <td>{employees.name}</td>
                                        <td>{employees.email}</td>
                                        <td>{employees.role}</td>
                                        <td>{employees.address}</td>
                                        <td>{employees.phone}</td>
                                        <td>{employees.branchId}</td>
                                        <td>
                                            <button onClick = {()=>this.editEmployee(employees.empId)} className ="btn btn-info">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick = {()=>this.deleteEmployee(employees.empId)} className ="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent