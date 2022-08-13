import React from 'react'
import { url } from '../common/constant';
import axios from 'axios';

const DeliverRow =({row}) => {
    const editPackage = (orderId) =>{
        console.log(orderId)
        axios.put(url+'/delivery/delivered/'+orderId).then((response)=>{
            const result = response.data
            if(result.status === 'success')
                alert("Package Delivered")
            else
                alert("Error")
        });
    }
    return (
        <tr>
            <td>{row.orderId}</td>
            <td>{row.orderType}</td>
            <td>{row.custId}</td>
            <td>{row.dAddr}</td>
            <td>{row.pinCode}</td>
            
            <td> <button onClick = {()=>editPackage(row.orderId)} className ="btn btn-info">Delivered</button></td>
        </tr>
    )
}

export default DeliverRow
