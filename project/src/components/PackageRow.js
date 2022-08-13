import React from 'react'
import { url } from '../common/constant';
import axios from 'axios';

const PackageRow =({row}) => {
    const editPackage = (orderId) =>{
        console.log(orderId)
        axios.put(url+'/api/v1/approve_package/'+orderId).then((response)=>{
            const result = response.data
            if(result.status === 'success')
                alert("Package Approved")
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
            
            <td> <button onClick = {()=>editPackage(row.orderId)} className ="btn btn-info">Approved</button></td>
        </tr>
    )
}

export default PackageRow
