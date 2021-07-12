import React from 'react';
import { Link } from 'react-router-dom';
import certificate from '../../../../images/certifications.svg';
import './Certification.css';
const Certifications = () => {
    return (
        <div className="certification-area ">
            <ul className="certification-title-area">
                <li>
                    <h6>Certifications</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="certification-item">
                <li className="certificate-img"><img src={certificate} className="" alt="" /></li>
                <li><small>You don't have any certifications yet.</small></li>
                <li className="text-center get-certificate"><Link to="" className="text-dark">Get Certified</Link></li>
            </ul>
        </div>
    );
};

export default Certifications;