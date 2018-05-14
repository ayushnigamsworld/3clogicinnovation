import React, {Component} from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import Cookies from 'universal-cookie';
import {NotificationManager} from 'react-notifications';
import ideaService from "../../services/ideaService";

const cookies = new Cookies();

class SubmitIdea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleIdeaValue: '',
            text: '',
            loggedInUser: this.props.loggedInUser
        }

        this.updateTitleIdeaValue = this.updateTitleIdeaValue.bind(this);
        this.updateDetailIdeaValue = this.updateDetailIdeaValue.bind(this);
        this.submitIdea = this.submitIdea.bind(this);
    }

    updateTitleIdeaValue(evt) {

        this.setState({
             titleIdeaValue: evt.target.value 
        });
    }

    updateDetailIdeaValue(value) {

        this.setState({
            text: value
        });
    }

    submitIdea() {
        console.log("title " + this.state.titleIdeaValue);
        console.log("detail " + this.state.text);
        ideaService.submitIdea(this.state.loggedInUser.userId,
          {title: this.state.titleIdeaValue, detail: this.state.text},
          (res) => {
            console.log(`Response : ${res} and props : ${this.props}`);
            this.props.navTo('MY_IDEAS');
          })
    }

    render() {
        let styleOfQuill = { width: '1000px', height: '350px', marginBottom : '50px' };
        return (
            <div id="content">
            
                <div className="form-group">
                    <label htmlFor="usr">Title:</label>
                    <input type="text" className="form-control" value={this.state.titleIdeaValue} onChange={this.updateTitleIdeaValue} />
                </div>
                <ReactQuill style={styleOfQuill} value={this.state.text} onChange={this.updateDetailIdeaValue} />
                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-10">
                        <button onClick={this.submitIdea} className="btn btn-default">Submit Idea</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubmitIdea;
