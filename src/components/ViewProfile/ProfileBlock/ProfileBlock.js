import React, { useState, useEffect, useContext } from 'react';
import RightSide from '../RightSide/RightSide';
import './ProfileBlock.css';
import LeftSide from '../LeftSide/LeftSide';
import Footer from '../../Footer/Footer';
import { collectionContext } from '../../../App';
import { profileBlockFnc } from '../ProfileDriver/ProfileDriver';

const ProfileBlock = ({ profileId }) => {
    const [coverPhotoBtn, setCoverPhotoBtn] = useState(false);
    const [postData, setPostData] = useState('');
    const [rightSide, setRightSide] = useState(false);
    const userLoginInfo = JSON.parse(localStorage.getItem('userLoginInfo'));
    const { value6, value7 } = useContext(collectionContext);
    const [userAuth,] = value6;
    const [profileData,] = value7;
    const loginData = userAuth.find(data => data.name === userLoginInfo.name);
    
    useEffect(() => {
        profileBlockFnc(profileData, userLoginInfo, setPostData);
    }, [profileData])

    const [isPhoto, setIsPhoto] = useState(false)
    const handlePhoto = (e) => {
        const newFile = e.target.files[0];
        const formData = new FormData();
        formData.append('file', newFile)
        formData.append('_id', loginData._id)
        fetch('https://warm-anchorage-86355.herokuapp.com/editPhoto', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => setIsPhoto(true));
    }

    
    return (
        <React.Fragment>
            <div className="container main-profile-block">
                {
                    coverPhotoBtn &&
                    <React.Fragment>

                        <input type="file" onChange={handlePhoto} id="upload" placeholder="Upload Cover Photo" hidden />
                        <label htmlFor="upload" className="cover-photo-btn" >Upload Cover Photo</label>
                    </React.Fragment>
                }
                <div className="row">
                    <LeftSide setCoverPhotoBtn={setCoverPhotoBtn} postData={postData} setRightSide={setRightSide} profileId={profileId} isPhoto={isPhoto} />
                    <RightSide rightSide={rightSide} profileId={profileId} />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default ProfileBlock;