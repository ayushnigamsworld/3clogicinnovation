import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import IdeaService from '../../services/ideaService';
import { Modal } from 'react-bootstrap';
const cookies = new Cookies();

class IdeaTab extends Component {

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

    componentDidMount() {
        let ideaService = new IdeaService();
        let existingIdeas = ideaService.getIdea(cookies.get('userId'));
        existingIdeas.then(
            function (response) {

                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                response.json().then(function (data) {

                });
            }
        ).catch(err => err);
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

    handleClose() {
        this.setState({ show: false });
      }
    
    handleShow() {
        this.setState({ show: true });
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

            <div id="overview" class="inner-panel">
                <h2 class="regular dark weight-600 caps inline-block float-left medium-margin-right">
                    Idea Submission
                    </h2>
                <div class="section-line">
                    <span></span>
                </div>
                <div class="clear"></div>

                <div class="content dark standard-margin-bottom">
                    <div class="content">

                       <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Large Modal</button> 
                        <div class="modal fade" id="myModal" role="dialog">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Modal Header</h4>
                                    </div>
                                    <div class="modal-body">
                                        <p>This is a large modal.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                </div>
            </div>
        );
    }
}

export default IdeaTab;