import React, { useState, useEffect } from 'react';
import './ProjectDetailsTitleArea.css';

const ProjectDetailsTitleArea = ({ singlePostData }) => {
    const classArray = ['badge badge-primary text-primary', 'badge badge-secondary text-secondary', 'badge badge-success text-success', 'badge badge-danger text-danger', 'badge badge-warning text-warning']
    const { budget, title, skillData } = singlePostData;
    const [newState, setNewState] = useState([])
    useEffect(() => {
        setNewState(skillData)
    }, [skillData])
    return (
        <div className="project-details-title-area">
            <div className="row ">
                <div className="col-sm-9 details-left">
                    <h3 className="project-details-title">Project Details</h3>
                </div>
                <div className="col-sm-3 details-right">
                    <h5 className="bidding-price">{budget}</h5>
                    <small className="bidding">BIDDING ENDS IN 6 DAYS, 23 HOURS</small>
                </div>
                <hr />
            </div>
            <div className="row project-details-description-area">
                <div className="col-12">
                    <p>{title}</p>

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