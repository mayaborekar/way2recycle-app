import React, { Component } from "react";
import RecycleService from "../service/RecycleService";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {userType: '', username: '',email: '',  
        password:'', address:'',question:'', answer:''};
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmitSignUp = (event) =>{
        event.preventDefault();
        console.log(event.target.elements.username.value);
        console.log('A form was submitted: ' +JSON.stringify(this.state) );

        let user = {
            userType: this.state.userType,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            question: this.state.question,
            answer: this.state.answer
          };

        RecycleService.executeSignUpService(user)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))     
    }


    handleSuccessfulResponse(response) {
        console.log("Response block")
     console.log(response)
     this.setState({ welcomeMessage: response.data.message })
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
            <form onSubmit={this.handleSubmitSignUp}>
                <h3>SignUp</h3>
                <fieldset className="form-group" >
                    <label>User Type</label>
                    <input type="text" name="userType" className="form-control" placeholder="Enter user type" onChange={this.handleChange} />
                </fieldset>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter user name" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" className="form-control" placeholder="Enter confirm password" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="textarea" name="address" className="form-control" placeholder="Enter address" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Verification Question & Answer</label>
                    <div className="div-bottom-space">
                        <input type="text" name="question" className="form-control" placeholder="Enter your Question" onChange={this.handleChange} />
                    </div>
                    <input type="text" name="answer" className="form-control" placeholder="Enter your answer" onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">SignUp</button>
                <p className="forgot-password text-right">
                    Already registered <a href="login">log in?</a>
                </p>
            </form>
        );
    }
}