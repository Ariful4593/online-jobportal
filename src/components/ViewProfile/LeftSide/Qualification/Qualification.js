import React, { useEffect, useState, useContext } from 'react';
import './Qualification.css';
// import Loader from "react-loader-spinner";
import { qualificationFnc } from '../../ProfileDriver/ProfileDriver';
import { collectionContext } from '../../../../App';

const Qualification = ({ handleEditQualification, profileId, postData }) => {

    const { certificate, certificateStartYear, certificateSummary, organization } = postData;
    const { value7 } = useContext(collectionContext);
    const [profileData,] = value7;
    const [proposalUser, setProposalUser] = useState([]);
    useEffect(() => {
        qualificationFnc(profileData, profileId, setProposalUser);
    }, []);

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
                    <div className="col-12 qualification-image-area">
                        {
                            proposalUser.length < 1 ? <React.Fragment>
                                {
                                    (certificate && certificateStartYear && certificateSummary && organization)  ? <React.Fragment>
                                        <h5>{certificate}</h5>
                                        <p>{organization}</p>
                                        <p>{certificateStartYear}</p>
                                        <p>{certificateSummary}</p>
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


                </div>
            </div>

        </div>
    );
};

export default Qualification;