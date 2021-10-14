import React from 'react';
import './Qualification.css';
const Qualification = ({ handleEditQualification, postData }) => {
    const { certificate, certificateStartYear, certificateSummary, organization } = postData;
    return (
        <div className="qualification-block">
            <div className="single-add-block">
                <div className="row">
                    <div className="col-md-6 qualification">
                        <h4>Qualification</h4>
                    </div>
                    <div className="col-md-6 text-end add-qualification">
                        <button className="add-button" onClick={() => handleEditQualification()}>Add Qualification</button>
                    </div>
                </div>
            </div>

            <hr />
            <div className="single-row-block">
                <div className="row">
                    <div className="col-12 qualification-image-area">

                        {
                            (certificate && certificateStartYear && certificateSummary && organization) ? <React.Fragment>
                                <h5>{certificate}</h5>
                                <p>{organization}</p>
                                <p>{certificateStartYear}</p>
                                <p>{certificateSummary}</p>
                            </React.Fragment>
                                : <p>No qualifications have been added yet.</p>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Qualification;