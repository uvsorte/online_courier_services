import React, { useState, useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Style/customer.css'
import axios from 'axios'
import { url } from '../common/constant'
import OrderRow from './OrderRow'
import DeliverRow from '../components/DeliverRow'

 const Delivery = () =>{
    const [order, setorder] = useState([])

    const location = useLocation();
    const customer = location.state.customer;
    console.log(customer);

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = () =>{
        axios.get(url + '/delivery/').then((response)=>{
            const result = response.data
            console.log(result.data)
            if(result.status === 'success')
            setorder(result.data)
            else
                alert("Page Cannot be loaded")
        })
    }

    return (
        <div>
        <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/home" className = "navbar-brand">Online Courier Service</a></div>
                    <div><a href="" className = "navbar-brand">Package Remaining</a></div>
                    <div><a href="" className = "navbar-brand">Packages Delivered</a></div>
                    <div><a href="" className = "navbar-brand"></a></div>
                </nav>

             </header>
             <div className="display-customer">
                <h1>Hello</h1> 
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>OrderId</th>
                                <th>Address</th>
                                <th>pinCode</th>
                                <th>OrderStatus</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                    {order.map((row) => {
            return <DeliverRow row={row} />
          })}
                </tbody>
                    </table>           
             </div>
        </div>
    )
}
export default Delivery;