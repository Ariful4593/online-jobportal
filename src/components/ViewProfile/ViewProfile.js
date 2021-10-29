import React, { useState, useEffect } from 'react';
import ProfileBg from './ProfileBg/ProfileBg';
import { useParams } from 'react-router-dom';


const ViewProfile = () => {
    const [userData, setUserData] = useState([]);

    const { profileId } = useParams();
    useEffect(() => {
        let isMounted = true;
        fetch('http://localhost:4000/getPostProject')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setUserData(data)
                }
            })
        return () => { isMounted = false };
    }, [])

    const [userProfile, setUserProfile] = useState([]);


    useEffect(() => {
        fetch('http://localhost:4000/userLoginData')
        .then(res => res.json())
        .then(data => {
            const userData = data.find(item => item._id === profileId);
            setUserProfile(userData)
        })
    }, [])
    return (
        <div >
            <ProfileBg userData={userData} profileId={profileId} userProfile={userProfile} />
        </div>
    );
};

export default ViewProfile;