import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
        endDate : "May 31, 2018 02:15:00"
    };
  }

  componentDidMount(){
    var date = new Date(this.state.endDate); //Month Days, Year HH:MM:SS
    var now = new Date();
    var diff = (date.getTime() / 1000) - (now.getTime() / 1000);

    var clock = $('.your-clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });
  }
  
  render() {
    return (
    <div>
        <div className="content-container">
                <div className="left-image float-right">
                    <img src="https://cdn.dribbble.com/users/14374/screenshots/3147608/programer.gif" className="left-image-0"/>
                    <pre className="dynamic-content dark"></pre>
                </div>
                <div className="right-content">
                    <div className="your-clock">
                    </div>
                    <div className="inline-block">
                    </div>
                </div>
        </div>
    </div>
    );
  }
}

export default Home;
