import React, { Component } from 'react';

class WhyParticipate extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <section id="services" className="services section-padding">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-title-header text-center">
                    <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Why Should I Participate?</h1>
                  </div>
                </div>
              </div>

              <div className="row">
                 <div className="col-12">
                                <div class="div-text-center">
                                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    While there are so many reasons to participate i am just adding few of them. For sure you will have a great great time.
                                  </p>
                                </div>
                              </div>
                            </div>

              <div className="row services-wrapper">
                <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
                  <div className="services-item wow fadeInDown" data-wow-delay="0.2s">
                    <div className="icon">
                      <i className="lni-heart"></i>
                    </div>
                    <div className="services-content">
                      <h3><a href="#">Get Inspired</a></h3>
                      <p>
                        Get inspired with lots of new ideas. Use your skills, creativity and awesomeness to help solve some of the toughest challenges facing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
                  <div className="services-item wow fadeInDown" data-wow-delay="0.4s">
                    <div className="icon">
                      <i className="lni-gallery"></i>
                    </div>
                    <div className="services-content">
                      <h3><a href="#">Work with people you admire</a></h3>
                      <p>Connect with other passionate developers and grow as a developer, make friends and have fun.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
                  <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
                    <div className="icon">0
                      <i className="lni-envelope"></i>
                    </div>
                    <div className="services-content">
                      <h3><a href="#">Show Off your talent</a></h3>
                      <p>Demonstrate your skills, confidence and ideas. This is going to be a session with full of learning</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
                  <div className="services-item wow fadeInDown" data-wow-delay="0.8s">
                    <div className="icon">
                      <i className="lni-cup"></i>
                    </div>
                    <div className="services-content">
                      <h3><a href="#">Introduce new ways of doing</a></h3>
                      <p>Push yourself, this is the chance to build a project you’ve had in your back pocket for a long time.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
                  <div className="services-item wow fadeInDown" data-wow-delay="1s">
                    <div className="icon">
                      <i className="lni-user"></i>
                    </div>
                    <div className="services-content">
                      <h3><a href="#">Full Night Event</a></h3>
                      <p>Get ready for long, tiring yet amazing 24 hours battle of ideas.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
                  <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
                    <div className="icon">
                      <i className="lni-bubble"></i>
                    </div>
                    <div className="services-content">
                      <h3><a href="#">Free Swags</a></h3>
                      <p>T-shirts, Food, Music, Prizes, Fun.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default WhyParticipate;
