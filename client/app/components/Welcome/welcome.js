import React, { Component } from 'react';
import WelcomeHeader from '../Header/WelcomeHeader';
import BasicDetails from './BasicDetails';
import CarouselImage from '../../../public/assets/img/demoCarouselImage.jpg';
import DescriptiveDetails from './DescriptiveDetails';

class Welcome extends Component {

    render() {
        return (
            <div>

                {/* <WelcomeHeader /> */}
                <div className="sprint-global-container layout-container">
                    <div className="sprint">
                        <div className="top-cover">
                            <div className="cover">
                                <div className="banner-image" style={{ backgroundImage : `url(${CarouselImage})` }}>
                                </div>
                            </div>
                            <BasicDetails/>
                            <DescriptiveDetails/>
                        </div>
                    </div>
                </div>

            </div>
        );
    };
}

export default Welcome;