import React from 'react';
import ProfileBlock from '../ProfileBlock/ProfileBlock';
import './ProfileBg.css';
const ProfileBg = ({ profileId }) => {
    return (
        <div className="profile-bg">
            <div className="profile-block">
                <ProfileBlock profileId={profileId}/>
            </div>
        </div>
    );
};

export default ProfileBg;