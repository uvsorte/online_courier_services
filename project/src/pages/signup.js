import React, { useState } from 'react'
import { useHistory} from 'react-router';
import axios from 'axios';
import { url } from '../common/constant';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [state,setState] = useState('')
    const [phone, setPhone] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const history = useHistory;

    const signUpUser = () =>{
        if(email.length===0){
            alert('Enter Email')
        }
        if(name.length===0){
            alert('Enter Email')
        }
        if(address.length===0){
            alert('Enter Email')
        }
        if(state.length===0){
            alert('Enter Email')
        }
        if(phone.length===0){
            alert('Enter Email')
        }
        if(pinCode.length===0){
            alert('Enter Email')
        }
        if(password.length===0){
            alert('Enter Password')
        }
        if(role.length===0){
            alert('Enter Role')
        }
        else{
            const data = new FormData()
            //const user = new FormData()
            data.append('name',name)
            data.append('email',email)
            data.append('phone',phone)
            data.append('state',state)
            data.append('address',address)
            data.append('pinCode',pinCode)
           data.append('password',password)
            data.append('role',role)
            
           
            console.log(role)
            console.log(password)

            axios.post(url+'/signup',data).then((response)=>{
                const result = response.data;
                if(result.status === 'success')
                {
                console.log("Success")
                alert('success')
            }
            else
                alert('Error')
            })
            
        }
    }
    return (
        <div>
        <form className="signup-form">
          <h1>SignUp</h1>
          <div className="col-10">
          <div>
            <label htmlFor="">Name</label>
            <input
              onChange={(e) => {
                setName(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div>
            <label htmlFor="">email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div>
            <label htmlFor="">Address</label>
            <input
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">state</label>
            <input
              onChange={(e) => {
                setState(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">pincode</label>
            <input
              onChange={(e) => {
                setPinCode(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Phone</label>
            <input
              onChange={(e) => {
                setPhone(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Role</label>
          <input
            onChange={(e) => {
              setRole(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>

          <div className="mb-3">
            <button onClick={signUpUser} className="btn btn-design">
              Add
            </button> 
          </div>

        </div>
          </form>  
        </div>
    )
}
export default Signup;