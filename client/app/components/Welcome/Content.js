import React, { Component } from 'react';
import IdeaCard from './IdeaCard';

class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            ideas : this.props.ideas
        }
    }

    render() { 
        return ( 
            <div id="content">
                {
                    this.state.ideas.map(idea => <IdeaCard myIdea={idea}/>)}
            </div>
         )
    }
}
 
export default Content;