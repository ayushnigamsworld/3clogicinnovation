import React, { Component } from 'react';

import './Welcome.css';
import SideNav from './SideNav';
import IdeaCard from './IdeaCard';
import Content from './Content';
import SubmitIdea from './SubmitIdea';
import IdeaService from '../../services/ideaService';

const apiUrl = "../api/allIdeas";

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.onNavChange = this.onNavChange.bind(this);

        this.state = {
            currentView: 'ALL_IDEAS',
            ideas: [
            {
                idea: {
                    title: 'My first Idea',
                    description : 'scscsccdcdc'
                },
                _id: "5af3103cf36d2856a8ee992f",
                user: "212212121221"
            },
            {
                idea: {
                    title: 'My second Idea',
                    description : 'scscsccdcdc'
                },
                _id: "5af3103cf36d2856a8ee992f",
                user: "212212121221"
                
            },
            {
                idea: {
                    title: 'My third Idea',
                    description : 'scscsccdcdc'
                },
                _id: "5af3103cf36d2856a8ee992f",
                user: "212212121221"
            }
        ]
        }
    }

    componentDidMount() {

        // let ndata = [
        //     {
        //         idea: {
        //             title: 'My new www first Idea',
        //             description : 'scscsccdcdc'
        //         },
        //         _id: "5af3103cf36d2856a8ee992f",
        //         user: "212212121221"
        //     },
        //     {
        //         idea: {
        //             title: 'My second Idea',
        //             description : 'scscsccdcdc'
        //         },
        //         _id: "5af3103cf36d2856a8ee992f",
        //         user: "212212121221"
                
        //     }
        // ];


        // this.setState({
        //     ideas : ndata
        // });

        // let ideaService = new IdeaService();
        // let currentObj = this;

        // fetch('../api/allIdeas', {
        //     method: 'GET'

        // }).then(function (response) {

        //     response.json().then(function (data) {
        //         console.log("Ideas received from service " + data[0]["idea"]["title"]);
        //         currentObj.setState({
        //             ideas: data
        //         });
        //     });
        // });

        // this.setReceivedIdeas(ndata);

        // ideaService.getAllIdeas( function(allIdeas) {

        //     console.log("Ideas received from service "+ allIdeas[0]["idea"]["title"]);
        //     currentObj.setState({
        //         ideas : allIdeas
        //     });
        // });

        setTimeout(() => {
            axios.get(apiUrl)
              .then(ideas => {
                
                console.log("Ideas from server "+ ideas.data);  
                
                this.setState({
                  ideas : [...ideas.data]
                });

              })
              .catch(err => console.log(err));
        }, 2000);
    }

    onNavChange(movedTo) {
        switch (movedTo) {
            case 'ALL_IDEAS': this.setState({ currentView: 'ALL_IDEAS' }); break;
            case 'SUBMIT_IDEA': this.setState({ currentView: 'SUBMIT_IDEA' }); break;
            case 'SUBMITTED_IDEAS': this.setState({ currentView: 'SUBMITTED_IDEAS' }); break;
        }
    }

    render() {

        return (
            <div className="wrapper">
                <SideNav currentTab={this.onNavChange.bind(this)} />
                {(this.state.currentView === 'ALL_IDEAS') ? <Content ideas={this.state.ideas} /> : null}
                {(this.state.currentView === 'SUBMIT_IDEA') ? <SubmitIdea /> : null}
                {(this.state.currentView === 'SUBMITTED_IDEAS') ? <Content ideas={this.state.ideas} /> : null}
            </div>
        );
    };
}

export default Welcome;