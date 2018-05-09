import React, { Component } from 'react';

import MyFlipClock from './MyFlipClock';
import WhyParticipate from './WhyParticipate';
import CounterArea from './CounterArea';
import AskQuestion from './AskQuestion';
import Cookies from 'universal-cookie';
import Header from '../Header/Header';

const cookies = new Cookies();

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    if (cookies.get('userId') != undefined && cookies.get('userId') != null) {
      console.log("User is logged in.. please redirect ...");
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <MyFlipClock />
        <WhyParticipate />
        <AskQuestion />
        <CounterArea />
      </div>
    );
  }
}

export default Home;
