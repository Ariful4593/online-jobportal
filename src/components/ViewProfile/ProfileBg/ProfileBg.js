import React from 'react';
import ProfileBlock from '../ProfileBlock/ProfileBlock';
import './ProfileBg.css';
const ProfileBg = ({ userData, userLogin }) => {
    return (
        <div className="profile-bg">
            <div className="profile-block">
                <ProfileBlock userData={userData} />
            </div>
        </div>
    );
};

export default ProfileBg;