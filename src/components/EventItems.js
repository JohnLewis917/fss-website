import React, { Component } from "react";

class EventItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h6>{this.props.eventListObj.date}</h6>
        </div>
        <div>
          <h6>{this.props.eventListObj.event}</h6>
        </div>
        <div>
          <h6>{this.props.eventListObj.description}</h6>
        </div>

        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}
export default EventItems;
