import React, { useEffect, useContext } from 'react';
import ProfileBg from './ProfileBg/ProfileBg';
import { useParams } from 'react-router-dom';
import { collectionContext } from '../../App';
import '../../spinner.css';
import {  getSingleUserByEmail } from '../../Driver';

const ViewProfile = () => {
    const { value7, value9 } = useContext(collectionContext);
    const [profileData, setProfileData] = value7;
    const [updateStatus,] = value9;
    document.title = "Freelancers || View Profile";

    const { profileId } = useParams();

    //Get user data via email
    useEffect(() => {
        getSingleUserByEmail(setProfileData);
    }, [updateStatus && profileData])

    return (
        <div>
            {
                profileData.length > 0 ? <ProfileBg profileId={profileId} /> :
                    <div className="loading">Loading&#8230;</div>
            }

        </div>
    );
};

export default ViewProfile;