import React, { Component } from "react";
import {withRouter} from 'react-router-dom'

class AddEvent extends Component {
  constructor(props) {
    super(props);
    const{id} = this.props.match.params
    this.state = {
      date: "",
      event: "",
      description: "",
      isEditing: id ? true : false 
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.updateEvent=this.updateEvent.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleDate(event) {
    this.setState({ date: event.target.value });
    
  }
  handleEvent(event) {
    this.setState({ event: event.target.value });
    
  }
  handleDesc(event) {
    this.setState({ description: event.target.value });
  }
  
  addEvent(event) {
    event.preventDefault();
    this.props.onAddEvent(this.state);
    this.setState({ date: "", event: "", description: "" });
  }
  updateEvent(event){
    event.preventDefault();
    this.props.onUpdateEvent(this.state.id)
    this.setState({date: "", event: "", description: "" })
  }
  handleSubmit(event){
    if (this.state.isEditing){
        this.updateEvent(event)
    }else {
        this.addEvent(event)
    }
}
  

  render() {
    return (
      <div>
        <h1 className="event-title">Add Event</h1>

        <form className="add-event" >
          <h5>Date</h5>
          <input
            className="input-1"
            name="Date"
            value={this.state.date}
            type="text"
            size="10"
            onChange={this.handleDate}
          ></input>
          <br></br>
          <h5>Event</h5>
          <input
            className="input-2"
            name="Event"
            value={this.state.event}
            type="text"
            size="35"
            onChange={this.handleEvent}
          ></input>
          <br></br>
          <h5>Description</h5>
          <textarea
            className="input-3"
            name="description"
            value={this.state.description}
            type="text"
            size="45"
            onChange={this.handleDesc}
          ></textarea>
          <br></br>
          <br></br>
          <button onClick={this.handleSubmit} color="primary" className="submitEvent" type="button">
          {this.state.isEditing ? 'Save Changes': 'Add'}
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(AddEvent);
