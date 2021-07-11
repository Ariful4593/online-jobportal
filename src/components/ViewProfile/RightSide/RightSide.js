import React from 'react';
import Certifications from './Certifications/Certifications';
import './RightSide.css'
import TopSkill from './TopSkill/TopSkill';
import Verification from './Verification/Verification';
const RightSide = () => {
    return (
        <div className="col-md-3">
            <Verification />
            <Certifications />
            <TopSkill />
        </div>
    );
};

export default RightSide;