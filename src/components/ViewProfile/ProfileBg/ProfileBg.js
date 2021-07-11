import React from 'react';
import ProfileBlock from '../ProfileBlock/ProfileBlock';
import './ProfileBg.css';
const ProfileBg = () => {
    return (
        <div className="profile-block-home">
            <div className="profile-bg">

            </div>
            <div className="profile-block">
                <ProfileBlock />
            </div>
        </div>
    );
};

export default ProfileBg;