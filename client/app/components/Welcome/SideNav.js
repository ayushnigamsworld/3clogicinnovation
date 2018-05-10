import React, { Component } from 'react';

class SideNav extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render() { 
        return ( 
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>Dummy Heading</p>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Idea</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><a onClick={() => {this.props.currentTab('ALL_IDEAS')}}>Ideas</a></li>
                            <li><a onClick={() => {this.props.currentTab('SUBMIT_IDEA')}}>Add New Idea</a></li>
                            <li><a href="#">Submitted Ideas</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
         )
    }
}
 
export default SideNav;