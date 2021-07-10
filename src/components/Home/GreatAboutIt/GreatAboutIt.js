import React from 'react';
import './GreatAboutIt.css';
import greatAboutItData from '../../../fakedata/homePageData/greatAboutItData';
const GreatAboutIt = () => {
    return (
        <React.Fragment>
            <div className="row great-about-area">
                <div className="col-12 great-about">
                    <h1 className="great-about-title">
                        What's great about it?
                    </h1>
                </div>
                {
                    greatAboutItData.map((data, index) => (
                        <div className="col-md-3 need-browse-area" key={index}>
                            <div className="row d-flex align-items-center">
                                <div className="col-md-4 img">
                                    <img className="w-100" src={data.img} alt="" />
                                </div>
                                <div className="col-md-8 need-browse-title-block">
                                    <h4 className="title">{data.title}</h4>
                                </div>
                            </div>
                            <div>
                                <p className="description">{data.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <hr className="great-about-area-hr" />
        </React.Fragment>
    );
};

export default GreatAboutIt;