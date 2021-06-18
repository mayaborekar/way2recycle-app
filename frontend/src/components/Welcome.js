import React, { Component } from "react";
import { BrowserRouter as Route} from "react-router-dom";
import CreateRecycleRequest from "./RecycleRequestHistory";


export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { username: ''};
    }
   

    handleSubmitWelcome = (event) =>{
       event.preventDefault();
       this.props.history.push("/way2recycle/createRecycleRequest");
       return (
            <Route path="/way2recycle/createRecycleRequest" component={CreateRecycleRequest} />
        );
    }   



    render() {
        return (
            <form onSubmit={this.handleSubmitWelcome}>

                <h3>Welcome</h3>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Creacte Recycle Request</button>
                
            </form>
        );
    }
}



