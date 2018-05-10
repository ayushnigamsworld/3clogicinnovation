import React, { Component } from 'react';

import './Welcome.css';
import SideNav from './SideNav';
import IdeaCard from './IdeaCard';
import Content from './Content';
import SubmitIdea from './SubmitIdea';
class Welcome extends Component {

    constructor(props){
        super(props);
        this.onNavChange = this.onNavChange.bind(this);

        this.state = {
            currentView : 'ALL_IDEAS',
            ideas : [
                {
                    title: 'My first Idea'
                },
                {
                    title: 'My second Idea'
                },
                {
                    title: 'My third Idea'
                }
            ]
        }
    }

    componentDidMount() {
    }

    onNavChange(movedTo){
        switch(movedTo){
            case 'ALL_IDEAS' : this.setState({currentView: 'ALL_IDEAS'}); break;
            case 'SUBMIT_IDEA' : this.setState({currentView: 'SUBMIT_IDEA'}); break;
            case 'SUBMITTED_IDEAS' : this.setState({currentView: 'SUBMITTED_IDEAS'}); break;
        }
    }

    render() {
        return (
            <div className="wrapper">
            <SideNav currentTab={this.onNavChange.bind(this)}/>
            {(this.state.currentView === 'ALL_IDEAS')? <Content ideas = {this.state.ideas}/> : null }
            {(this.state.currentView === 'SUBMIT_IDEA')? <SubmitIdea/> : null }
            {(this.state.currentView === 'SUBMITTED_IDEAS')? <Content ideas = {this.state.ideas}/> : null }
        </div>
        );
    };
}

export default Welcome;