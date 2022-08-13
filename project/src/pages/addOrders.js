import React, { useState } from 'react'
import { useHistory, useLocation} from 'react-router';
import axios from 'axios';
import { url } from '../common/constant';
import { useSelector } from 'react-redux'
import { Form } from 'react-bootstrap';
import {Dropdown,DropdownButton,ButtonGroup,SplitButton} from 'react-bootstrap'

const AddOrders = () => {
    const [orderStatus, setOrderStatus] = useState('')
    const [paymentStatus, setPaymentStatus] = useState('')
    const [amount, setAmount] = useState('')
    const [weight,setWeight] = useState('')
    const [orderType, setOrderType] = useState('')
    const [orderType1, setOrderType1] = useState('')
    const [paymentMode, setPaymentMode] = useState('')
    const [addr, setAddr] = useState('')
    const [pinCode, setPinCode] = useState()
    
    const history = useHistory();
  const userId = useSelector(state => state.userId)
    //const location = useLocation()
    //let customer = location.state.customer;
    //console.log(customer)

    const addToOrder = () =>{
        // if(orderStatus.length===0){
        //     alert('Enter orderstatus')
        // }
        // if(paymentStatus.length===0){
        //     alert('Enter paymentStatus')
        // }
        if(amount.length===0){
            alert('Enter amount')
        }
        if(weight.length===0){
            alert('Enter weight')
        }
        if(orderType.length===0){
            alert('Enter orderType')
        }
        if(paymentMode.length===0){
            alert('Enter paymentMode')
        }

        else{
            const data = new FormData()

            data.append('orderStatus','InProcess')
            data.append('paymentStatus','pending')
            data.append('amount',amount)
            data.append('weight',weight)
            data.append('orderType',orderType)
            data.append('paymentMode',paymentMode)
            data.append('pinCode',pinCode)
            data.append('dAddr',addr)
            data.append('custId',userId)
            console.log(data)
            //console.log(paymentStatus)

            axios.post(url+'/customer/orders',data).then((response)=>{
                const result = response.data;
                console.log(result)
                if(result.status === 'success')
                {
                history.push('/customer')
                console.log("Success")
                alert('success')
                
            }
            else
                alert('Error')
            })

        }
    }
    return (
        <div>
        

        <form className="signup-form">
          <h1>Add Orders</h1>
          <div className="col-10">
          <div className="container p-2">
            <label htmlFor="">Order Type :&nbsp;&nbsp; </label>
            <select className="custom-select"
             onChange={(e)=>
              {
                setOrderType(e.target.value)
              }
            }>
              <option value="Small">Small</option>
              <option value="Large">Large</option>
              <option value="Medium">Medium</option>
              <option value="Xlarge">Xlarge</option>
            </select>
            <b>&nbsp;&nbsp;{orderType}</b>
          </div>
          <br/>
        <div className="mb-3">
          <label htmlFor="">PaymentMode :&nbsp;&nbsp; </label>
            <select className="custom-select"
             onChange={(e)=>
              {
                setPaymentMode(e.target.value)
              }
            }>
              <option value="Online">Online</option>
              <option value="Cash">Cash</option>
              <option value="UPI">UPI</option>
              <option value="cheque">Cheque</option>
            </select>
            <b>&nbsp;&nbsp;{paymentMode}</b>
          </div>

          <div className="mb-3">
            <label htmlFor="">weight</label>
            <input
              onChange={(e) => {
                setWeight(e.target.value)
                if(orderType == "Small")
                setAmount(e.target.value*8)
                if(orderType == "Medium")
                setAmount(e.target.value*10)
                if(orderType == "Large")
                setAmount(e.target.value*12)
                if(orderType == "XLarge")
                setAmount(e.target.value*14)
              }}
              type="text"
              className="form-control"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="">pinCode</label>
            <input
              onChange={(e) => {
                setPinCode(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">To Address</label>
            <input
              onChange={(e) => {
                setAddr(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            Price = {amount}
          </div>



          <div className="mb-3">
            <button onClick={addToOrder} className="btn btn-design">
              Add
            </button>
          </div>
          <div className="mb-3">
                 <a href="/customer">
                    <input type="button" value="Back" />
                 </a>
             {/* <button onClick={() => history.{goBack}()} className="btn btn-design">
               back
             </button>  */}
           </div>

        </div>
          </form>
          {userId}
        </div>
    )
}
export default AddOrders;