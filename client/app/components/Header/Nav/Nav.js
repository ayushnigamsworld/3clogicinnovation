import React, {Component} from 'react';

import './Nav.css';

class Nav extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
            </button>
            <a href="index.html" className="navbar-brand nav-logo"><img src="assets/img/logo.png"  alt=""/></a>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item active">
                <a className="nav-link" href="#header-wrap">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  Faq
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#details">
                  Details
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ul className="mobile-menu">
          <li>
            <a className="page-scrool" href="#header-wrap">Home</a>
          </li>
          <li>
            <a className="page-scroll" href="#faq">Faq</a>
          </li>
          <li>
            <a className="page-scroll" href="#details">Details</a>
          </li>
        </ul>

      </nav>
        );
    }
}

export default Nav;
