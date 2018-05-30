import React, { Component } from 'react';

export default class MyFlipClock extends Component {
    constructor(props){
        super(props);
        this.startAt = '2018/05/31 12:00:00';
    }

    componentDidMount(){
      jQuery('#clock').countdown(this.startAt,function(event){
        var $this=jQuery(this).html(event.strftime(''
          +'<div class="time-entry days"><span>%-D</span> Days</div> '
          +'<div class="time-entry hours"><span>%H</span> Hours</div> '
          +'<div class="time-entry minutes"><span>%M</span> Minutes</div> '
          +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
      });

    }

    render(){
        return (
        <>
        <section className="countdown-timer section-padding">
        <div className="container">
            <div className="row text-center">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="heading-count">
                <h2 className="wow fadeInDown" data-wow-delay="0.2s">Event Will Start In</h2>
                </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="row time-countdown justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                <div id="clock" className="time-count"></div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
        );
    }
}
