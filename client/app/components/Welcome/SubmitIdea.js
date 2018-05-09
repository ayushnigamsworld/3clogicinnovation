import React, { Component } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6

class SubmitIdea extends Component {

    constructor(props){
        super(props);
        this.state = {
            text : 'ss'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        console.log(value);
        this.setState({ text: value })
      }

    render() { 
        return ( 
            <div id="content">
                Hello I am submit screen
                <ReactQuill value={this.state.text}
                  onChange={this.handleChange} />
            </div>
         )
    }
}

export default SubmitIdea;