import React, { useEffect, useContext } from 'react';
import ProfileBg from './ProfileBg/ProfileBg';
import { useParams } from 'react-router-dom';
import { collectionContext } from '../../App';


const ViewProfile = () => {
    const { value7, value8, value9 } = useContext(collectionContext);
    const [, setProfileData] = value7;
    const [, setGetPostData] = value8;
    const [updateStatus,] = value9;


    const { profileId } = useParams();
    useEffect(() => {
        let isMounted = true;
        fetch('https://warm-anchorage-86355.herokuapp.com/getPostProject')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setGetPostData(data)
                }
            })
        return () => { isMounted = false };
    }, [])


    useEffect(() => {
        fetch('https://warm-anchorage-86355.herokuapp.com/userLoginData')
        .then(res => res.json())
        .then(data => setProfileData(data))
    }, [updateStatus])
    return (
        <div >
            <ProfileBg profileId={profileId}/>
        </div>
    );
};

export default ViewProfile;