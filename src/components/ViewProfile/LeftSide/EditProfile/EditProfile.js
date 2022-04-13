import React, { useContext, useState } from 'react';
import './EditProfile.css';
import { collectionContext } from '../../../../App';
import { handleEditProfileFnc } from '../../ProfileDriver/ProfileDriver';
import ProfileImg from '../ProfileDetails/ProfileImg';
import Loader from "react-loader-spinner";

const EditProfile = ({ profileSave }) => {

    const { value3, value4, value5, value7, value9 } = useContext(collectionContext)
    const [title, setTitle] = value3;
    const [description, setDescription] = value4;
    const [rate, setRate] = value5;
    const [profileData, setProfileData] = value7;
    const [, setUpdateStatus] = value9;
    const [loadingDot, setLoadingDot] = useState(false);


    const handleEditProfile = () => {
        setLoadingDot(true);
        handleEditProfileFnc(title, description, rate, profileData, profileSave, setUpdateStatus, setProfileData, setLoadingDot);
    }

    return (
        <div className="edit-profile">
            <div className="row">
                <div className="col-12 col-sm-4">
                    <ProfileImg profileData={profileData} />
                    <div className="row edit-online-area" >
                        <h4 className="hourly-rate">Hourly Rate</h4>
                        <div className="col-2 dollar-sign" >
                            $
                        </div>
                        <div className="col-10 contest-budget" style={{ textAlignLast: 'left' }}>
                            <input type="number" defaultValue={ profileData[0].profileEdit.hourlyRate} onBlur={(e) => setRate(e.target.value)} className="w-100  form-control " required />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8">
                    <div className="row">
                        <div className="col-sm-6 edit-profile-name">
                            <h4 className="">{profileData[0].name}</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">

                            <h6 className="mt-4">Professional Headline</h6>
                            <input type="text" defaultValue={profileData[0].profileEdit.headline} onBlur={(e) => setTitle(e.target.value)} className="w-100  form-control " required />
                            <h6 className="mt-3">Summary</h6>
                            <textarea type="text" defaultValue={profileData[0].profileEdit.summery} onBlur={(e) => setDescription(e.target.value)} className="w-100  form-control " required cols="95" rows="9"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-3 mb-3" style={{ textAlignLast: 'end' }}>
                            <button className="cancel-button" onClick={() => profileSave()}>Cancel</button>
                            <button className="save-button" onClick={() => handleEditProfile()}>
                                {loadingDot ? <Loader type="ThreeDots" color="#00BFFF" height={30} width={40} /> : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(EditProfile);