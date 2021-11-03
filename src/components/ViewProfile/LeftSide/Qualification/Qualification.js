import React, { useEffect, useState } from 'react';
import './Qualification.css';
// import Loader from "react-loader-spinner";


const Qualification = ({ handleEditQualification, profileId, loadExperienceData }) => {

    const [userProfileData, setUserProfileData] = useState([]);
    const [proposalUser, setProposalUser] = useState([]);
    const getLoginData = JSON.parse(localStorage.getItem('userLoginInfo'));
    useEffect(() => {
        let isMounted = true;
        fetch('https://warm-anchorage-86355.herokuapp.com/userLoginData')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    const editQualificationData = data.find(item => item._id === getLoginData._id);
                    const proposalUserData = data.find(item => item._id === profileId);
                    setProposalUser(proposalUserData ? proposalUserData.editQualification : []);
                    setUserProfileData(editQualificationData ? editQualificationData.editQualification : []);
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
        <div className="qualification-block">
            <div className="single-add-block">
                <div className="row">
                    <div className="col-md-6 qualification">
                        <h4>Qualification</h4>
                    </div>
                    {
                        !profileId && <div className="col-md-6 text-end add-qualification">
                            <button className="add-button" onClick={() => handleEditQualification()}>Add Qualification</button>
                        </div>
                    }

                </div>
            </div>

            <hr />
            <div className="single-row-block">
                <div className="row">
                    {
                        userProfileData && (userProfileData.certificate && userProfileData.certificateStartYear && userProfileData.certificateSummary && userProfileData.organization) ?
                            <div className="col-12 qualification-image-area">
                                {
                                    !profileId ? <React.Fragment>
                                        {
                                            userProfileData && (userProfileData.certificate && userProfileData.certificateStartYear && userProfileData.certificateSummary && userProfileData.organization) ? <React.Fragment>
                                                <h5>{userProfileData.certificate}</h5>
                                                <p>{userProfileData.organization}</p>
                                                <p>{userProfileData.certificateStartYear}</p>
                                                <p>{userProfileData.certificateSummary}</p>
                                            </React.Fragment>
                                                : <p>No qualifications have been added yet.</p>
                                        }
                                    </React.Fragment>
                                        :
                                        <React.Fragment>
                                            {
                                                proposalUser && (proposalUser.certificate && proposalUser.certificateStartYear && proposalUser.certificateSummary && proposalUser.organization) ? <React.Fragment>
                                                    <h5>{proposalUser.certificate}</h5>
                                                    <p>{proposalUser.organization}</p>
                                                    <p>{proposalUser.certificateStartYear}</p>
                                                    <p>{proposalUser.certificateSummary}</p>
                                                </React.Fragment>
                                                    : <p>No qualifications have been added yet.</p>
                                            }
                                        </React.Fragment>
                                }
                            </div>
                            :
                            <p>No education have been added yet.</p>
                            // (counter > 3 ? <p>No education have been added yet.</p> :<Loader type="Circles" color="#00BFFF" height={40} width={40} /> )
                    }


                </div>
            </div>

        </div>
    );
};

export default Qualification;