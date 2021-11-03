import React, { useEffect, useState } from 'react';
import './AddExperience.css';
import Loader from "react-loader-spinner";



const AddExperience = ({ handleEditExperience, profileId, loadExperienceData }) => {

    const [userProfileData, setUserProfileData] = useState([]);
    const [proposalUser, setProposalUser] = useState([]);
    const getLoginData = JSON.parse(localStorage.getItem('userLoginInfo'));
    useEffect(() => {
        let isMounted = true;
        fetch('https://warm-anchorage-86355.herokuapp.com/userLoginData')
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
    }, [loadExperienceData]);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < 3) {
            setTimeout(() => setCounter(counter + 1), 1000);
        }
    })


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
                        userProfileData && (userProfileData.experienceTitle && userProfileData.companyName && userProfileData.jobStartMonth, userProfileData.jobStartYear && userProfileData.jobEndMonth && userProfileData.jobEndYear) ?
                            <div className="col-12 add-experience-image-area">
                                {
                                    !profileId ?
                                        <React.Fragment>
                                            {
                                                userProfileData && (userProfileData.experienceTitle && userProfileData.companyName && userProfileData.jobStartMonth, userProfileData.jobStartYear && userProfileData.jobEndMonth && userProfileData.jobEndYear)
                                                    ?
                                                    < React.Fragment >
                                                        <h5>{userProfileData.experienceTitle}</h5>
                                                        <h6>{userProfileData.companyName}</h6>
                                                        <p>{`${userProfileData.jobStartMonth} ${userProfileData.jobStartYear} - ${userProfileData.jobEndMonth} ${userProfileData.jobEndYear}`}</p>
                                                        <p>{userProfileData.jobSummary}</p>
                                                    </React.Fragment> :
                                                    (<p>No experience have been added yet</p>)
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
                            :
                            (counter > 3 ? <p>No education have been added yet.</p> : <Loader type="Circles" color="#00BFFF" height={40} width={40} />)
                    }
                </div>
            </div>
        </div >
    );
};

export default AddExperience;