import React from 'react';
import './ProjectDetailsTitleArea.css';
const ProjectDetailsTitleArea = ({singlePostData}) => {
    return (
        <div className="project-details-title-area">
            <div className="row ">
                <div className="col-sm-9 details-left">
                    <h3 className="project-details-title">Project Details</h3>
                </div>
                <div className="col-sm-3 details-right">
                    <h5 className="bidding-price">$30.00 – 250.00 USD</h5>
                    <small className="bidding">BIDDING ENDS IN 6 DAYS, 23 HOURS</small>
                </div>
                <hr />
            </div>
            <div className="row project-details-description-area">
                <div className="col-12">
                    <p>{singlePostData.orderProject.projectDescription}</p>

                    <div className="skill-area">
                        <span className="badge badge-primary text-primary">Node.js</span>
                        <span className="badge badge-secondary text-secondary">Andular JS</span>
                        <span className="badge badge-success text-success">Typescript</span>
                        <span className="badge badge-danger text-danger">Angular Material</span>
                        <span className="badge badge-warning text-warning">Google APIs</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsTitleArea;