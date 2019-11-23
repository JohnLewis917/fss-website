import React, {Component} from 'react'

class EventItems extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            
            <div className="container-2">
                <div>
                    <h6>
                        {this.props.eventListObj.date}
                    </h6>
                    <h6>
                        {this.props.eventListObj.event}
                    </h6>
                    <h6>
                        {this.props.eventListObj.description}
                    </h6>
                         
                </div>
                    
            </div>
            
        )
    }
}
export default EventItems
