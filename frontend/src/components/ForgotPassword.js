import React, { Component } from "react";
import { BrowserRouter as Route} from "react-router-dom";
import ReactSession from 'react-client-session';
import RecycleService from "../service/RecycleService";
import ChangePassword from "../components/ChangePassword";

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {username:'', question:'', answer:''};
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleForgotPassword = (event) =>{
        event.preventDefault();
        
        let user = {
            username: this.state.username,
            question: this.state.question,
            answer: this.state.answer
          };

        RecycleService.validateForgotPassword(user)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))     
    }


    handleSuccessfulResponse(response) {
     
        if(response.data === true){
            console.log(response)
            this.props.history.push("/way2recycle/changePassword");
            console.log(ReactSession.get("username"));
            return (
                <Route path="/way2recycle/changePassword" component={ChangePassword} />
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
            <form onSubmit={this.handleForgotPassword}>
                <h3>Forgot Password?</h3>

                <div className="form-group">
                    <div className="div-bottom-space">
                        <input type="text" name="username" className="form-control" placeholder="Enter user name" onChange={this.handleChange} />
                    </div>
                    <label>Verification Question & Answer</label>
                    <div className="div-bottom-space">
                        <input type="text" name="question" className="form-control" placeholder="Enter your Question" onChange={this.handleChange} />
                    </div>
                    <input type="text" name="answer" className="form-control" placeholder="Enter your answer" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
            </form>
        );
    }
}