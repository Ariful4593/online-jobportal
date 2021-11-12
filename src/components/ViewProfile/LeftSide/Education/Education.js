import React, { useEffect, useState, useContext } from 'react';
import './Education.css';
import Loader from "react-loader-spinner";
import { educationFnc } from '../../ProfileDriver/ProfileDriver';
import { collectionContext } from '../../../../App';

const Education = ({ handleEditEducation, profileId, postData }) => {


    const { countryName, degree, endYear, startYear, universityName } = postData;
    const { value7 } = useContext(collectionContext);
    const [profileData,] = value7;
    const [proposalUser, setProposalUser] = useState([]);
    useEffect(() => {
        educationFnc(profileData, profileId, setProposalUser);
    }, []);

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
                    <div className="col-12 education-image-area">
                        {
                            proposalUser.length < 1 ?
                                <React.Fragment>
                                    <h5>{degree}</h5>
                                    {
                                        (universityName && countryName && startYear && endYear)? <React.Fragment>
                                            <p>
                                                {`${universityName}, ${countryName}`}
                                            </p>
                                            <p>{startYear} - {endYear}</p>
                                        </React.Fragment> : postData ? <p>No education have been added yet</p> : <Loader type="Circles" color="#00BFFF" height={40} width={40} />
                                    }
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <h5>{(proposalUser.universityName && proposalUser.countryName && proposalUser.startYear && proposalUser.endYear) && proposalUser.degree}</h5>
                                    {
                                        (proposalUser.universityName && proposalUser.countryName && proposalUser.startYear && proposalUser.endYear) ? <React.Fragment>
                                            <p>
                                                {`${proposalUser.universityName}, ${proposalUser.countryName}`}
                                            </p>
                                            <p>{proposalUser.startYear} - {proposalUser.endYear}</p>
                                        </React.Fragment> : <p>No education have been added yet.</p>
                                    }
                                </React.Fragment>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;