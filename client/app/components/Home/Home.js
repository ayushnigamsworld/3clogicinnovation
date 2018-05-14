import React, { Component } from 'react';

import MyFlipClock from './MyFlipClock';
import WhyParticipate from './WhyParticipate';
import CounterArea from './CounterArea';
import AskQuestion from './AskQuestion';
import Header from '../Header/Header';
import userService from "../../services/userService";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {loggedInUser : null}
  }

  componentWillMount(){
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

  render() {
    return (
      <div>
        <Header loggedInUser={this.state.loggedInUser}/>
        <MyFlipClock />
        <WhyParticipate />
        <AskQuestion />
        <CounterArea />
      </div>
    );
  }
}

export default Home;
