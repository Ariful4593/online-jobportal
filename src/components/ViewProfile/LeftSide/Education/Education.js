import React, { useEffect, useState } from 'react';
import './Education.css';
const Education = ({ handleEditEducation, profileId }) => {


    const [userProfileData, setUserProfileData] = useState([]);
    const [proposalUser, setProposalUser] = useState([]);
    const getLoginData = JSON.parse(localStorage.getItem('userLoginInfo'));
    useEffect(() => {
        let isMounted = true;
        fetch('http://localhost:4000/userLoginData')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    const editEducationData = data.find(item => item._id === getLoginData._id);
                    const proposalUserData = data.find(item => item._id === profileId);
                    setProposalUser(proposalUserData ? proposalUserData.editEducation : []);
                    setUserProfileData(editEducationData ? editEducationData.editEducation : []);
                }

            })
        return () => { isMounted = false }
    }, []);

    return (
        <div className="education-block">
            <div className="single-add-block">
                <div className="row">
                    <div className="col-md-6 education">
                        <h4>Education</h4>
                    </div>
                    {
                        !profileId && <div className="col-md-6 text-end add-education">
                            <button className="add-button" onClick={() => handleEditEducation()}>Add Education</button>
                        </div>
                    }

                </div>
            </div>

            <hr />
            <div className="single-row-block">
                <div className="row">
                    {
                        !profileId ? <div className="col-12 education-image-area">
                            <h5>{userProfileData && userProfileData.degree}</h5>
                            {
                                userProfileData && (userProfileData.universityName && userProfileData.countryName && userProfileData.startYear && userProfileData.endYear) ? <React.Fragment>
                                    <p>
                                        {`${userProfileData.universityName}, ${userProfileData.countryName}`}
                                    </p>
                                    <p>{userProfileData.startYear} - {userProfileData.endYear}</p>
                                </React.Fragment> : <p>No education have been added yet.</p>
                            }

                        </div>
                            :
                            <div className="col-12 education-image-area">
                                <h5>{proposalUser && proposalUser.degree ? proposalUser.degree : ''}</h5>
                                {
                                    proposalUser && (proposalUser.universityName && proposalUser.countryName && proposalUser.startYear && proposalUser.endYear) ? <React.Fragment>
                                        <p>
                                            {`${proposalUser.universityName}, ${proposalUser.countryName}`}
                                        </p>
                                        <p>{proposalUser.startYear} - {proposalUser.endYear}</p>
                                    </React.Fragment> : <p>No education have been added yet.</p>
                                }

                            </div>
                    }

                </div>
            </div>

        </div>
    );
};

export default Education;