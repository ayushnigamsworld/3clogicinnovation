import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import './Welcome.css';
import SideNav from './SideNav';
import IdeaCard from './IdeaCard';
import Content from './Content';
import SubmitIdea from './SubmitIdea';

import IdeaService from '../../services/ideaService';
import userService from '../../services/userService';

const apiUrl = "../api/allIdeas";

const cookies = new Cookies();

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.onNavChange = this.onNavChange.bind(this);

        this.state = {
            currentView: 'ALL_IDEAS',
            loggedInUser: null,
            ideas: [
            {
                idea: {
                    title: 'My first Idea',
                    description : 'scscsccdcdc'
                },
                _id: "5af3103cf36d2856a8ee992f",
                user: "212212121221"
            },
            {
                idea: {
                    title: 'My second Idea',
                    description : 'scscsccdcdc'
                },
                _id: "5af3103cf36d2856a8ee992f",
                user: "212212121221"
                
            },
            {
                idea: {
                    title: 'My third Idea',
                    description : 'scscsccdcdc'
                },
                _id: "5af3103cf36d2856a8ee992f",
                user: "212212121221"
            }
        ]
        }
    }

    componentWillMount(){
      this.userId =cookies.get('user_id');
      console.log(`UserId : ${this.userId}`);

      if(!this.userId) {
        this.props.history.push('/');
        return;
      }
      userService
        .fetchCurrentUser(this.userId)
        .then((user) => {
          console.log("user details are : "+user);
          this.setState(state => ({loggedInUser: user}));
        });
    }

    componentDidMount() {


        // setTimeout(() => {
        //     axios.get(apiUrl)
        //       .then(ideas => {
        //
        //         console.log("Ideas from server "+ ideas.data);
        //
        //         this.setState({
        //           ideas : [...ideas.data]
        //         });
        //
        //       })
        //       .catch(err => console.log(err));
        // }, 2000);
    }

    onNavChange(movedTo) {
        switch (movedTo) {
            case 'ALL_IDEAS': this.setState({ currentView: 'ALL_IDEAS' }); break;
            case 'SUBMIT_IDEA': this.setState({ currentView: 'SUBMIT_IDEA' }); break;
            case 'SUBMITTED_IDEAS': this.setState({ currentView: 'SUBMITTED_IDEAS' }); break;
        }
    }

    render() {

        return (
            <div className="wrapper">
                <SideNav currentTab={this.onNavChange.bind(this)} loggedInUser={this.state.loggedInUser} />
                {(this.state.currentView === 'ALL_IDEAS') ? <Content ideas={this.state.ideas} /> : null}
                {(this.state.currentView === 'SUBMIT_IDEA') ? <SubmitIdea /> : null}
                {(this.state.currentView === 'SUBMITTED_IDEAS') ? <Content ideas={this.state.ideas} /> : null}
            </div>
        );
    };
}

export default Welcome;
