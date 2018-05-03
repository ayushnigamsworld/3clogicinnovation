import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: []
    };
  }

  render() {
    return (
      <>
        I am home page!
      </>
    );
  }
}

export default Home;
