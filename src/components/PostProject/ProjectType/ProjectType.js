import React from 'react';
import './ProjectType.css';
import NextButton from '../NextButton/NextButton';

const ProjectType = ({ projectIcon, recruiter }) => {
    return (
        <div className="how-to-pay">
            <div className="row">
                <h4>What type of project are you posting?</h4>
                <div className="col-md-6 pay-category">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 text-center">
                            <img src={projectIcon} alt="" />
                        </div>
                        <div className="col-md-8">
                            <h6 className="project">Standard Project</h6>
                            <small>Free to post, your project will go live instantly and start receiving bids within seconds</small>
                            <p>Free</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pay-category">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 text-center">
                            <img src={recruiter} alt="" />
                        </div>
                        <div className="col-md-8">
                            <h6 className="contest">Recruitter project</h6>
                            <small>We'll assign one of our expert staff to help you find the perfect freelancer for the job.</small>
                            <p>ONLY 9.00$ USD</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <NextButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectType;