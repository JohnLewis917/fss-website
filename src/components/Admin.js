import React, { Component } from "react";
import EventItems from "./EventItems";
import Member from "./Member";
import Images from "./Images";
import FilePond from "react-filepond";
import axios from "axios";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      officerList: [],
      memberList: [],
      eventList: []
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
  }
  getMembers() {
    axios.get("/api/People").then(res => {
      this.setState({
        memberList: res.data
      });
    });
  }
  getEvents() {
    axios.get("/api/Events").then(res => {
      this.setState({
        eventList: res.data
      });
    });
  }
  addEvent() {
    axios.post("/api/Event", this.state)
    .then(res => {this.setState({eventList: [...this.state.eventList, ]})})
  }
  
  getOfficers() {
    axios.get("/api/Officers").then(res => {
      this.setState({
        officerList: res.data
      });
    });
  }
  deleteMember = id => {
    axios.delete(`/api/People/${id}`).then(() => {
      this.getMembers();
    });
  };
  deleteEvent = id => {
    axios.delete(`/api/Event/${id}`).then(() => {
      this.getEvents();
    });
  };
  updateMember() {
    console.log(this.state.id, this.state);
    axios.put(`/api/People/${this.state.id}`, {}).then(res => {
      this.setState({
        memberlist: res.data
      });
    });
  }
  handleDate(event) { 
    this.setState({ date: event.target.value });
    console.log(event.target.value)
  }
  handleEvent(event) {
    this.setState({ event: event.target.value });
  }
  handleDesc(event) {
    this.setState({ description: event.target.value });
  }
  render() {
    return (
      <div>
        <h1 className="event-title">Add Event</h1>

        <form className="add-event">
          <h5>Date</h5>
          <input
            className="input-1"
            name="Date"
            type="text"
            size="10"
            onChange={this.handleDate}
          ></input>
          <br></br>
          <h5>Event</h5>
          <input
            className="input-2"
            name="Event"
            type="text"
            size="35"
            onChange={this.handleEvent}
          ></input>
          <br></br>
          <h5>Description</h5>
          <textarea
            className="input-3"
            name="city"
            type="text"
            size="45"
            onChange={this.handleDesc}
          ></textarea>
          <br></br>
          <br></br>
          <button color="primary" className="submitEvent" type="submit" onClick={() => this.addEvent()}>
            Add
          </button>
        </form>

        {this.state.eventList.map(el => (
          <EventItems
            key={el.id}
            eventListObj={el}
            deleteEvent={this.deleteEvent}
          />
        ))}

        {this.state.memberList.map(el => (
          <Member
            key={el.id}
            memberListObj={el}
            deleteMember={this.deleteMember}
          />
        ))}
      </div>
    );
  }
}
export default Admin;
