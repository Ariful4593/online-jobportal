import React from 'react';
import ProfileBlock from '../ProfileBlock/ProfileBlock';
import './ProfileBg.css';
const ProfileBg = ({ userData, profileId, userProfile }) => {
    return (
        <div className="profile-bg">
            <div className="profile-block">
                <ProfileBlock userData={userData} profileId={profileId}  userProfile={userProfile}/>
            </div>
        </div>
    );
};

export default ProfileBg;