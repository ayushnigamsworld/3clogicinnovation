import React, { Component } from 'react';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';

class DescriptiveDetails extends Component{

    render(){
        return (
            <div class="sprint-body" id="sprint-body">
                <div class="responsive-container">
                    <LeftPanel/>
                    <CenterPanel/>
                </div>
            </div>    
        );
    };
}

export default DescriptiveDetails;