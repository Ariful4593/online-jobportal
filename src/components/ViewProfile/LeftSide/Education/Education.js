import React from 'react';
import './Education.css';
const Education = ({ handleEditEducation, postData }) => {

    const { countryName, universityName, degree, startYear, endYear } = postData;
    return (
        <div className="education-block">
            <div className="single-add-block">
                <div className="row">
                    <div className="col-md-6 education">
                        <h4>Education</h4>
                    </div>
                    <div className="col-md-6 text-end add-education">
                        <button className="add-button" onClick={() => handleEditEducation()}>Add Education</button>
                    </div>
                </div>
            </div>

            <hr />
            <div className="single-row-block">
                <div className="row">
                    <div className="col-12 education-image-area">
                        <h5>{degree}</h5>
                        {
                            (universityName && countryName && startYear && endYear) ? <React.Fragment>
                                <p>
                                    {`${universityName}, ${countryName}`}
                                </p>
                                <p>{startYear} - {endYear}</p>
                            </React.Fragment> : <p>No education have been added yet.</p>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;