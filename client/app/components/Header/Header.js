import React, { Component } from 'react';

import Nav from './Nav/Nav';
import Carousal from './Carousal/Carousal';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
    <header id="header-wrap">
      <Nav loggedInUser={this.props.loggedInUser}/>
      <Carousal loggedInUser={this.props.loggedInUser}/>
    </header>
    );
  }
}

export default Header;
