import React, { useEffect, useState } from 'react';
import './AddExperience.css';
const AddExperience = ({ handleEditExperience, profileId }) => {

    const [userProfileData, setUserProfileData] = useState([]);
    const [proposalUser, setProposalUser] = useState([]);
    const getLoginData = JSON.parse(localStorage.getItem('userLoginInfo'));
    useEffect(() => {
        let isMounted = true;
        fetch('http://localhost:4000/userLoginData')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    const editExperienceData = data.find(item => item._id === getLoginData._id);
                    const proposalUserData = data.find(item => item._id === profileId);
                    setProposalUser(proposalUserData ? proposalUserData.editExperience : []);
                    setUserProfileData(editExperienceData ? editExperienceData.editExperience : []);
                }

            })
        return () => { isMounted = false }
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
                    {
                        !profileId ? <div className="col-12 add-experience-image-area">
                            {
                                userProfileData && (userProfileData.experienceTitle && userProfileData.companyName && userProfileData.jobStartMonth, userProfileData.jobStartYear && userProfileData.jobEndMonth && userProfileData.jobEndYear)
                                    ?
                                    < React.Fragment >
                                        <h5>{userProfileData.experienceTitle}</h5>
                                        <h6>{userProfileData.companyName}</h6>
                                        <p>{`${userProfileData.jobStartMonth} ${userProfileData.jobStartYear} - ${userProfileData.jobEndMonth} ${userProfileData.jobEndYear}`}</p>
                                        <p>{userProfileData.jobSummary}</p>
                                    </React.Fragment> :
                                    <p>No experience have been added yet</p>
                            }
                        </div>
                            :
                            <div className="col-12 add-experience-image-area">
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
                            </div>
                    }

                    {/* {
                        
                    } */}

                </div>
            </div>
        </div >
    );
};

export default AddExperience;