import React, { Component } from 'react';
import '../App/App.css';

class Header extends Component {
  render() { 
    return ( 
    <header className="navbar-header header-top">
    <nav className="homepage-nav">
        <img src={require('../../../public/assets/img/logo.png')} className='company-logo-small'/>
        <ul className="homepage-nav-links float-right">                    
            <li className="nav-signup">
              <a target="login-modal" className="show-modal show-signup-in-modal button btn-blue">Login</a>
            </li>
        </ul>
        <div className="clear"></div>
    </nav>
    </header>);
  }
}
 
export default Header;