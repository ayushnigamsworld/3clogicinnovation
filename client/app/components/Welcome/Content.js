import React, { Component } from 'react';
import IdeaCard from './IdeaCard';

class Ideas extends Component {

    constructor(props){
        super(props);
    }

    render() {
        console.log("Ideas received from props "+ this.props.ideas);
        return (
            <div id="content" style={{marginTop: '10px', width: '500px'}}>
                {
                    this.props.ideas.map(idea =>  <IdeaCard myIdea={idea}/>)
                }
            </div>
         )
    }
}
 
export default Ideas;
