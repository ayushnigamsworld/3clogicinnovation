import React, { Component } from 'react';
import OverviewTab from './Overview';
import RulesTab from './Rules';
import IdeaTab from './IdeaTab';

class CenterPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
           tabInView : <OverviewTab/>
        };
        this.showClickedTab = this.showClickedTab.bind(this)
    }
    
    showClickedTab(tabName){
        
       console.log( this.state.tabInView);
    }

    render() {

        //let tabToshow = this.state.tabInView;

        return (
            <div>
                <div class="left-panel tabs-outer-container medium-padding-right fix-left-panel">
                    <div class="menu-container">
                        <div class="menu-tabs">
                            <div class="tab-underline-blue">
                                <ul class="ul-tab border-solid-bottom">
                                    <li onClick={this.showClickedTab('overviewTab')}>
                                        <a  class="tab tab-simple fast-scroll" scroll-offset="10" scroll-target="overview"
                                            no-background="true">
                                            <span id="overview-tab" class="dark tab-a">Overview & Prizes.</span>
                                        </a>
                                    </li>
                                </ul>
                                <a onClick={this.showClickedTab('rulesTab')} class="tab-e no-underline-hover">
                                    <span class="tab tab-simple dark tab-a ">
                                        Rules
                                </span>
                                </a>
                                {/* <a class="tab-e no-underline-hover">
                                <span class="tab tab-simple dark tab-a ">
                                    Teams
                                </span>
                            </a> */}
                                <a onClick={this.showClickedTab('ideaTab')} class="tab-e no-underline-hover">
                                    <span class="tab tab-simple dark tab-a ">
                                        Idea Submission
                                </span>
                                </a>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="center-panel">
                
                    <IdeaTab/>
                </div>
            </div>
        );
    };
}

export default CenterPanel;