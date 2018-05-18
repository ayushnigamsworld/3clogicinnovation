import React, { Component } from 'react';
import IdeaCard from './IdeaCard';

class Ideas extends Component {

    constructor(props){
        super(props);
        this.state = {
            loggedInUser: this.props.loggedInUser
        };
    }

    render() {
        console.log("Ideas received from props "+ this.props.ideas);
        console.log("user received props"+ this.props.loggedInUser);
        return (
            <div id="content" style={{width:  '-webkit-fill-available'}}>
                {
                    this.props.ideas.map((idea, index) =>  <IdeaCard loggedInUser={this.state.loggedInUser} index={index} key={idea._id} myIdea={idea} navTo={this.props.navTo}/>)
                }
            </div>
         )
    }
}
 
export default Ideas;
