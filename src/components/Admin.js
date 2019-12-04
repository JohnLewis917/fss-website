import React, { Component } from "react";
// import { FilePond, registerPlugin } from "react-filepond";
// import "filepond/dist/filepond.min.css";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import EventItem from "./EventItem";
import Member from "./Member";
import Images from "./Officers";
import axios from "axios";
import AddEvent from "./AddEvent";

// registerPlugin(FilePondPluginImagePreview);

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officerList: [],
      memberList: [],
      eventList: []
    };
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleUpdateEvent = this.handleUpdateEvent.bind(this);
  }
  componentDidMount() {
    axios.get("/api/Event").then(res => {
      this.setState({
        eventList: res.data
      });
    });
    axios.get("/api/People").then(res => {
      this.setState({
        memberList: res.data
      });
    });
  }
  getEvents() {
    axios.get("/api/Event").then(res => {
      this.setState({
        eventList: res.data
      });
    });
  }
  getMember() {
    axios.get("/api/People").then(res => {
      this.setState({
        memberList: res.data
      });
    });
  }

  handleAddEvent(event) {
    axios.post("/api/Event", event);
    
  }
  handleUpdateEvent(event) {
    axios.put(`/api/Event/${id}`, event)
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
      this.getMember();
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

  render() {
    
    return (
      <div>
        <AddEvent onAddEvent={this.handleAddEvent} 
        onUpdateEvent={this.handleUpdateEvent}/>
        <h2>Events</h2>
        <table className="table-1">
          <th>Date</th>
          <th>Event</th>
          <th>Description</th>
          {this.state.eventList.map(el => (
            <EventItem
              key={el.id}
              eventListObj={el}
              deleteEvent={this.deleteEvent}
            />
          ))}
        </table>
        <h2>Members</h2>
        <table className="table-2">
          <th>Rank</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Paid</th>
          <th>Amount</th>
          <th>Admin</th>
          {this.state.memberList.map(el => (
            <Member
              key={el.id}
              memberListObj={el}
              deleteMember={this.deleteMember}
             
            />
          ))}
        </table>

        <div className="file-pond">
          {/* <FilePond allowMultiple={true} /> */}
        </div>
      </div>
    );
  }
}
export default Admin;
