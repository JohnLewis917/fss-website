import React, { Component } from "react";

class Member extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.memberListObj.member_rank}</td>
        <td>{this.props.memberListObj.first_name}</td>
        <td>{this.props.memberListObj.last_name}</td>
        <td>{this.props.memberListObj.email}</td>
        <td>{this.props.memberListObj.paid}</td>
        <td>{this.props.memberListObj.amount}</td>
        <td>{this.props.memberListObj.isAdmin}</td>

        <td>
          <button>Edit</button>
        </td>
        <td>
          <button onClick={() => this.props.deleteMember(this.props.memberListObj.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}
export default Member;
