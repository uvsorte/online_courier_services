import React, { useState, useEffect } from 'react'
import {Link, useLocation, useHistory} from 'react-router-dom'
import './Style/customer.css'
import axios from 'axios'
import { url } from '../common/constant'

 const Customer = () =>{
   const [customer, setCustomer] = useState()
    const location = useLocation();
    const history = useHistory();
    //setCustomer(location.state.customer) ;
    console.log(customer);  
   
   const AddPackage= () =>{
         history.push("/AddOrders",{customer : customer})
    }
    const ViewOrders= () =>{
         history.push("/ViewOrders",{customer : customer})
    }
    return (
        <div>
        <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/home" className = "navbar-brand">Online Courier Service</a></div>
                    <div> <a className = "navbar-brand"><button onClick={AddPackage}>Add Package</button> </a></div>
                    <div> <a className = "navbar-brand"><button onClick={ViewOrders}>ViewOrders</button> </a></div>
                    <div><a href="/TrackOrders" className = "navbar-brand">TrackOrder</a></div>
                </nav>

             </header>
             <div className="display-customer">
                <h1>Hello </h1>            
             </div>
             <div className="display-customer-btn">
               <Link to="/updateCustomer">
                  <input type="button" value="update customer"/>
               </Link>
               <Link to="/" className="logoutbtn"> 
                  <input type="button" value="Logout"/>
               </Link>
            </div>
             
             
        </div>
    )
}
export default Customer;