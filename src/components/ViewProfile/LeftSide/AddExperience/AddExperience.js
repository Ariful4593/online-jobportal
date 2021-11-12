import React, { useEffect, useState, useContext } from 'react';
import './AddExperience.css';
import Loader from "react-loader-spinner";
import { addExperienceFnc } from '../../ProfileDriver/ProfileDriver';
import { collectionContext } from '../../../../App';


const AddExperience = ({ handleEditExperience, profileId, postData }) => {


    const { experienceTitle, companyName, jobStartMonth, jobStartYear, jobEndMonth, jobEndYear, jobSummary } = postData;

    const { value7 } = useContext(collectionContext);
    const [profileData,] = value7;
    const [proposalUser, setProposalUser] = useState([]);
    useEffect(() => {
        addExperienceFnc(profileData, profileId, setProposalUser);
    }, []);


    return (
        <div className="add-experience-block">
            <div className="single-add-block">
                <div className="row">
                    <div className="col-sm-6 experience">
                        <h4>Experience</h4>
                    </div>
                    {
                        !profileId && <div className="col-sm-6 text-end add-experience">
                            <button className="add-button" onClick={() => handleEditExperience()}>Add Experience</button>
                        </div>
                    }

                </div>
            </div>
            <hr />
            <div className="single-row-block">
                <div className="row">
                    <div className="col-12 add-experience-image-area">
                        {
                            proposalUser.length < 1 ?
                                <React.Fragment>
                                    {
                                        (experienceTitle && companyName && jobStartMonth, jobStartYear && jobEndMonth && jobEndYear)
                                            ?
                                            < React.Fragment >
                                                <h5>{experienceTitle}</h5>
                                                <h6>{companyName}</h6>
                                                <p>{`${jobStartMonth} ${jobStartYear} - ${jobEndMonth} ${jobEndYear}`}</p>
                                                <p>{jobSummary}</p>
                                            </React.Fragment> :
                                            postData ? <p>No experience have been added yet</p> : <Loader type="Circles" color="#00BFFF" height={40} width={40} />

                                    }
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    {
                                        proposalUser && (proposalUser.experienceTitle && proposalUser.companyName && proposalUser.jobStartMonth, proposalUser.jobStartYear && proposalUser.jobEndMonth && proposalUser.jobEndYear)
                                            ?
                                            < React.Fragment >
                                                <h5>{proposalUser.experienceTitle}</h5>
                                                <h6>{proposalUser.companyName}</h6>
                                                <p>{`${proposalUser.jobStartMonth} ${proposalUser.jobStartYear} - ${proposalUser.jobEndMonth} ${proposalUser.jobEndYear}`}</p>
                                                <p>{proposalUser.jobSummary}</p>
                                            </React.Fragment> :
                                            <p>No experience have been added yet</p>
                                    }
                                </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddExperience;