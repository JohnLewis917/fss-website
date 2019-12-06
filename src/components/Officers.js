import React, {Component} from 'react'
// import {connect} from 'react-redux'


class Officers extends Component{
    constructor(){
        super()
        this.state = {
            image: "",
            
        }
    }

    render(){
        return(

            <div>
                <img src={this.state.image}/>
                <input value={this.state.image} onChange={(event) => this.setState({image:event.target.value})}></input>
                <input first_name="text" size="35" type="text"></input>
                <input last_name="text" size="35" type="text"></input>
                
            </div>
        )
    }
}
export default Officers 