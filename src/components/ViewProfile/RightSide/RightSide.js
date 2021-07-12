import React from 'react';
import Certifications from './Certifications/Certifications';
import './RightSide.css'
import TopSkill from './TopSkill/TopSkill';
import Verification from './Verification/Verification';
const RightSide = () => {
    return (
        <div className="col-lg-3 right-side">
            <Verification />
            <Certifications />
            <TopSkill />
        </div>
    );
};

export default RightSide;