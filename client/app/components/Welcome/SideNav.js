import React, { Component } from 'react';

class SideNav extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = 
        {
            loggedInUser: props.loggedInUser,
            activeTab : 'RULES'
        };
        this.changeCurrentTab = this.changeCurrentTab.bind(this);
    }

    changeCurrentTab(currentTab) {

        this.setState({
            activeTab : currentTab
        });
    }

    render() {
        return ( 
            <nav id="sidebar">
                <div className="sidebar-header welcome-header">
                  <div className="card bg-dark">
                    <img className="card-img-top"
                         src={this.props.loggedInUser? this.props.loggedInUser.image : ''}
                         alt="Profile Image"
                         style={{alignSelf: 'center', margin: '2px'}}/>
                      <div className="card-body">
                        <h5 className="card-title"  style={{alignSelf: 'center', margin: '2px'}}>{this.props.loggedInUser ? this.props.loggedInUser.name : ''}</h5>
                      </div>
                  </div>
                </div>

                <ul className="list-unstyled components">
                  <b><p><label className="ccc">#3C</label>&nbsp;<label className="innovation">InNovatiON</label></p></b>
                    <li className={(this.state.activeTab == 'IDEAS') ? 'active' : '' } onClick={() => { this.changeCurrentTab('IDEAS') }}>

                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Ideas</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><a hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 'ROLE_ADMIN')} onClick={() => {this.props.currentTab('ALL_IDEAS')}}> All Ideas</a></li>
                            <li><a onClick={() => {this.props.currentTab('SUBMIT_IDEA')}}>Add New Idea</a></li>
                            <li><a onClick={() => {this.props.currentTab('APPROVED_IDEAS')}}>Approved Ideas</a></li>
                            <li><a onClick={() => {this.props.currentTab('MY_IDEAS')}}>My Ideas</a></li>
                        </ul>

                    </li>
                    <li hidden={true}>
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
                    <li className={(this.state.activeTab == 'JUDGES') ? 'active' : '' }>
                        <a onClick={() => { this.props.currentTab('JUDGES'); this.changeCurrentTab('JUDGES')  }} aria-expanded="false">Judges</a>
                    </li>
                    <li className={(this.state.activeTab == 'RULES') ? 'active' : '' }>
                        <a onClick={() => { this.props.currentTab('RULES'); this.changeCurrentTab('RULES') }}  aria-expanded="false">Event Details</a>
                    </li>
                    <li className={(this.state.activeTab == 'RESOURCE_POOL') ? 'active' : '' }>
                        <a onClick={() => { this.props.currentTab('RESOURCE_POOL'); this.changeCurrentTab('RESOURCE_POOL') }}  aria-expanded="false">List of Resources</a>
                    </li>
                    <li><a onClick={() => {this.props.currentTab('MOVE_TO_HOME')}}  aria-expanded="false">Back to home</a></li>
                </ul>
            </nav>
         )
    }
}
 
export default SideNav;
