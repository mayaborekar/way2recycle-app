import React,{Component} from 'react';
import './login.css';
import LoginService from './LoginService';

class LoginRecycle extends Component{

    constructor(props){
        super(props);
        this.state = {username: '', password: ''};

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleUsernameChange(event){
        this.setState({username: event.target.value}); 
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    retrieveWelcomeMessage(){
      console.log("testing");
      LoginService.executeLoginService();
    }

    handleSubmit(event) {
      console.log('username: '+ this.state.username);
      console.log('password: '+ this.state.password); 
        event.preventDefault();
        const data = {
          username: this.state.username,
          password: this.state.password
        };
        this.setState({
          data: data
        });
        console.log('data: '+data);
      }


    render() {
      return(
        <div className="loginRecycle" >
          <form id="main-login"
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.onSubmit}>
            UserName: <input name="username" type="text"  onChange={this.handleUsernameChange}/>
            Password: <input name="password" type="password"  onChange={this.handlePasswordChange}/>
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            <button onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
            </form>
        </div>
        
      );
    }

  }

  export default LoginRecycle;