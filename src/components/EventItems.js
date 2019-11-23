import React, { Component } from "react";

class EventItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-2">
        <table className="pure-table pure-table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6>{this.props.eventListObj.date}</h6>
              </td>
              <td>
                <h6>{this.props.eventListObj.event}</h6>
              </td>
              <td>
                <h6>{this.props.eventListObj.description}</h6>
              </td>
            </tr>
            <button>Edit</button>
            <button>Delete</button>
          </tbody>
        </table>
      </div>
    );
  }
}
export default EventItems;
