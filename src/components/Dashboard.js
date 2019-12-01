import React, {Component} from 'react'
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview);

class Dashboard extends Component {
    constructor (){
        super ()

        this.state = {
            officerList: [],
            eventList: []
        }
    }
    
    render(){
        return(
            <div>
                <div>

                
                </div>
            </div>
        )
    }
}


export default Dashboard