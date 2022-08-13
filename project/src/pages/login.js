import React, { Component ,useState ,useEffect}  from 'react';
import axios from 'axios';
import { url } from '../common/constant';
import { Redirect, useHistory } from 'react-router';
import {Link} from 'react-router-dom';
import '../App.css' 
import { useDispatch } from 'react-redux'
import value from '../actions/userValue'

const Login = () => {
   
        const[email,setEmail] = useState('');
        const[password,setPassword] = useState('');
        const history= useHistory();
        //const customer = useSelector(state => state.state)
        const dispatch = useDispatch()
        
        //const user = (userId) => {}

        useEffect(() => {
            console.log("email:",email,"password:",password)
         }, [email,password])

        const signinUser = () => {
            if (email.length === 0) {
              alert('please enter email')
            } else if (password.length === 0) {
              alert('please enter password')
            } else {
               axios.get(url+'/login/'+email+'/'+password).then((response)=>{
                   const result = response.data
                   if(result.status==='success'){
                       const customer=result.data
                       dispatch(value(customer.userId))
                       
                        if(result.data.role==='admin'){
                        console.log(customer)
                        history.push('/employees',{ customer : customer });
                        }
                        if(result.data.role==='customer')
                        {
                        console.log(customer)
                        history.push('/customer',{ customer : customer });
                        }
                        if(result.data.role==='delivery')
                        {
                        console.log(customer)
                        history.push('/delivery',{ customer : customer });
                        }
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
        
            <h1 className="displayText">SignIn</h1>
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
                    <button type='submit' onClick={signinUser} className="btn btn-design">
                        SignIn
                    </button><br/>
                    <label>Not Registerd Yet &nbsp;</label>
                    <Link to="/signup">
                    <a >
                        SignUp
                    </a>
                    </Link>
                </div>
                </form>
            </div>            
            </div>
            
          );
    }

 
export default Login;