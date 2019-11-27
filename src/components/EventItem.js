import React, { Component } from "react";

class EventItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.eventListObj.date}</td>
        <td>{this.props.eventListObj.event}</td>
        <td>{this.props.eventListObj.description}</td>

        <td>
          <button>Edit</button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    );
  }
}
export default EventItem;