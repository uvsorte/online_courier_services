import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../common/constant'
import  PackageRow  from './PackageRow'
const NewPackage = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        axios.get(url+"/api/v1/pOrders").then((response)=>{
            const result = response.data
            if(result.status==='success')
            setPackages(result.data)
            else
                alert("Warning Danger Ahead")
        })
    }, [])
    return (
        <div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>OrderType</th>
                        <th>CustId</th>
                        <th>Address</th>
                        <th>pinCode</th>
                    </tr>
                </thead>
                <tbody>
                {packages.map((row) => {
            return <PackageRow row={row} />
          })}
                </tbody>
            </table>
        </div>
    )
}

export default NewPackage
