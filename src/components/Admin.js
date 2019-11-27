import React, { Component } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import EventItem from "./EventItem";
import Member from "./Member";
import Images from "./Images";
import axios from "axios";
import AddEvent from "./AddEvent";
registerPlugin(FilePondPluginImagePreview);

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      officerList: [],
      memberList: [],
      eventList: []
    };
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }
  componentDidMount() {
    axios.get("/api/Events").then(res => {
      this.setState({
        eventList: res.data
      });
    });
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

  handleAddEvent(event) {
    axios.post("/api/Event", event);
    // .then(res => {this.setState({eventList: [...this.state.eventList, ]})})
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

  render() {
    return (
      <div>
        <AddEvent onAddEvent={this.handleAddEvent} />
        <table>
          {this.state.eventList.map(el => (
            <EventItem
              key={el.id}
              eventListObj={el}
              deleteEvent={this.deleteEvent}
            />
          ))}
        </table>

        {this.state.memberList.map(el => (
          <Member
            key={el.id}
            memberListObj={el}
            deleteMember={this.deleteMember}
          />
        ))}
        <div className="file-pond">
          <FilePond allowMultiple={true} />
        </div>
      </div>
    );
  }
}
export default Admin;
