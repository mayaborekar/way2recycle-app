import React, { Component } from "react";

export default class Success extends Component {
    render() {
        return (
            <form >
                <h3>Password changed  successfully</h3>
                <p className="forgot-password text-right">
                    Already registered <a href="sign-in">log in?</a>
                </p>
            </form>
        );
    }
}
