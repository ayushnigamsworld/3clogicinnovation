import React, { Component } from 'react';

class CounterArea extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <section className="counter-section section-padding" id='details'>
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-lg-4 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="0.3s">
                        <div className="icon"><i className="lni-map"></i></div>
                        <p>Logix Cyber Park</p>
                        <span>Noida 62, UP</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="0.6s">
                        <div className="icon"><i className="lni-timer"></i></div>
                        <p>May 31, 2018</p>
                        <span>24 Hours</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="1.2s">
                        <div className="icon"><i className="lni-coffee-cup"></i></div>
                        <p>Food & Refreshment</p>
                        <span>Just eat and code</span>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </>
        );
    }
}

export default CounterArea;
