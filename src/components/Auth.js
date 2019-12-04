import React, { Component } from 'react';
import axios from 'axios';
import AddMember from './AddMember';
import Login from './Login';





class Auth extends Component {
  constructor(props) {
    super(props);
    
  }
  handleAddMember(event) {
    axios.post("/auth/register", event).then(res => {
      const newMemberList = [...this.props.memberList, res.data[0]]
      console.log(res.data[0])
      this.setState({
        memberList: newMemberList 
     })
   })
    
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
