import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateRecycleRequest from '../components/RecycleRequestHistory';
import logo from './recycle_image.png'; 

class HeaderComponent extends Component{
  render() {
    return(
      <div className="headerComponent">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <img src={logo} alt="" className="logoimg"/>
            <Link className="navbar-brand" to={"/sign-in"}>Way2Recycle</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                    <Link className="nav-link" to={"/way2recycle/signup"}>Sign up</Link>
                  </li>
              <li className="nav-item">
                  <Link className="nav-link" to={"/way2recycle/createRecycleRequest"}>Create Recycle Request</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/way2recycle/logout"}>Logout</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;