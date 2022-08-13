import React, { Component ,useState ,useEffect}  from 'react';
import axios from 'axios';
import { url } from '../common/constant';
import { Redirect, useHistory, useLocation } from 'react-router';
import {Link} from 'react-router-dom';
import '../App.css' 

const UpdateCustomer = () => {
   
        const[email,setEmail] = useState('');
        const[password,setPassword] = useState('');
        const history= useHistory();
        
        useEffect(() => {
            console.log("email:",email,"password:",password)
         }, [email,password])

        const Update = () => {
            if (email.length === 0) {
              alert('please enter email')
            } else if (password.length === 0) {
              alert('please enter password')
            } else {
               axios.put(url+'/customer/updateCustomer/'+email+'/'+password).then((response)=>{
                   const result = response.data
                   if(result.status==='success'){
                        history.push('/customer');
                   }   
                   else{
                   console.log("Wrong Credentials") 
                   alert("Wrong Credentials")
                   }
                 })
            }
          }
        const handleSubmit = (e) => {
           e.preventDefault()
            //console.log(e)
            
            var data = {
                email:email,
                password:password
            }
            //console.log(data)
            // fetch(url+'/login/'+email+'/'+password, {
            //     method: 'GET', // or 'PUT'
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data),
            // })
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log('Success:', data);
            //     })
            //     .catch((error) => {
            //         console.error('Error:', error);
            //     });

            

        }
        
        return (
            <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="" className = "navbar-brand"><img src="favicon.ico" alt="logo" width = "30px" height = "30px" /> Online Courier Service</a></div>
                </nav>
             </header>
            <div className="login-form">
            <div className="display">
            <img src="logo.png"/>
        
            <h1 className="displayText">Update</h1>
            </div>
            <br/><br/>
 
                <form onSubmit={handleSubmit}>
                <div >
                    <label> Email </label>
                    <input 
                        onChange={(event)=>{
                            setEmail(event.target.value)
                        }} 
                    placeholder="enter your email"
                    className="form-control"               
                    type="email"
                    value={email}/>
                </div>
                        <br/>
                <div>
                    <label>Password</label>
                    <input 
                    onChange={(event)=>{
                        setPassword(event.target.value)                        
                    }}
                    placeholder="password"
                    className="form-control"
                    type="password"
                    value={password}/>
                </div>
                
                <div>
                    <button type='submit' onClick={Update} className="btn btn-design">
                        Update
                    </button><br/>
                </div>
                </form>
            </div>            
            </div>
            
          );
    }

 
export default UpdateCustomer;