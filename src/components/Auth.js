import React, { Component } from 'react';
import axios from 'axios';
import AddMember from './AddMember';
import Login from './Login';



class Auth extends Component {
  constructor() {
    super();
    
  }
  handleAddMember(event) {
    axios.post("/api/People", event);
  }
    // .then(res => {this.setState({eventList: [...this.state.eventList, ]})})
  
  
  

  render() {
    return (
      <div>
        <AddMember onAddMember={this.handleAddMember}/>
        
        
        
      </div>
    );
  }
}
export default Auth;
