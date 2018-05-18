import React, {Component} from 'react';
import ideaService from "../../services/ideaService";

class IdeaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: this.props.myIdea,
      ideaArchived : false,
      loggedInUser : this.props.loggedInUser
    }
    this.archiveIdea = this.archiveIdea.bind(this);
    this.shortlistIdea = this.shortlistIdea.bind(this);
  }

  archiveIdea() {
    //console.log("Clicked archive idea " + this.state.idea._id);
    
    ideaService.setArchiveIdea(this.props.loggedInUser.userId, this.state.idea._id);
    this.setState({
      ideaArchived: true
    });
    //call service to archive idea by sending id.
  }

  shortlistIdea(){

    ideaService.shortlistIdea(this.props.loggedInUser.userId, this.state.idea._id);
  }

  render() {
    console.log("user received ideacard "+ this.props.loggedInUser);
    return (
      <div hidden = {this.state.ideaArchived}>
        <div className="card text-primary mb-auto border-info" style={{maxWith: '18rem'}}>
          <div className="card-header">
            <div className="row">
              <div className="col-md-11" style={{position: 'relative'}}>
                <h4>#!dea {this.props.index + 1}</h4>
              </div>
              <div hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 'ROLE_ADMIN' && this.state.idea.status !== 'shortlist' )} className="col-md-1">
              <i class="far fa-thumbs-up" onClick={this.shortlistIdea}></i>
              </div>
              <div hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 'ROLE_ADMIN' && this.state.idea.status === 'shortlist' )} className="col-md-1">
                <i className="fas fa-check"></i>
              </div>
              <div className="col-md-1">
                <i className="fas fa-archive" onClick={this.archiveIdea} ></i>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">{this.state.idea.title}</h3>
            <div className="card-text">
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
