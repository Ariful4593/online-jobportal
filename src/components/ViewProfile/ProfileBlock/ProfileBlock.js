import React, { useState, useContext } from 'react';
import RightSide from '../RightSide/RightSide';
import './ProfileBlock.css';
import LeftSide from '../LeftSide/LeftSide';
import Footer from '../../Footer/Footer';
import { collectionContext } from '../../../App';

const ProfileBlock = ({ profileId }) => {
    const [coverPhotoBtn, setCoverPhotoBtn] = useState(false);
    const [rightSide, setRightSide] = useState(false);
    const { value7, value9 } = useContext(collectionContext);
    const [, setUpdateStatus] = value9;
    const [profileData, setProfileData] = value7;
    const [isPhoto, setIsPhoto] = useState(false);
    const [loader, setLoader] = useState(false);



    const handlePhoto = (e) => {
        setLoader(true);
        const newFile = e.target.files[0];
        const formData = new FormData();
        formData.append('file', newFile)
        formData.append('_id', profileData[0]._id)
        fetch('https://online-jobplace-server-production.up.railway.app/editPhoto', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                setProfileData(data)
                setIsPhoto(true);
                setUpdateStatus(true);
                setLoader(false)
            });
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
                    <LeftSide setCoverPhotoBtn={setCoverPhotoBtn} setRightSide={setRightSide} profileId={profileId} isPhoto={isPhoto} loader={loader} />
                    <RightSide rightSide={rightSide} profileId={profileId} />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default ProfileBlock;