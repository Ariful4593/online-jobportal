import React from 'react';
import './AddExperience.css';
const AddExperience = ({ handleEditExperience, postData }) => {

    const { experienceTitle, companyName, jobStartMonth, jobStartYear, jobEndMonth, jobEndYear, jobSummary } = postData;
    return (
        <div className="add-experience-block">
            <div className="single-add-block">
                <div className="row">
                    <div className="col-sm-6 experience">
                        <h4>Experience</h4>
                    </div>
                    <div className="col-sm-6 text-end add-experience">
                        <button className="add-button" onClick={() => handleEditExperience()}>Add Experience</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="single-row-block">
                <div className="row">
                    <div className="col-12 add-experience-image-area">
                        {
                            (experienceTitle && companyName && jobStartMonth, jobStartYear && jobEndMonth && jobEndYear) ? 
                            < React.Fragment >
                                <h5>{experienceTitle}</h5>
                                <h6>{companyName}</h6>
                                <p>{`${jobStartMonth} ${jobStartYear} - ${jobEndMonth} ${jobEndYear}`}</p>
                                <p>{jobSummary}</p>
                            </React.Fragment>: 
                            <p>No experience have been added yet</p>
                        }
                </div>
            </div>
        </div>
        </div >
    );
};

export default AddExperience;