import React, { Component } from 'react';

class BasicDetails extends Component{

    render() {
        return (
            <div class="sprint-outer-container">
                    <div class="sprint-desc-container">
                        <div class="company-img">

                            <a class="regular cursor-default">
                                <img src={"https://www.3clogic.com/hubfs/3clogic%20June2017%20Theme%20/Image/logo.svg?t=1525298217302"} alt="3CLogic Soft. Solutions."/>
                            </a>

                        </div>
                        <div class="sprint-title-div">
                            <div class="event-title">
                                <h1 class="inline-block title ellipsis">3CInnovation 2K18</h1>
                            </div>
                            <div class="participated-calendar-div less-margin-3 dark">
                                <span class="event-participation small medium-margin-right">
                                    <i class="fa fa-users"></i>
                                    No. of people registered shown here.
                                </span>
                                <span class="event-team-size small medium-margin-left caps">
                                    Team size allowed:
                                    <strong>6</strong>
                                </span>
                            </div>
                        </div>
                        <div class="sprint-cta   two-phased ">
                            <div class="cta-object primary-cta">
                                <div class="cell">
                                    {/* <a href="" class="blue-cta-link ">
                                        
                                    </a> */}
                                </div>
                            </div>

                        </div>
                        <div class="event-details-container">

                            <div class="idea-phase time-location-specification">
                                <div class="location-block">
                                    <div class="small caps light label">idea phase</div>
                                    <div class="regular bold desc dark">
                                        <i class="fa fa-globe"></i> Online</div>
                                </div>
                                <div class="start-time-block">
                                    <div class="small caps light label">opens at:</div>
                                    <div class="regular bold desc dark"> May 20, 2018, 07:00 PM IST </div>
                                </div>
                                <div class="end-time-block">
                                    <div class="small caps light label">closes on:</div>
                                    <div class="regular bold desc dark"> May 29, 2018, 11:55 PM IST </div>
                                </div>
                            </div>

                            <div class="hack-phase time-location-specification">
                                <div class="location-block">
                                    <div class="small caps light label">hackathon</div>
                                    <div class="regular bold desc dark">

                                        <i class="fa fa-laptop"></i> Online

                                    </div>
                                </div>
                                <div class="start-time-block">
                                    <div class="small caps light label">opens at:</div>
                                    <div class="regular bold desc dark"> May 31, 2018, 10:00 AM IST </div>
                                </div>
                                <div class="end-time-block">
                                    <div class="small caps light label">closes on:</div>
                                    <div class="regular bold desc dark"> June 1, 2018, 11:59 AM IST </div>
                                </div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>   
        );
    }    
}

export default BasicDetails;