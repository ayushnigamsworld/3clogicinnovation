import React, {Component} from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import Cookies from 'universal-cookie';
import {NotificationManager} from 'react-notifications';

const cookies = new Cookies();

class SubmitIdea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleIdeaValue: '',
            text: ''
        }

        this.updateTitleIdeaValue = this.updateTitleIdeaValue.bind(this);
        this.updatedetailIdeaValue = this.updatedetailIdeaValue.bind(this);
        this.submitIdea = this.submitIdea.bind(this);
    }

    updateTitleIdeaValue(evt) {

        this.setState({
             titleIdeaValue: evt.target.value 
        });
    }

    updatedetailIdeaValue(value) {

        this.setState({
            text: value
        });
    }

    submitIdea() {
        console.log("title " + this.state.titleIdeaValue);
        console.log("detail " + this.state.text);

        fetch('../api/idea', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: cookies.get('user_id'),
                idea: {
                    title: this.state.titleIdeaValue,
                    description : this.state.text
                }
            }),
        }).then(res => {
            
            NotificationManager.success("Remember, Implementation is all we'll see..", 'Idea submission successful');
        }).catch(err => {
            
            NotificationManager.error("Now we know the importance of QA", 'We messed up something.. Try again later..');
        });
    }

    render() {
        let styleOfQuill = { width: '1000px', height: '350px', marginBottom : '50px' };
        return (
            <div id="content">
            
                <div className="form-group">
                    <label htmlFor="usr">Title:</label>
                    <input type="text" className="form-control" value={this.state.titleIdeaValue} onChange={this.updateTitleIdeaValue} />
                </div>
                <ReactQuill style={styleOfQuill} value={this.state.text} onChange={this.updatedetailIdeaValue} />
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
