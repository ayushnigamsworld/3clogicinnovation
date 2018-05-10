import React, { Component } from 'react';

class IdeaCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idea: this.props.myIdea
        }
    }

    render() {
        console.log("inside ideacard title "+ this.state.idea.idea.title);
        return (<div className="card">
            <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {this.state.idea.idea.title}
                    </button>
                </h5>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    {this.state.idea.idea.description}
                </div>
            </div>
        </div>
        )
    }
}

export default IdeaCard;