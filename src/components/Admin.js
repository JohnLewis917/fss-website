import React, {Component} from 'react'
import EventItems from './EventItems'



class Admin extends Component {
    constructor(){
        super()
        this.state = {
            officerList: [],
            memberList: [],
            eventList: []
        }
        this.handleDate = this.handleDate.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
        this.handleDesc = this.handleDesc.bind(this);

    }
    handleDate(event) {
        this.setState({ rank: event.target.value });
    }
    handleEvent(event) {
        this.setState({ first_name: event.target.value });
    }
    handleDesc(event) {
        this.setState({ last_name: event.target.value });
    }
    render(){
        return(
            <div>
                <h1 className="event-title">Add Event</h1>
                
                <form className="add-event">
                    <h5>Date</h5>
                    <input className="input-1" name="Date" type="text" size="10"  onChange={this.state.handleDate}></input>
                    <br></br>
                    <h5>Event</h5>
                    <input className="input-2" name="Event" type="text" size="45" onChange={this.state.handleEvent}></input>
                    <br></br>
                    <h5>Description</h5>
                    <textarea className="input-3" name="city" type="text" size="45"  onChange={this.state.handleDesc}></textarea>
                    <br></br>
                    <br></br>
                    <button color="primary" className="submitEvent" type="submit" >Add</button>
                </form>

                {this.state.eventList.map(el => 
                (<EventItems key={el.id} eventListObj={el} deleteEvent={this.deleteEvent} />))}

            </div>
        )
    }
}
export default Admin