// import React, { Component } from 'react';
// import CustomerService from '../services/CustomerService';

// class CustomerComponent  extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             customers:[]
//           }
//     }
//     componentDidMount(){
//         CustomerService.getCustomer().then((res)=>{
//             this.setState({customers: res.data})
//         });
//     }

//     render() { 

      
//         return ( 
//         //     <div>
//         //     <h2 className="text-centre">Customers List</h2>
//         //     <div className = "row">
//         //         <table className = "table table-striped table-bordered">
//         //             <thead>
//         //                 <tr>
//         //                     <th>Name</th>
//         //                     <th>Address</th>
//         //                     <th>State</th>
//         //                     <th>PinCode</th>
//         //                     <th>Email</th>
//         //                     <th>Phone</th>
//         //                 </tr>
//         //             </thead>

//         //             <tbody>
//         //                 {
//         //                     this.state.customers.map(
//         //                         customers =>
//         //                         <tr key = {customers.custId}>
//         //                             <td>{customers.name}</td>
//         //                             <td>{customers.address}</td>
//         //                             <td>{customers.state}</td>
//         //                             <td>{customers.pinCode}</td>
//         //                             <td>{customers.email}</td>
//         //                             <td>{customers.phone}</td>

//         //                         </tr>
//         //                     )
//         //                 }
//         //             </tbody>


//         //         </table>
//         //     </div>
//         // </div>
       
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
  
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Update Login Details</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">View Tracking Details</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">View Offers</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Logout</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

// );
//     }
// }
 
// export default CustomerComponent;