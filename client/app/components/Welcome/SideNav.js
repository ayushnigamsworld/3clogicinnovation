import React, { Component } from 'react';

class SideNav extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {loggedInUser: props.loggedInUser};
    }

    render() {
        return ( 
            <nav id="sidebar">
                <div className="sidebar-header">
                </div>

                <ul className="list-unstyled components">
                    <p>{this.props.loggedInUser ? this.props.loggedInUser.name: ''}</p>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Idea</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">

                            <li><a hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 'ROLE_ADMIN')} onClick={() => {this.props.currentTab('ALL_IDEAS')}}> All Ideas</a></li>
                            <li><a onClick={() => {this.props.currentTab('SUBMIT_IDEA')}}>Add New Idea</a></li>
                            <li><a onClick={() => {this.props.currentTab('ALL_IDEAS')}}>My Ideas</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
         )
    }
}
 
export default SideNav;
