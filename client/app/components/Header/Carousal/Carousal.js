import React, { Component } from 'react';

class Carousal extends Component {

    constructor(props){
        super(props);
    }
    
    render() { 
        return ( 
            <div id="main-slide" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#main-slide" data-slide-to="0" className="active"></li>
              <li data-target="#main-slide" data-slide-to="1"></li>
              <li data-target="#main-slide" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 h-80" src="assets/img/slider/slide1.jpg" alt="First slide"/>
                <div className="carousel-caption d-md-block">
                  <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
                  <h1 className="wow fadeInDown heading" data-wow-delay=".4s">Design Thinking Conference</h1>
                  <a href="#" className="fadeInLeft wow btn btn-common btn-lg" data-wow-delay=".6s">Get Ticket</a>
                  <a href="#" className="fadeInRight wow btn btn-border btn-lg" data-wow-delay=".6s">Explore More</a>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="assets/img/slider/slide2.jpg" alt="Second slide"/>
                <div className="carousel-caption d-md-block">
                  <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
                  <h1 className="wow bounceIn heading" data-wow-delay=".7s">22 Amazing Speakers</h1>
                  <a href="#" className="fadeInUp wow btn btn-border btn-lg" data-wow-delay=".8s">Learn More</a>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="assets/img/slider/slide3.jpg" alt="Third slide"/>
                <div className="carousel-caption d-md-block">
                  <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
                  <h1 className="wow fadeInUp heading" data-wow-delay=".6s">Book Your Seat Now!</h1>
                  <a href="#" className="fadeInUp wow btn btn-common btn-lg" data-wow-delay=".8s">Explore</a>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#main-slide" role="button" data-slide="prev">
              <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-left"></i></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#main-slide" role="button" data-slide="next">
              <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-right"></i></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

         )
    }
}
 
export default Carousal;