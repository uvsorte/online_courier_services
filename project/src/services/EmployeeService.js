import axios from "axios";
import UpdateEmployeeComponent from './../components/UpdateEmployeeComponent';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
class EmployeeService{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    addEmployee(employees){
        return axios.post(EMPLOYEE_API_BASE_URL, employees);
    }
    getemployeeById(employeeId){
        return axios.post(EMPLOYEE_API_BASE_URL +"/"+ employeeId);

    }
    updateEmployee(employees, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL +"/"+ employeeId,employees);
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL +"/"+ employeeId);
    }

}
export default new EmployeeService() 