import React from 'react'
import {BrowserRouter, Link ,Switch, Route} from 'react-router-dom'
import login from './pages/login'
import Customer from './pages/Customer'
import signup from './pages/signup'
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import Home from './pages/Home'
import UpdateCustomer from './pages/updateCustomer'
import ViewOrders  from './pages/ViewOrders'
import addorders from './pages/addOrders'
import Trackorders from './pages/trackOrders'
import logout from './pages/logout'
import back from './pages/back'
import Delivery from './pages/delivery'
import Remainingpackages from './pages/rem-packages'
import NewPackage from './components/NewPackage'
import PackageRow from './components/PackageRow'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/' component={login} />
          <Route exact path ='/customer' component={Customer} />
          <Route exact path ='/signup' component={signup} />
          <Route exact path ='/home' component={Home} />
          <Route exact path = "/employees" component={ListEmployeeComponent}></Route>
          <Route exact path = "/add-employee" component={AddEmployeeComponent} ></Route>
          <Route exact path = "/updateCustomer" component={UpdateCustomer} ></Route>
          <Route exact path = "/update-employee/:empId" component={UpdateEmployeeComponent} ></Route>
          <Route exact path = "/ViewOrders" component={ViewOrders} ></Route>
          <Route exact path = "/TrackOrders" component={Trackorders} ></Route>
          <Route exact path = "/AddOrders" component={addorders} ></Route>
          <Route exact path = "/logout" component={logout} ></Route>
          <Route exact path = "/back" component={back} ></Route>
          <Route exact path = "/delivery" component={Delivery} ></Route>
          <Route exact path = "/rem-packages" component={Remainingpackages} ></Route>
          <Route exact path = "/NewPackages" component={NewPackage} ></Route>
          <Route exact path = "/PackageRow" component={PackageRow} ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
