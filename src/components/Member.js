import React, { Component } from "react";
import axios from 'axios'

class Member extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isEditing: false,
      member_rank: "",
      first_name: "",
      last_name: "",
      email: "",
      paid: "",
      amount: "",
      isAdmin: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }
  componentDidMount() {
    const {
      member_rank,
      first_name,
      last_name,
      email,
      paid,
      amount,
      isAdmin
    } = this.props.memberListObj;
    this.setState({
      member_rank: member_rank,
      first_name: first_name,
      last_name: last_name,
      email: email,
      paid: paid,
      amount: amount,
      isAdmin: isAdmin
    });
  }
  toggleEdit() {
    const {isEditing} = this.state
    if(isEditing){
      axios.put(`/api/People/${this.props.id}`, this.state)
    }
    this.setState({ isEditing: !isEditing });
  }
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <tr>
        <td>{this.state.member_rank}</td>
        <td>{this.props.memberListObj.first_name}</td>
        <td>{this.props.memberListObj.last_name}</td>
        <td>{this.props.memberListObj.email}</td>
        <td>{this.props.memberListObj.paid}</td>
        <td>{this.props.memberListObj.amount}</td>
        <td>{this.props.memberListObj.isAdmin}</td>

        <td>
          <button onClick={() => this.toggleEdit()}>Edit</button>
        </td>
        <td>
          <button
            onClick={() => this.props.deleteMember(this.props.memberListObj.id)}
          >
            Delete
          </button>
        </td>
        {this.state.isEditing ? (
          <div>
            <input
              name="member_rank"
              onChange={this.handleChange}
              value={this.state.member_rank}
            />
            <input
              name="first_name"
              onChange={this.handleChange}
              value={this.state.first_name}
            />
            <input
              name="last_name"
              onChange={this.handleChange}
              value={this.state.last_name}
            />
            <input
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              name="paid"
              onChange={this.handleChange}
              value={this.state.paid}
            />
            <input
              name="amount"
              onChange={this.handleChange}
              value={this.state.amount}
            />
            <input
              name="isAdmin"
              onChange={this.handleChange}
              value={this.state.isAdmin}
            />
            <button
              onClick={this.toggleEdit}
            >
              Save Changes
            </button>
          </div>
        ) : null}
      </tr>
    );
  }
}
export default Member;
