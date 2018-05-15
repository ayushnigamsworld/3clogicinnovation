import React, { Component } from 'react';
import IdeaCard from './IdeaCard';

class Ideas extends Component {

    constructor(props){
        super(props);
    }

    render() {
        console.log("Ideas received from props "+ this.props.ideas);
        return (
            <div id="content" style={{width:  '-webkit-fill-available'}}>
                {
                    this.props.ideas.map((idea, index) =>  <IdeaCard index={index} key={idea._id} myIdea={idea} navTo={this.props.navTo}/>)
                }
            </div>
         )
    }
}
 
export default Ideas;
