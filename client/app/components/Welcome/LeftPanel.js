import React, { Component } from 'react';

class LeftPanel extends Component {

    render() {
        return (
            <div class="left-panel tabs-outer-container medium-padding-right fix-left-panel">
                <div class="menu-container">
                    <div class="menu-tabs">
                        <div class="tab-underline-blue">
                            <ul class="ul-tab border-solid-bottom">
                                <li>
                                    <a id="overview-a" class="tab tab-simple fast-scroll" scroll-offset="10" scroll-target="overview"
                                        no-background="true">
                                        <span id="overview-tab" class="dark tab-a">Overview & Prizes.</span>
                                    </a>
                                </li>
                            </ul>
                            <a class="tab-e no-underline-hover">
                                <span class="tab tab-simple dark tab-a ">
                                    Rules
                                </span>
                            </a>
                            {/* <a class="tab-e no-underline-hover">
                                <span class="tab tab-simple dark tab-a ">
                                    Teams
                                </span>
                            </a> */}
                            <a class="tab-e no-underline-hover">
                                <span class="tab tab-simple dark tab-a ">
                                    Idea Submission
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