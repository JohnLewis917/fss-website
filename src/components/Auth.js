import React, { Component } from 'react';
import axios from 'axios';
import Register from './Register';
import Login from './Login';



class Auth extends Component {
  constructor() {
    super();
    
  }
  handleRegister(event) {
    axios.post("/api/People", event);
  }
    // .then(res => {this.setState({eventList: [...this.state.eventList, ]})})
  
  
  

  render() {
    return (
      <div>
        <Register onRegister={this.HandleRegister}/>
        
        
        
      </div>
    );
  }
}
export default Auth;
