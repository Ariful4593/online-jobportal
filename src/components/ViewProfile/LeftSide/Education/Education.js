import React, { useEffect, useState } from 'react';
import './Education.css';
import Loader from "react-loader-spinner";


const Education = ({ handleEditEducation, profileId, loadExperienceData }) => {


    const [userProfileData, setUserProfileData] = useState([]);
    const [proposalUser, setProposalUser] = useState([]);
    const getLoginData = JSON.parse(localStorage.getItem('userLoginInfo'));
    useEffect(() => {
        let isMounted = true;
        fetch('https://warm-anchorage-86355.herokuapp.com/userLoginData')
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
    }, [loadExperienceData]);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < 3) {
            setTimeout(() => setCounter(counter + 1), 1000);
        }
    });
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
                        userProfileData && (userProfileData.universityName && userProfileData.countryName && userProfileData.startYear && userProfileData.endYear) ?
                            <div className="col-12 education-image-area">
                                {
                                    !profileId ?
                                        <React.Fragment>
                                            <h5>{userProfileData && userProfileData.degree}</h5>
                                            {
                                                userProfileData && (userProfileData.universityName && userProfileData.countryName && userProfileData.startYear && userProfileData.endYear) ? <React.Fragment>
                                                    <p>
                                                        {`${userProfileData.universityName}, ${userProfileData.countryName}`}
                                                    </p>
                                                    <p>{userProfileData.startYear} - {userProfileData.endYear}</p>
                                                </React.Fragment> : <p>No education have been added yet.</p>
                                            }
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <h5>{proposalUser && proposalUser.degree ? proposalUser.degree : ''}</h5>
                                            {
                                                proposalUser && (proposalUser.universityName && proposalUser.countryName && proposalUser.startYear && proposalUser.endYear) ? <React.Fragment>
                                                    <p>
                                                        {`${proposalUser.universityName}, ${proposalUser.countryName}`}
                                                    </p>
                                                    <p>{proposalUser.startYear} - {proposalUser.endYear}</p>
                                                </React.Fragment> : <p>No education have been added yet.</p>
                                            }
                                        </React.Fragment>
                                }

                            </div>
                            :

                            (counter > 3 ?  <p>No education have been added yet.</p> :<Loader type="Circles" color="#00BFFF" height={40} width={40} />)
                    }

                </div>
            </div>

        </div>
    );
};

export default Education;