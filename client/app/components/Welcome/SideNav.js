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

                <div className="sidebar-header welcome-header">
                  <b><p><label className="ccc">#3C</label>&nbsp;<label className="innovation">InNovatiON</label></p></b>
                </div>

                <ul className="list-unstyled components">
                    <h3>{this.props.loggedInUser ? this.props.loggedInUser.name: ''}</h3>

                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Ideas</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">

                            <li><a hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 'ROLE_ADMIN')} onClick={() => {this.props.currentTab('ALL_IDEAS')}}> All Ideas</a></li>
                            <li><a onClick={() => {this.props.currentTab('SUBMIT_IDEA')}}>Add New Idea</a></li>
                            <li><a onClick={() => {this.props.currentTab('APPROVED_IDEAS')}}>Approved Ideas</a></li>
                            <li><a onClick={() => {this.props.currentTab('MY_IDEAS')}}>My Ideas</a></li>

                        </ul>
                    </li>
                    <li>
                        <a onClick={() => {this.props.currentTab('TEAMS')}} href="#teamSubmenu" data-toggle="collapse" aria-expanded="false">Teams</a>
                        <ul className="collapse list-unstyled" id="teamSubmenu">
                            <li><a onClick={() => {this.props.currentTab('TEAM_1')}}> Team 1</a></li>
                            <li><a onClick={() => {this.props.currentTab('TEAM_2')}}>Team 2</a></li>
                            <li><a onClick={() => {this.props.currentTab('TEAM_3')}}>Team 3</a></li>
                            <li><a onClick={() => {this.props.currentTab('TEAM_4')}}>Team 4</a></li>
                            <li><a onClick={() => {this.props.currentTab('TEAM_5')}}>Team 5</a></li>
                            <li><a onClick={() => {this.props.currentTab('TEAM_6')}}>Team 6</a></li>
                            <li><a onClick={() => {this.props.currentTab('TEAM_7')}}>Team 7</a></li>
                        </ul>
                    </li>
                    <li><a onClick={() => {this.props.currentTab('JUDGES')}} aria-expanded="false">Judges</a></li>
                    <li><a onClick={() => {this.props.currentTab('RULES')}}  aria-expanded="false">Rules</a></li>
                </ul>
            </nav>
         )
    }
}
 
export default SideNav;
