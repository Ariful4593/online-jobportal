import React from 'react';
import './MakeItReal.css';
import makeItRealData from '../../../fakedata/homePageData/makeItRealData';
const MakeItReal = () => {
    return (
        <div className="row make-it-real-area">
            <h1 className="make-it-real-title">Make it Real with Freelancer.</h1>
            <h4>Get some Inspirations from 1800+ skills</h4>

            {
                makeItRealData.map((data, index) => (
                    <div className="col-md-3 mt-4 make-it-real-single-block" key={index}>
                        <div className="images">
                            <img className="w-100 image__img" src={data.img} alt="" />

                            <div className="image__overlay">
                                <div className="image__title">
                                    <h5>Discover More</h5>
                                </div>
                            </div>
                        </div>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                ))
            }

            <div className="col-12">
                <div className="view-more-btn">
                    <button className="btn">View More Projects</button>
                </div>
            </div>
            <hr className="make-it-real-hr" />
        </div>
    );
};

export default MakeItReal;