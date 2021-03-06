import React, { Component } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

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
        console.log("title " + this.state.titleIdeaValue);
        console.log("detail " + this.state.detailIdeaValue);

        fetch('http://localhost:8082/api/idea', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: cookies.get('userId'),
                idea: {
                    title: this.state.titleIdeaValue,
                    description: this.state.detailIdeaValue
                }
            }),
        }).then(res => {
            console.log("Succesfully send");
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
            </div>
        );
    }

}
export default NewIdea;