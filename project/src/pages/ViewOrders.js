import React, { useState, useEffect } from "react";
import axios from 'axios';
import { url } from '../common/constant';
import { Redirect, useHistory, useLocation } from 'react-router';
import {Link} from 'react-router-dom';
import '../App.css' 
import './Style/tale.css'
import { useSelector } from 'react-redux'
//import { useHistory } from 'react-router-dom';

const ViewOrders = () => {
    const history = useHistory()
    const [orderList, setOrderList] = useState([])
    const [render,setRender] = useState(true)
    const userId = useSelector(state => state.userId)
    const getAllOrders = () => 
    {
        axios.get(url + "/customer/order/" + userId).then((response) => 
        {
            setOrderList(response.data)
            console.log(response.data)
        }
        )
    };

    useEffect(() => {
        getAllOrders();
    }, [render]);



    const [vieworders, setViewOrders] = useState([]);
    const deleteOrder = (orderId) => 
    {
        axios.delete(url + '/customer/order/' + orderId).then(Response => 
        {
            const Result = Response.status;
            if (Result === 200)
            {
//              history.push("/ViewOrders")
                render === true ? setRender(false) : setRender(true)
            }
            else
            {
                alert('delete call failed')
            }
        })
    }

    return (
        <div>
            <h1>Your Orders </h1>
            <table border="1" cellPadding="0" cellSpacing="1" className="customers">
                <thead>
                    <tr>
                        
                        <th>Customer ID</th>
                        <th>Order status</th>
                        <th>paymentStatus</th>
                        <th>amount</th>
                        <th>Weight</th>
                        <th>Order Type</th>
                        <th>Payment Mode</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    orderList.map(data => 
                        {
                        return (
                            <tr key={data.orderID}>
                                
                                <td>{data.custId}</td>
                                <td>{data.orderStatus}</td>
                                <td>{data.paymentStatus}</td>
                                <td>{data.amount}</td>
                                <td>{data.weight}</td>
                                <td>{data.orderType}</td>
                                <td>{data.paymentMode}</td>
                                <td>
                                    {/* <button onClick={() => { console.log("This method is for deleting the order with order ID" + data.orderID) }} style={{ marginLeft: "10px" }} className="btn btn-danger">Cancel Order</button> */}
                                    <button onClick={() => deleteOrder(data.orderId)} style={{ marginLeft: "10px" }} className="btn btn-danger">Cancel Order</button>
                                </td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>
                    {userId}
            <div className="mb-3">
                <a href="/customer">
                    <input type="button" value="Back" />
                </a>
                {/* <button onClick={() => history.{goBack}()} className="btn btn-design">
               back
             </button>  */}
            </div>

        </div>



    );
}





export default ViewOrders;