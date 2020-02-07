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
        <h4>Booster Club Leaders</h4>
        <div>
          <div className="picture-container">
            <div className="picture-row">

            
            <div>
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <h5>Lily, President</h5>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                alt=""               
              />
              <h5>Will, Vice President</h5>
            </div>
            </div>
          </div>
          <div className="picture-row">
            <div>
              <img
                src="https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                alt=""               
              />
              <h5>Janine, Secretary</h5>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                alt=""               
              ></img>
              <h5>Mercedes, Treasurer</h5>
            </div>
          </div>
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
