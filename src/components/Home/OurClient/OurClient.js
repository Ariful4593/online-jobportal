import React from 'react';
import ourClientData from '../../../fakedata/homePageData/ourClientData';
import Slider from '../Slider/Slider';
import './OurClient.css';
const OurClient = () => {
    return (
        <div className="row our-client-logo-area">
            <div className="col-xl-2">
                <h3>As used by</h3>
            </div>
            {
                ourClientData.map((data, index) => (
                    <div className="col-md-1 our-client-logo" key={index}>
                        <img className="w-100 " src={data} alt="" />
                    </div>
                ))
            }
            <div className="slider">
                <Slider />
            </div>
            <hr className="our-client-logo-area-hr" />
        </div>

    );
};

export default OurClient;