import React,{Component} from 'react';

class FooterComponent extends Component{
    render() {
      return(
            <div className="footerComponent">
                <nav className="navbar navbar-expand-lg navbar-light fixed-bottom">
                    <div className="container">
                         <span className="quote1">“The greatest threat to our planet is the belief that someone else will save it.” – Robert Swan, Author</span>                    
                    </div>
                </nav>
            </div>
        );
        }
    }
      
export default FooterComponent;