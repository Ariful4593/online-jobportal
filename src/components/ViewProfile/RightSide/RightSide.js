import React from 'react';
import Certifications from './Certifications/Certifications';
import './RightSide.css'
import TopSkill from './TopSkill/TopSkill';
import Verification from './Verification/Verification';
const RightSide = ({ profileId }) => {
    return (
        <div className="col-lg-3 right-side">
            <Verification profileId={profileId} />
            <Certifications profileId={profileId} />
            <TopSkill />
        </div>
    );
};

export default RightSide;