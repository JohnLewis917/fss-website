import React, {Component} from "react";
import logo from "../assets/926 FSS Patch.png";
import { Link } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'

class Header extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  async logout() {
    axios.delete('/auth/logout')
    this.setState({ user: {} })
  }
  render(){

    return (
      <header>
        <div className="heading">
          <div className="logo-holder">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="title-holder">
            <h3 className="title">926 FSS Sandstormer Booster Club</h3>
          </div>
          <div>
            <div className="icon_holder">
              <i className="fas fa-align-justify"></i>
            </div>
          </div>
          <li className="links">
            <li>
              <Link to="/">
                <button>Main</button>
              </Link>
            </li>
            <li>
              <Link to="/Auth">
                <button>Login/Register</button>
              </Link>
            </li>
            <li>
              <Link to="/Payment">
                <button>Donate</button>
              </Link>
            </li>
            
            <li>
              <Link to="/Admin">
                <button>Admin</button>
              </Link>
            </li>
            
            <li>
              <button onClick={() => this.logout()}>Logout</button>
            </li>
          </li>
        </div>
      </header>
    );
  }
}
  

export default Header;
