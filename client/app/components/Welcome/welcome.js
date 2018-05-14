import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import './Welcome.css';
import SideNav from './SideNav';
import IdeaCard from './IdeaCard';
import Content from './Content';
import SubmitIdea from './SubmitIdea';

import ideaService from '../../services/ideaService';
import userService from '../../services/userService';

const apiUrl = "../api/allIdeas";

const cookies = new Cookies();

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.onNavChange = this.onNavChange.bind(this);
        this.getAllIdeas = this.getAllIdeas.bind(this);
        this.getMyIdeas = this.getMyIdeas.bind(this);
        this.getSubmittedIdeas = this.getSubmittedIdeas.bind(this);

        this.state = {
            currentView: 'MY_IDEAS',
            loggedInUser: null,
            ideas: []
        }
    }

    getAllIdeas(){
      ideaService.getAllIdeas((ideas) => {
        this.setState(() => {ideas});
      });
    }

    getMyIdeas(){
      ideaService.getMyIdeas(this.props.loggedInUser, (ideas) => {
        this.setState(() => {ideas});
      });
    }

    getSubmittedIdeas(){
        ideaService.getApprovedIdeas((ideas) => {
          this.setState(() => {ideas});
        })
    }

    componentWillMount(){
      this.userId =cookies.get('user_id');
      console.log(`UserId : ${this.userId}`);

      if(!this.userId) {
        this.props.history.push('/');
        return;
      }
      userService
        .fetchCurrentUser(this.userId)
        .then((user) => {
          console.log("user details are : "+user);
          this.setState(state => ({loggedInUser: user}));
        });
    }

    componentDidMount() {

    }

    onNavChange(movedTo) {
        switch (movedTo) {
            case 'ALL_IDEAS': this.setState({ currentView: 'ALL_IDEAS' });
            getAllIdeas();
            break;
            case 'MY_IDEAS': this.setState({ currentView: 'MY_IDEAS' });
            getMyIdeas();
            break;
            case 'SUBMIT_IDEA': this.setState({ currentView: 'SUBMIT_IDEA' }); break;
            case 'SUBMITTED_IDEAS': this.setState({ currentView: 'SUBMITTED_IDEAS' });
            getSubmittedIdeas();
            break;
        }
    }

    render() {

        return (
            <div className="wrapper">
                <SideNav currentTab={this.onNavChange.bind(this)} loggedInUser={this.state.loggedInUser} />
                {(this.state.currentView === 'ALL_IDEAS') ? <Content ideas={this.state.ideas} /> : null}
                {(this.state.currentView === 'SUBMIT_IDEA') ? <SubmitIdea /> : null}
                {(this.state.currentView === 'SUBMITTED_IDEAS') ? <Content loggedInUser={this.state.loggedInUser} ideas={this.state.ideas} /> : null}
                {(this.state.currentView === 'MY_IDEAS') ? <Content loggedInUser={this.state.loggedInUser} ideas={this.state.ideas} /> : null}
            </div>
        );
    };
}

export default Welcome;
