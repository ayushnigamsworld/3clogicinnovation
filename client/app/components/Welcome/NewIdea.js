import React, { Component } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import {NotificationContainer, NotificationManager} from 'react-notifications';

class NewIdea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleIdeaValue: '',
            detailIdeaValue: ''
        };
        this.updateTitleIdeaValue = this.updateTitleIdeaValue.bind(this);
        this.updatedetailIdeaValue = this.updatedetailIdeaValue.bind(this);
        this.submitIdea = this.submitIdea.bind(this);
    }

    updateTitleIdeaValue(evt) {

        this.setState({
            titleIdeaValue: evt.target.value
        });
    }

    updatedetailIdeaValue(evt) {

        this.setState({
            detailIdeaValue: evt.target.value
        });
    }

    submitIdea() {

        let inputIdeaTitle = this.state.titleIdeaValue;
        let inputIdeaDetail = this.state.detailIdeaValue;
        if(inputIdeaTitle == null || inputIdeaTitle.length == 0 || inputIdeaDetail == null || inputIdeaDetail.length == 0){
            NotificationManager.error('No, please play fair. Both title and description needed.', 'Missing Idea details.. ');
            return;
        }

        fetch('../api/userDetails/exists/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: cookies.get('userId'),
                idea: {
                    title: inputIdeaTitle,
                    description: inputIdeaDetail
                }
            }),
        }).then(function (response) {

            if (response.status == 200) {
                NotificationManager.success('You have successfully added the idea', 'Good Luck !!');
                
            }else {
                NotificationManager.error('Some error occured. You know whom to contact.', 'Click me to do nothing!', 5000, () => {
                    alert('callback');
                });
            }
        }).catch(err => err);
    }


    render() {

        return (
            <div>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="text" data-length="10" value={this.state.titleIdeaValue} onChange={this.updateTitleIdeaValue} />
                                <label htmlFor="email">Idea Title</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <textarea class="materialize-textarea" value={this.state.detailIdeaValue} onChange={this.updatedetailIdeaValue}></textarea>
                                <label htmlFor="textarea1">Idea in detail.</label>
                            </div>
                        </div>
                    </form>
                </div>

                <button onClick={this.submitIdea} class="btn waves-effect waves-light" name="action">Submit
                            <i class="material-icons right">-></i>
                </button>
                <NotificationContainer/>
            </div>
        );
    }

}
export default NewIdea;