import React, { Component } from 'react';

class IdeaCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idea: this.props.myIdea
        }
    }

    archiveIdea(currentObj){
        console.log("Clicked archive idea "+ currentObj.state.idea.title);
        //call service to archive idea by sending id.
    }

    render() {
        console.log("inside ideacard title " + this.state.idea.title);
        return (
            <div>
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {this.state.idea.title}
                            </button>
                            <i hidden class="far fa-check-circle fa-1x"></i>
                            <i onClick={() => { this.archiveIdea(this) }} class="fas fa-trash-alt"></i>
                        </h5>
                    </div>

                    <div aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body" dangerouslySetInnerHTML={{ __html: this.state.idea.description }}>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

export default IdeaCard;
