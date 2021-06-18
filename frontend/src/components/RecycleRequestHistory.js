import React, { Component } from 'react';
import moment from 'moment';
import RecycleService from '../service/RecycleService.js';

class CreateRecycleRequest extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            showPopup: false,
            recycleRequests: [],
            message: null
        }
        this.showPopup = this.showPopup.bind(this); 
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshHistory();
        console.log(this.state)
    }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
      
    refreshHistory() { 
        RecycleService.getAllRecycleRequestDetails()
            .then(
                response => {
                    console.log(response);
                    this.setState({ recycleRequests: response.data })
                }
            )
    }
    showPopup(id){
        console.log(id);

    }
    render() {
        console.log('render')
        return (
            <div>
                <h3>Recycle Request History</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Request Id</th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.recycleRequests.map(
                                    recycleRequest =>
                    
                                        <tr key={recycleRequest.requestId}>
                                            <td><a href="#"onClick={() => this.showPopup(recycleRequest)}>{recycleRequest.requestId}</a></td>
                                            <td>{recycleRequest.item}</td>
                                            <td>{recycleRequest.quantity}</td>
                                            <td>{moment(recycleRequest.requestedDate).format('DD-MM-YYYY')}</td>
                                            <td>{recycleRequest.description}</td>
                                            <td>{recycleRequest.status}</td>
                                         </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
class OpenRequest extends Component{
    render() {
        return (
          <div className='popup'>
            <div className='popup_inner'>
              <h1>{this.props.text}</h1>
            <button onClick={this.props.closePopup}>close me</button>
            </div>
          </div>
        );
      }
}
export default CreateRecycleRequest
