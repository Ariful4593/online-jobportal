import React from 'react';
import './AddExperience.css';
const AddExperience = () => {
    return (
        <div className="add-experience-block">
            <div className="row">
                <div className="col-md-6">
                    <h4>Experience</h4>
                </div>
                <div className="col-md-6 text-end">
                    <button className="btn btn-danger">Add Experience</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 add-experience-image-area">
                    <h5>Frontend Developer</h5>
                    <h6>Programming Hero</h6>
                    <p>Jun 2020 - Dec 2020 (6 months, 2 days)</p>
                    <p>
                        I am responsible for creating and developing exciting graphics and visuals for client websites that
                        make their page beautiful and attractive. In addition to excellent programming
                        and creativity, I rely on extensive knowledge of HTML, CSS, Bootstrap, React
                        Bootstrap, Material UI, Vanilla JavaScript, React JS, and comfortable with
                        NodeJS, MongoDB, Express, Data Structure & Algorithm, Object-Oriented
                        Programming (OOP).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddExperience;