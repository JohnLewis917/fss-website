import React, { Component } from "react";
import {withRouter} from 'react-router-dom'

class EventItem extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this)
  }
  
  handleEdit(){
    const {id} = this.props 
    this.props.history.push(`/EventItem/${id}`)
  }

  render() {
    return (
      <tr>
        <td>{this.props.eventListObj.date}</td>
        <td>{this.props.eventListObj.event}</td>
        <td>{this.props.eventListObj.description}</td>

        <td>
          <button type="submit" onClick={this.handleEdit}>Edit</button>
          
        </td>
        <td>
          <button
            onClick={() => this.props.deleteEvent(this.props.eventListObj.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default withRouter(EventItem);
