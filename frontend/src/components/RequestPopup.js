import React, { Component } from "react";
import moment from 'moment';
import { BrowserRouter as Route} from "react-router-dom"
import RecycleService from "../service/RecycleService";
import RecycleRequestHistory from "./RecycleRequestHistory";

export default class RequestPopup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            requestId: this.props.match.params.id,
            item: '', 
            quantity: '',
            description: '',
            requestedDate: moment(new Date()).format('YYYY-MM-DD'),
            status: ''
        }
        this.validate = this.validate.bind(this)
    }
    validate(values) {
        let errors = {}
        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid Target Date'
        }

        return errors

    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    createRecycleRequest = (event) =>{
        console.log("Create Request Submit")
        event.preventDefault();           
        let recycleRequest = {
            item: this.state.item, 
            quantity: this.state.quantity,
            description: this.state.description,
            requestedDate: moment(new Date()).format('YYYY-MM-DD'),
            status: 'Created'
       };
 
       RecycleService.executeCreateRecycleRequestService(recycleRequest)
       .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))
     }

     handleSuccessfulResponse(response) {
        this.props.history.push("/way2recycle/recycleRequestHistory");
         return (
            <Route path= "/way2recycle/recycleRequestHistory" component={RecycleRequestHistory} />
         );
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
            <form onSubmit={this.createRecycleRequest}>
                <h3>New Recycle Request</h3>

                <div className="form-group">
                    <label>Item</label>
                    <input type="text" name="item" className="form-control" placeholder="Item" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Quantity</label>
                    <input type="text" name ="quantity" className="form-control" placeholder="Quantity" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.handleChange} />
                </div>
               {/* <div className="form-group">
                    <label>Request Date</label>
                    <input type="date"name="requestedDate" className="form-control" placeholder="Request Datee"  onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <input type="text" name="status" className="form-control" placeholder="Status" onChange={this.handleChange} />
                </div>
        */}

                <button type="submit" className="btn btn-dark btn-lg btn-block">Create Request</button>
            </form>
        );
    }
}