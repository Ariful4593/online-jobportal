import React from 'react';
import { Link } from 'react-router-dom';
import './Verification.css';


import verificationTypeData from '../../../../fakedata/viewProfileData/rightSideData/verificationTypeData';
const Verification = () => {

    return (
        <div className="verification-area ">
            <ul className="verification-title-area">
                <li>
                    <h6>Verifications</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="verificaion-item">
                {
                    verificationTypeData.map((data, index) => (
                        <li key={index}>
                            <Link to="" className="text-dark" style={{fontSize: '14px'}}><data.icon /> {data.title}</Link>
                            <Link to="" className="text-success" style={{marginLeft: '25px', fontSize: '14px'}}>Verifiy</Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default Verification;