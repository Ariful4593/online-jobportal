import React from 'react';
import './JobProficiency.css';
const JobProficiency = () => {
    return (
        <div className="job-proficiency-area ">
            <ul className="job-proficiency-title-area">
                <li>
                    <h6 className="job-proficiencys">Job Proficiency</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="job-proficiency-item">
                <li>
                    <h4>COMPLETED JOBS</h4>
                </li>
                <li>
                    <p>N/A</p>
                </li>

                <hr />
                <li>
                    <h4>ON TIME JOBS</h4>
                </li>
                <li>
                    <p>N/A</p>
                </li>

                <hr />
                <li>
                    <h4>ON BUDGET JOBS</h4>
                </li>
                <li>
                    <p>N/A</p>
                </li>

                <hr />
                <li>
                    <h4>REHIRE RATE JOBS</h4>
                </li>
                <li>
                    <p>N/A</p>
                </li>
            </ul>
        </div>
    );
};

export default JobProficiency;