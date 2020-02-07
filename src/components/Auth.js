import React, { Component } from "react";
import axios from "axios";
import AddMember from "./AddMember";
import Login from "./Login";
import Swal from 'sweetalert2'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleAddMember = this.handleAddMember.bind(this)
  }
  async handleAddMember(user) {
    const { data } = await axios.post("/auth/register", user);
    Swal.fire("Welcome!")
    this.props.history.push("/");
  }
  

  render() {
    return (
      <div>
        <AddMember onAddMember={this.handleAddMember} />
      </div>
    );
  }
}
export default Auth;
