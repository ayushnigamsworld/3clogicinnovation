import React, { Component } from 'react';
import IdeaCard from './IdeaCard';

class Ideas extends Component {

    constructor(props){
        super(props);
        this.state = {
            ideas : this.props.ideas
        }
    }

    render() {
        console.log("Ideas received from props "+ this.state.ideas); 
        return (
            <div id="content" style={{marginTop: '10px', width: '500px'}}>
                {
                    this.state.ideas.map(idea =>  <IdeaCard myIdea={idea}/>)
                }
            </div>
         )
    }
}
 
export default Ideas;
