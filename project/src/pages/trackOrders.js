import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect, useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.css'
import { url } from '../common/constant';


const Trackorders = () => 
{
    const [trackid,setTrackId] = useState('')
    const [trackDetails,setTrackDetails] = useState(null)
    const history = useHistory()
    
     
    const getTrackingDetails = () =>
    {
        
        axios.get(url + '/customer/trackorder/'+trackid).then(response => 
        {
            const result = response.data
            if(result.status === 'success')
            {
               // console.log(result.data)
                setTrackDetails(result.data)
                console.log(result.data)
               // console.log(trackDetails.data)
                history.push("/trackOrders")
            }
            else if(response.status === 500)
            {
                alert('tracking details not available')
            }
            else
            {
                alert('something went wrong!!')
            }
        })
    }

    return (
        <>
            <center>
                < input type="text" onChange={(E)=> setTrackId(E.target.value)} placeholder="Enter Id"/>
                <button onClick={getTrackingDetails}>Track</button>
            </center>
            <br/>
            <br/>
            <center>
            <div>
                {trackDetails !== null ? 
                <div>
                    <h1>OrderId: {trackDetails.data.orderId}</h1>
                    <br/>
                    <h1>Type: {trackDetails.data.orderType}</h1>
                    <br/>
                    <h1>Destination: {trackDetails.data.dAddr}</h1>
                    <br/>
                    <h1>status: {trackDetails.data.orderStatus}</h1>
                </div>
                :null
            }
                
            </div>
            </center>
        </>
    );
}


export default Trackorders;

/*import React, { Component ,useState ,useEffect}  from 'react';
import axios from 'axios';
import { url } from '../common/constant';
import { Redirect, useHistory, useLocation } from 'react-router';
import {Link} from 'react-router-dom';
import '../App.css' 

const Trackorders = () => {
        //order ID
        //Start
        //Destination
        //Status
        const ordersfromdatabase = [
            {orderID:1,start:'Pune',Destination:'Nagpur',status:'Delivered'},
            {orderID:2,start:'Pune',Destination:'Nagpur',status:'Delivered'},
            {orderID:3,start:'Pune',Destination:'Nagpur',status:'Delivered'},
            {orderID:4,start:'Pune',Destination:'Nagpur',status:'Delivered'},
            {orderID:5,start:'Pune',Destination:'Nagpur',status:'Delivered'},
            
        ]
    
        return (
            <div>
            <table border="1" cellpadding="0" cellspacing="1" className="customers"> 
                <thead> 
                    <tr>
                        <th>Order ID</th>
                        <th>Start</th>
                        <th>Destination</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {ordersfromdatabase.map(data => {
                        return(
                            <tr key={data.orderID}>
                                <td>{data.orderID}</td>
                                <td>{data.start}</td>
                                <td>{data.Destination}</td>
                                <td>{data.status}</td>
                                <td> 
                                   
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            
            <div className="mb-3">
                 <a href="/customer">
                    <input type="button" value="Back" />
                 </a>
             {/* <button onClick={() => history.{goBack}()} className="btn btn-design">
               back
             </button>  }
           </div>
             
      

            </div>
          );
    }

 
export default Trackorders;*/