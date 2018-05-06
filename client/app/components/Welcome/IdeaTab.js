import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import IdeaService from '../../services/ideaService';
import { Modal, Button, OverlayTrigger } from 'react-bootstrap';
import NewIdea from './NewIdea';
const cookies = new Cookies();

class IdeaTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
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
                   // list of idea is in data variable..
                });
            }
        ).catch(err => err);
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
                        <NewIdea/>
                    </div>
                </div>
            </div>
        );
    }
}

export default IdeaTab;