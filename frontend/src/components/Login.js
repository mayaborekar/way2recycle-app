import React, { Component } from "react";
import { BrowserRouter as Route} from "react-router-dom";
import RecycleService from "../service/RecycleService";
import Welcome from "./Welcome";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password:'' };
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmitLogin = (event) =>{
       event.preventDefault();
       console.log(event.target.elements.username.value);
       console.log('A form was submitted: ' +JSON.stringify(this.state) );
           
       let user = {
        username: this.state.username,
        password: this.state.password
      };

      RecycleService.executeLoginService(user)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))
    }

   handleSuccessfulResponse(response) {
       if(response.data === true){
        this.props.history.push("/way2recycle/welcome");
        return (
            <Route path="/way2recycle/welcome" component={Welcome} />
        );
       }
}

handleError(error) {
    console.log("Error block")
    console.log(error.response)

    let errorMessage = '';

    if (error.message)
        errorMessage += error.message

    if (error.response && error.response.data) {
        errorMessage += error.response.data.message
    }

    this.setState({ welcomeMessage: errorMessage })
}

    render() {
        return (
            <form onSubmit={this.handleSubmitLogin}>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter user name" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="forgotPassword">password?</a>
                </p>
            </form>
        );
    }
}



