import React from 'react';
import './Education.css';
const Education = () => {
    return (
        <div className="education-block">
            <div className="row">
                <div className="col-md-6">
                    <h4>Education</h4>
                </div>
                <div className="col-md-6 text-end">
                    <button className="btn btn-danger">Add Education</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 education-image-area">
                    <h5>Computer Science</h5>
                    <p>
                        Chittagong University of Engineering and Technology, Bangladesh
                    </p>
                    <p>2018 - 2021
                        (3 years)</p>
                </div>
            </div>
        </div>
    );
};

export default Education;