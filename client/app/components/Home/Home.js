import React, { Component } from 'react';

import MyFlipClock from './MyFlipClock';
import WhyParticipate from './WhyParticipate';
import CounterArea from './CounterArea';
import AskQuestion from './AskQuestion';
import Header from '../Header/Header';

class Home extends Component {
  constructor(props) {
    super(props);
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
