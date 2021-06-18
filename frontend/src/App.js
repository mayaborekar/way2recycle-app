import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import User from "./components/UserComponent";

import HeaderComponent from './tiles/HeaderComponent';
import FooterComponent from './tiles/FooterComponent';
import BodyComponent from './tiles/BodyComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <BodyComponent></BodyComponent>  
       
        <FooterComponent></FooterComponent>
      </div>
    </Router>
  );
}

export default App;