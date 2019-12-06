import React, { Component } from "react";
import { getEvents } from "../ducks/actions";
import { connect } from "react-redux";
import EventItem from "./EventItem";
import Officers from "./Officers";

class Dashboard extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    console.log(this.props.eventList);
    return (
      <div className="flex">
        
        <div>
        <h2>Upcoming Events</h2>
          <table className="table-1">
            <th>Date</th>
            <th>Event</th>
            <th>Description</th>
            {this.props.eventList.map(el => (
              <tr>
              <td>{el.date}</td>
              <td>{el.event}</td>
              <td>{el.description}</td>
      
              
            </tr>
            ))}
          </table>
        </div>
        <div>
          <Officers/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    eventList: state.events
  };
};

export default connect(mapStateToProps, { getEvents })(Dashboard);
