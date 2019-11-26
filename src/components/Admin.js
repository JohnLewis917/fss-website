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
      memberList: [
        {
          rank: "SrA",
          first_name: "Joe",
          last_name: "Snuffy",
          email: "joe@snuffy.com",
          paid: "Yes",
          amount: 20,
          isAdmin: false
        },
        {
          rank: "SSgt",
          first_name: "Jack",
          last_name: "Smith",
          email: "jack@smith.com",
          paid: "Yes",
          amount: 25,
          isAdmin: true
        }
      ],
      eventList: [
        {
          date: "11/30/19",
          event: "Holiday Wrapping fundraiser at the BX",
          description:
            "Holiday gift wrapping on Saturday starting at 0900. Please come out and help support our Booster club"
        },
        {
          date: "12/9/19",
          event: "926 FSS Holiday Party at the Westgate Hotel",
          description:
            "come celebrate the holidays with the 926. Catered dinner, music, door prizes, and lots of fun!"
        }
      ]
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
            onChange={this.state.handleDate}
          ></input>
          <br></br>
          <h5>Event</h5>
          <input
            className="input-2"
            name="Event"
            type="text"
            size="35"
            onChange={this.state.handleEvent}
          ></input>
          <br></br>
          <h5>Description</h5>
          <textarea
            className="input-3"
            name="city"
            type="text"
            size="45"
            onChange={this.state.handleDesc}
          ></textarea>
          <br></br>
          <br></br>
          <button color="primary" className="submitEvent" type="submit">
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
