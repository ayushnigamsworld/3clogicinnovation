import React, { Component } from 'react';

class SideNav extends Component {
    constructor(props){
        super(props);
    }

    render() { 
        return ( 
            <nav id="sidebar">
                <div className="sidebar-header welcome-header">
                    <h3>World of Ideas</h3>
                </div>

                <ul className="list-unstyled components">
                    <p><label class="ccc">#3c</label><label class="innovation">InNovatiON</label></p>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Ideas</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><a onClick={() => {this.props.currentTab('ALL_IDEAS')}}> All Ideas</a></li>
                            <li><a onClick={() => {this.props.currentTab('SUBMIT_IDEA')}}>Add New Idea</a></li>
                            <li><a onClick={() => {this.props.currentTab('ALL_IDEAS')}}>My Ideas</a></li>

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
