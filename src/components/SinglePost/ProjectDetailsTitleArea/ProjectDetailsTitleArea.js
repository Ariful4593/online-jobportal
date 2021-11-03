import React, { useState, useEffect } from 'react';
import './ProjectDetailsTitleArea.css';

const ProjectDetailsTitleArea = ({ singlePostData }) => {
    const classArray = ['badge badge-primary text-primary', 'badge badge-secondary text-secondary', 'badge badge-success text-success', 'badge badge-danger text-danger', 'badge badge-warning text-warning']
    const { budget,  skillData, description } = singlePostData;
    const [newState, setNewState] = useState([])
    useEffect(() => {
        setNewState(skillData)
    }, [skillData])
    return (
        <div className="project-details-title-area">
            <div className="row ">
                <div className="col-12 col-sm-6 col-md-7 col-lg-8">
                    <h3 className="project-details-title">Project Details</h3>
                </div>
                <div className="col-12 col-sm-6 col-md-5 col-lg-4 bidding-block">
                    <h5 className="bidding-price">{budget}</h5>
                    <small className="bidding">BIDDING ENDS IN 6 DAYS, 23 HOURS</small>
                </div>
                <hr />
            </div>
            <div className="row project-details-description-area">
                <div className="col-12">
                    <p>{description}</p>

                    <div className="skill-area">
                        {
                            newState && newState.map((data, index) => (
                                <span key={index} className={`${classArray[index]}`}>{data}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsTitleArea;