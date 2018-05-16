import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import {withRouter} from 'react-router';

import './Welcome.css';
import SideNav from './SideNav';
import Content from './Content';
import SubmitIdea from './SubmitIdea';
import Judges from './Judges';
import Rules from './Rules';
import Resources from './Resources';

import ideaService from '../../services/ideaService';
import userService from '../../services/userService';

const cookies = new Cookies();

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.onNavChange = this.onNavChange.bind(this);
    this.getAllIdeas = this.getAllIdeas.bind(this);
    this.getMyIdeas = this.getMyIdeas.bind(this);
    this.getApprovedIdeas = this.getApprovedIdeas.bind(this);
    this.moveToHome = this.moveToHome.bind(this);
    this.state = {
      currentView: 'MY_IDEAS',
      loggedInUser: null,
      ideas: []
    }
  }

  getAllIdeas() {
    ideaService.getAllIdeas((ideas) => {
      this.setState(state => ({ideas: ideas}));
    });
  }

  getMyIdeas() {
    ideaService.getMyIdeas(this.state.loggedInUser.userId, (ideas) => {
      this.setState(state => ({ideas: ideas}));
    });
  }

  getApprovedIdeas() {
    ideaService.getApprovedIdeas((ideas) => {
      this.setState(state => ({ideas: ideas}));
    })
  }

  componentWillMount() {
    this.userId = cookies.get('user_id');
    console.log(`UserId : ${this.userId}`);

    if (!this.userId) {
      this.props.history.push('/');
      return;
    }
    userService
      .fetchCurrentUser(this.userId)
      .then((user) => {
        console.log("user details are : " + user);
        this.setState(state => ({loggedInUser: user}));
      });
  }

  moveToHome(){
    this.props.history.push('/');
  }

  componentDidMount() {
    this.onNavChange('RULES');
  }

  onNavChange(movedTo) {
    switch (movedTo) {
      case 'ALL_IDEAS':
        this.getAllIdeas();
        this.setState({currentView: 'ALL_IDEAS'});
        break;
      case 'MY_IDEAS':
        this.getMyIdeas();
        this.setState({currentView: 'MY_IDEAS'});
        break;
      case 'SUBMIT_IDEA':
        this.setState({currentView: 'SUBMIT_IDEA'});
        break;
      case 'APPROVED_IDEAS':
        this.getApprovedIdeas();
        this.setState({currentView: 'APPROVED_IDEAS'});
        break;
      case 'JUDGES':
        this.setState({currentView: 'JUDGES'});
        break;
      case 'RULES':
        this.setState({currentView: 'RULES'});
        break;
      case 'MOVE_TO_HOME': this.moveToHome(); break;
    }
  }

  render() {

    return (
      <div className="wrapper">
        <SideNav currentTab={this.onNavChange.bind(this)} loggedInUser={this.state.loggedInUser}/>
        {(this.state.currentView === 'ALL_IDEAS') ? <Content ideas={this.state.ideas}/> : null}
        {(this.state.currentView === 'SUBMIT_IDEA') ? <SubmitIdea loggedInUser={this.state.loggedInUser} navTo={this.onNavChange}/> : null}
        {(this.state.currentView === 'APPROVED_IDEAS') ?
          <Content loggedInUser={this.state.loggedInUser} ideas={this.state.ideas}/> : null}
        {(this.state.currentView === 'MY_IDEAS') ?
          <Content loggedInUser={this.state.loggedInUser} ideas={this.state.ideas} navTo={this.onNavChange}/> : null}
        {(this.state.currentView === 'JUDGES') ? <Judges ideas={this.state.ideas}/> : null}
        {(this.state.currentView === 'RULES') ? <Rules ideas={this.state.ideas}/> : null}
      </div>
    );
  };
}

export default Welcome;
