import React, { Component } from 'react';

import GLoginBtn from './GLoginBtn';
import './Carousal.css';
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
                <img className="d-block w-100 h-80" src="https://s3.amazonaws.com/3c-hackathon/slider/slide1.jpg" alt="First slide"/>
                <div className="carousel-caption d-md-block">
                <h1 className="wow fadeInDown heading " data-wow-delay=".4s"><label class="ccc">3C Logic</label> <label class="innovation">inNovatiON</label></h1>
                <p className="fadeInUp wow carousal-quote" data-wow-delay=".6s">"What good is an idea if it remains an idea? Try. Experiment. Iterate. Fail. Try again. Change the world."</p>
                  <GLoginBtn/>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://s3.amazonaws.com/3c-hackathon/slider/slide2.jpg" alt="Second slide"/>
                <div className="carousel-caption d-md-block">
                  <h1 className="wow bounceIn heading " data-wow-delay=".7s"><label class="ccc">3C Logic</label> <label class="innovation">inNovatiON</label></h1>
                  <p className="fadeInUp wow carousal-quote" data-wow-delay=".6s">"It always seems impossible until it's done."</p>
                  <GLoginBtn/>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://s3.amazonaws.com/3c-hackathon/slider/slide3.jpg" alt="Third slide"/>
                <div className="carousel-caption d-md-block">
                  <h1 className="wow fadeInUp heading  " data-wow-delay=".6s"><label class="ccc">3C Logic</label> <label class="innovation">inNovatiON</label></h1>
                  <p className="fadeInUp wow carousal-quote" data-wow-delay=".6s">"Innovation distinguishes between a leader and a follower."</p>
                  <GLoginBtn/>
                </div>
              </div>

               <div className="carousel-item">
                  <img className="d-block w-100" src="https://s3.amazonaws.com/3c-hackathon/slider/slide1.jpg" alt="Third slide"/>
                  <div className="carousel-caption d-md-block">
                    <h1 className="wow fadeInUp heading  " data-wow-delay=".6s"><label class="ccc">3C Logic</label> <label class="innovation">inNovatiON</label></h1>
                    <p className="fadeInUp wow carousal-quote" data-wow-delay=".6s">"There’s a way to do it better—find it."</p>
                    <GLoginBtn/>
                  </div>
               </div>
               <div className="carousel-item">
                  <img className="d-block w-100" src="https://s3.amazonaws.com/3c-hackathon/slider/slide2.jpg" alt="Third slide"/>
                  <div className="carousel-caption d-md-block">
                     <h1 className="wow fadeInUp heading  " data-wow-delay=".6s"><label class="ccc">3C Logic</label> <label class="innovation">inNovatiON</label></h1>
                     <p className="fadeInUp wow carousal-quote" data-wow-delay=".6s">"Innovation only survives when people believe in their own ideas."</p>
                     <GLoginBtn/>
                   </div>
               </div>
               <div className="carousel-item">
                 <img className="d-block w-100" src="https://s3.amazonaws.com/3c-hackathon/slider/slide3.jpg" alt="Third slide"/>
                 <div className="carousel-caption d-md-block">
                      <h1 className="wow fadeInUp heading  " data-wow-delay=".6s"><label class="ccc">3C Logic</label> <label class="innovation">inNovatiON</label></h1>
                      <p className="fadeInUp wow carousal-quote" data-wow-delay=".6s">"The heart and soul of the company is creativity and innovation."</p>
                      <GLoginBtn loggedInUser={this.props.loggedInUser}/>
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
