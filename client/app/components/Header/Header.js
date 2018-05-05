import React, { Component } from 'react';
import GLoginBtn from '../App/GLogin/GLoginBtn';

import '../App/App.css';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <header className="navbar-header header-top">
        <nav className="homepage-nav">
          <img src={require('../../../public/assets/img/logo.png')} className='company-logo-small' />
          <ul className="homepage-nav-links float-right">
            <li className="nav-signup">
              <GLoginBtn target="login-modal" />
            </li>
          </ul>
          <div className="clear"></div>
        </nav>
      </header>
    );
  }
}

export default Header;