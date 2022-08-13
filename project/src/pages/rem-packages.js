import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../common/constant'
import OrderRow from '../pages/OrderRow'

function Remainingpackages() {

    const [order, setorder] = useState([])

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = () =>{
        axios.get(url + '/getRemPackges').then((response)=>{
            const result = response.data
            if(result.status === 'success')
            setorder(result.data)
            else
                alert("Page Cannot be loaded")
        })
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th> OrderID </th>
                    <th> Address</th>
                    <th> PinCode </th>
                    <th> Status </th>
                    </tr>
                </thead>
                <tbody>
                    {order.map((o) => {
            return <OrderRow o={o} />
          })}
                </tbody>
            </table>
        </div>
    )
}

export default Remainingpackages
