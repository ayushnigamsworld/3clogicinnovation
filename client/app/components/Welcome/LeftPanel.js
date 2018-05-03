import React, { Component } from 'react';

class LeftPanel extends Component {

    render() {
        return (
            <div class="left-panel tabs-outer-container medium-padding-right fix-left-panel">
                <div class="menu-container">
                    <div class="menu-tabs">
                        <div class="tab-underline-blue">
                            <a id="about-tab" class="tab no-underline-hover tablet-hide" href="/sprints/alexa-hackathon/description/">
                                <span class="tab tab-simple dark selected">About</span>
                            </a>
                            <ul class="ul-tab border-solid-bottom">
                                <li>
                                    <a id="overview-a" class="tab tab-simple fast-scroll" scroll-offset="10" scroll-target="overview"
                                        no-background="true">
                                        <span id="overview-tab" class="dark tab-a">Overview</span>
                                    </a>
                                </li>
                                <li>
                                    <a id="themes-a" class="tab tab-simple fast-scroll" scroll-offset="10" scroll-target="themes"
                                        no-background="true">
                                        <span id="themes-tab" class="dark tab-a">Themes</span>
                                    </a>
                                </li>
                                <li>
                                    <a id="prizes-a" class="tab tab-simple fast-scroll" scroll-offset="10" scroll-target="prizes"
                                        no-background="true">
                                        <span id="prizes-tab" class="dark tab-a">Prizes</span>
                                    </a>
                                </li>
                            </ul>
                            <a class="tab-e no-underline-hover" href="/sprints/alexa-hackathon/rules/#rules">
                                <span class="tab tab-simple dark tab-a ">
                                    Rules
                                        </span>
                            </a>
                            <a class="tab-e no-underline-hover" href="/sprints/alexa-hackathon/participants/#participants">
                                <span class="tab tab-simple dark tab-a ">
                                    Teams
                                        </span>
                            </a>
                            <a class="tab-e no-underline-hover" href="/sprints/alexa-hackathon/custom-tab/evaluation/#Evaluation">
                                <span class="tab tab-simple dark tab-a ">
                                    Evaluation
                                        </span>
                            </a>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default LeftPanel;