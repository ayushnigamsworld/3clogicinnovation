import React, {Component} from 'react';
import ideaService from "../../services/ideaService";

class IdeaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: this.props.myIdea,
      ideaArchived : false
    }
    this.archiveIdea = this.archiveIdea.bind(this);
  }

  archiveIdea() {
    //console.log("Clicked archive idea " + this.state.idea._id);
    
    ideaService.setArchiveIdea(this.state.idea._id);
    this.setState({
      ideaArchived: true
    });
    //call service to archive idea by sending id.
  }

  render() {
    return (
      <div hidden = {this.state.ideaArchived}>
        <div className="card text-primary mb-auto border-info" style={{maxWith: '18rem'}}>
          <div className="card-header">
            <div className="row">
              <div className="col-md-8" style={{position: 'relative'}}>
                <h4>#!dea {this.props.index + 1}</h4>
              </div>
              <div className="col-md-4">
                <i className="fas fa-archive" style={{float: 'right'}} onClick={this.archiveIdea} ></i>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">{this.state.idea.title}</h3>
            <div className="card-text" style={{color: 'white'}}>
              <div dangerouslySetInnerHTML={{__html: this.state.idea.description}}></div>
            </div>
          </div>
        </div>
        <br/>
      </div>
    )
  }
}

export default IdeaCard;
