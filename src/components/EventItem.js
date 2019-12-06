import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class EventItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.eventListObj.date,
      event: this.props.eventListObj.event,
      description: this.props.eventListObj.description,
      isEditing: false
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    const { isEditing, date, event, description  } = this.state;
    const {id} = this.props
    if (isEditing) this.props.onSubmit({id, date, event, description})
    this.setState({ isEditing: !isEditing });
  }

  render() {
    const { isEditing, date, event, description  } = this.state;
    
    return (
      <tr>
        <td>
          {isEditing ? (
            <input
              value={date}
              onChange={e => this.setState({ date: e.target.value })}
            />
          ) : (
            <div>{date}</div>
          )}
        </td>
        <td>{this.props.eventListObj.event}</td>
        <td>{this.props.eventListObj.description}</td>

        <td>
          <button type="submit" onClick={this.handleEdit}>
            {isEditing ? "Save Changes" : "Edit"}
          </button>
        </td>
        <td>
          <button onClick={() => this.props.onDelete(this.props.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default withRouter(EventItem);
