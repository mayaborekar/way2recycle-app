import React,{Component} from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Welcome from '../components/Welcome';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import ForgotPassword from '../components/ForgotPassword';
import ChangePassword from '../components/ChangePassword';
import CreateRecycleRequest from '../components/CreateRecycleRequest';
import RecycleRequestHistory  from '../components/RecycleRequestHistory';
import Logout from '../components/Logout';

class BodyComponent extends Component{
    render() {
      return(
            <div className="bodyComponent">
               <div className="outer">
                    <div className="inner">
                        <Switch>
                        <Route exact path='/way2recycle' component={Login} />
                        <Route path="/way2recycle/welcome" component={Welcome} />
                        <Route path="/way2recycle/login" component={Login} />
                        <Route path="/way2recycle/signup" component={SignUp} />
                        <Route path="/way2recycle/logout" component={Logout} />
                        <Route path="/way2recycle/forgotPassword" component={ForgotPassword} />
                        <Route path="/way2recycle/changePassword" component={ChangePassword} />
                        <Route path= "/way2recycle/createRecycleRequest" component={CreateRecycleRequest} />
                        <Route path= "/way2recycle/recycleRequestHistory" component={RecycleRequestHistory} />
                        </Switch>
                    </div>
                    <div class="inner1"></div>
                </div>
               
            </div>
        );
    }
}
      
export default BodyComponent;