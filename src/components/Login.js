import React, { Component } from "react";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    return (
      <div>
        <h2 className="login-title">Login/Register</h2>
        <p className="login-message">
          <h3>Please login below. Not a member, please register.</h3>
        </p>
        <form className="container" onSubmit={this.login}>
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
            <button>Register</button>
          <div className="divider" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
export default Login;
