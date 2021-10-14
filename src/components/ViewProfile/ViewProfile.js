import React, { useState, useEffect } from 'react';
import ProfileBg from './ProfileBg/ProfileBg';

const ViewProfile = () => {
    const [userData, setUserData] = useState([]);
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


    return (
        <div >
            <ProfileBg userData={userData} />
        </div>
    );
};

export default ViewProfile;