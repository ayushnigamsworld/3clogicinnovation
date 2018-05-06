import React, { Component } from 'react';

import MyFlipClock from './MyFlipClock';
import WhyParticipate from './WhyParticipate';
import CounterArea from './CounterArea';
import AskQuestion from './AskQuestion';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    <div>
      <MyFlipClock/>
      <WhyParticipate/>
      <AskQuestion/>
      <CounterArea/>
    </div>
    );
  }
}

export default Home;
