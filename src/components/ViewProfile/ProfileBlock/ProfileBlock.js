import React from 'react';
import RightSide from '../RightSide/RightSide';
import './ProfileBlock.css';
import LeftSide from '../LeftSide/LeftSide';
const ProfileBlock = () => {
    return (
        <div className="container">
            <div className="row">
                <LeftSide />
                <RightSide />
            </div>
        </div>
    );
};

export default ProfileBlock;