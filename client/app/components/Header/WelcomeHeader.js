import React,{ Component } from 'react';

import '../App/App.css';

class WelcomeHeader extends Component {
  render() { 
    
    return ( 
    
    <header className="header">
        <nav className="navigation">
            <a href="https://www.3clogic.com" className="logo logo-h-terminal no-underline float-left track-header-logo"></a>
                <ul className="nav-bar right-nav-bar no-padding float-right tablet-hide">
                    <li id="user-name" className="nav-bar-menu tablet-hide">
                        <a className="track-header-profile-box" href="https://www.hackerearth.com/@anigam">
                            <img src="https://he-s3.s3.amazonaws.com/media/avatars/anigam/resized/30/photo.jpg" alt="anigam" width="30"
                                height="30" onerror="if(typeof handle_avatar_error=='function'){handle_avatar_error(this);}" />
                        </a>
                    </li>
                    <li id="hacker-dd-icon" expand="hacker-box" className="nav-bar-menu nav-menu">
                        <a>
                            <div className="caret-icon">
                                <i className="fa fa-caret-down"></i>
                            </div>
                        </a>
                    </li>
                </ul>
        </nav>
    </header>
    );
  }
}
 
export default WelcomeHeader;