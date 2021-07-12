import React from 'react';
import ProfileBlock from '../ProfileBlock/ProfileBlock';
import './ProfileBg.css';
const ProfileBg = () => {
    return (
        <div className="profile-bg">
            <div className="profile-block">
                <ProfileBlock />
            </div>
        </div>
    );
};

export default ProfileBg;