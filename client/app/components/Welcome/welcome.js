import React, { Component } from 'react';

import './Welcome.css';
import SideNav from './SideNav';
import IdeaCard from './IdeaCard';
import Content from './Content';
class Welcome extends Component {

    constructor(props){
        super(props);
        this.state = {
            ideas : [
                {
                    title: 'My first Idea'
                },
                {
                    title: 'My second Idea'
                },
                {
                    title: 'My third Idea'
                }
            ]
        }
    }

    componentDidMount() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
        });
    }

    render() {
        return (
            <div className="wrapper">
            <SideNav/>
            <Content ideas = {this.state.ideas}/>
        </div>
        );
    };
}

export default Welcome;