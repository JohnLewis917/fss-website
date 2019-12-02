import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Member from "./Member";



class AddMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member_rank: "",
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.handleRank = this.handleRank.bind(this);
    this.handleFirst = this.handleFirst.bind(this);
    this.handleLast = this.handleLast.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.addMember = this.addMember.bind(this);
  }
  handleRank(event) {
    this.setState({ member_rank: event.target.value });
  }
  handleFirst(event) {
    this.setState({ first_name: event.target.value });
  }
  handleLast(event) {
    this.setState({ last_name: event.target.value });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  addMember(event) {
    event.preventDefault();
    this.props.onAddMember(this.state);
    this.setState({ member_rank: "", first_name: "", last_name: "", email: "", password: "" });
    
  }

  render() {
    return (
      <div>
        <h2 className="login-title">Login/Register</h2>
        <p className="login-message">
          <h3>
            New members please register below. Already a member, please login.
          </h3>
        </p>
        <form className="container" onSubmit={this.addMember}>
          <h5>Rank</h5>
          <input
            className="input-1"
            name="rank"
            value={this.state.member_rank}
            type="text"
            size="5"
            onChange={this.handleRank}
          ></input>
          <br></br>
          <h5>First Name</h5>
          <input
            className="input-2"
            name="first_name"
            value={this.state.first_name}
            type="text"
            size="35"
            onChange={this.handleFirst}
          ></input>
          <br></br>
          <h5>Last Name</h5>
          <input
            className="input-3"
            name="last_name"
            value={this.state.last_name}
            type="text"
            size="30"
            onChange={this.handleLast}
          ></input>
          <br></br>
          <h5>Email</h5>
          <input
            className="input-4"
            name="email"
            value={this.state.email}
            type="text"
            size="35"
            onChange={this.handleEmail}
          ></input>
          <br></br>
          <h5>Password</h5>
          <input
            className="input-5"
            name="password"
            value={this.state.password}
            type="password"
            size="20"
            onChange={this.handlePassword}
          ></input>
          <br></br>
          <br></br>
          <button type="submit">Register</button>
          <div className="divider" />
          <Link to="/Login">
            <button>Login</button>
          </Link>
        </form>
        
      </div>
    );
  }
}
export default AddMember
