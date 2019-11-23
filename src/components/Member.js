import React, { Component } from "react";

class Member extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="container-3">
          <div>
            <h6>{this.props.memberListObj.rank}</h6>
            <h6>{this.props.memberListObj.first_name}</h6>
            <h6>{this.props.memberListObj.last_name}</h6>
            <h6>{this.props.memberListObj.email}</h6>
            <h6>{this.props.memberListObj.paid}</h6>
            <h6>{this.props.memberListObj.amount}</h6>
            <h6>{this.props.memberListObj.isAdmin}</h6>
          </div>
        </div>
      </div>
    );
  }
}
export default Member;
