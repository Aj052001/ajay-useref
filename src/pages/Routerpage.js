import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Dashbord from './Dashbord'
import Adddis from './Adddis'
import Addret from './Addret'
import Distributordetails from './Distributordetails'
import Distributordetailsr from './Distributordetailsr'
import Distributorlist from './Distributorlist'
import Distributorrequest from './Distributorrequest'
import Login from './Login'
import Retailerdetails from './Retailerdetails'
import Retailerdetailsr from './Retailerdetailsr'
import Retailerlist from './Retailerlist'
import Retailerrequest from './Retailerrequest'



export default function Routerpage() {
  return (
    <>
    <Router>
        <Switch>
           <Route path = '/' exact component={Dashbord} />
           <Route path = '/adddis' exact component={Adddis} />
           <Route path = '/addret' exact component={Addret} />
           <Route path = '/distributordetails' exact component={Distributordetails} />
           <Route path = '/distributordetailsr' exact component={Distributordetailsr} />
           <Route path = '/distributorlist' exact component={Distributorlist} />
           <Route path = '/distributorrequest' exact component={Distributorrequest} />
           <Route path = '/login' exact component={Login} />
           <Route path = '/retailerdetails' exact component={Retailerdetails} />
           <Route path = '/retailerdetailsr' exact component={Retailerdetailsr} />
           <Route path = '/retailerlist' exact component={Retailerlist} />
           <Route path = '/retailerrequest' exact component={Retailerrequest} />

        </Switch>
    </Router>
    </>
  )
}
