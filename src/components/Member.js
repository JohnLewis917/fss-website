import React, { Component } from "react";

class Member extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <h6>{this.props.memberListObj.rank}</h6>
        </div>
        <div>
          <h6>{this.props.memberListObj.first_name}</h6>
        </div>
        <div>
          <h6>{this.props.memberListObj.last_name}</h6>
        </div>
        <div>
          <h6>{this.props.memberListObj.email}</h6>
        </div>
        <div>
          <h6>{this.props.memberListObj.paid}</h6>
        </div>
        <div>
          <h6>{this.props.memberListObj.amount}</h6>
        </div>
        <div>
          <h6>{this.props.memberListObj.isAdmin}</h6>
        </div>

        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}
export default Member;
