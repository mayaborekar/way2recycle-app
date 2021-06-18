import React, { Component } from "react";
import { BrowserRouter as Route} from "react-router-dom";
import RecycleService from "../service/RecycleService";
import Success from "./Success";

export default class ChangePassword extends Component {
    username;
    
    constructor(props) {
        super(props);
        this.state = {password: ''};
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleChangePassword = (event) =>{
        event.preventDefault();
        console.log("password:"+this.state.password);
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        RecycleService.changePassword(user)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))     
    }


    handleSuccessfulResponse(response) {
       if(response.data === true){
        console.log(response)
        this.props.history.push("/way2recycle/success");
        return (
            <Route path="/way2recycle/success" component={Success} />
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
            <form onSubmit={this.handleChangePassword}>
                <h3>Change Password</h3>
                <div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" className="form-control" placeholder="Enter confirm password" onChange={this.handleChange}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
            </form>
        );
    }
}