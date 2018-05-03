import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: []
    };
  }

  componentDidMount(){
    var clock = new FlipClock($('.your-clock'));
  }
  render() {
    return (
    <div class="content-container">
            <div class="left-image float-right">
                <img src="https://cdn.dribbble.com/users/14374/screenshots/3147608/programer.gif" class="left-image-0"/>
                <pre class="dynamic-content dark"></pre>
            </div>
            <div class="right-content">
                <div class="your-clock">
                </div>
                <div class="inline-block">
            </div>
            </div>
    </div>
    );
  }
}

export default Home;
