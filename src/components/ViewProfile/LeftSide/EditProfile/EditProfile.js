import React, { useContext, useEffect, useState } from 'react';
import './EditProfile.css'
import upload_image from '../../../../images/upload image/upload_image.png'
import { collectionContext } from '../../../../App';

const EditProfile = ({ profileSave, postData }) => {

    const { value2, value3, value4, value5 } = useContext(collectionContext)
    const [userName, setUserName] = value2;
    const [title, setTitle] = value3;
    const [description, setDescription] = value4;
    const [rate, setRate] = value5;
    const [userProfileData, setUserProfileData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/userLoginData')
            .then(res => res.json())
            .then(data => setUserProfileData(data))
    }, [])
    const getUserLogin = JSON.parse(localStorage.getItem('userLoginInfo'));

    const loginData = userProfileData.find(data => data.email === getUserLogin.email);
    useEffect(() => {
        if (loginData) {
            const { name, profileEdit: { headline, summery, hourlyRate } } = loginData;
            setUserName(name)
            setTitle(headline);
            setDescription(summery);
            setRate(Number(hourlyRate));
        }

    }, [])


    const handleEditProfile = () => {
        fetch('http://localhost:4000/add-profile-info', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, description: description, rate: rate, id: loginData._id })
        })
            .then(res => res.json())
            .then(data => profileSave())
    }


    return (
        <div className="edit-profile">
            <div className="row">
                <div className="col-12 col-sm-4">
                    {
                        loginData && loginData.imageFile.img ?
                            <img className="w-100 edit-profile-image" style={{ height: '276px' }} src={`data:image/png;base64,${loginData.imageFile.img}`} alt="" /> :
                            <img className="w-100 profile-image" style={{ height: '276px' }} src={`${upload_image}`} alt="" />
                    }
                    <div className="row edit-online-area" >
                        <h4 className="hourly-rate">Hourly Rate</h4>
                        <div className="col-2 dollar-sign" >
                            $
                        </div>
                        <div className="col-10 contest-budget" style={{ textAlignLast: 'left' }}>
                            <input type="number" defaultValue={rate} onBlur={(e) => setRate(e.target.value)} className="w-100  form-control " required />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8">
                    <div className="row">
                        <div className="col-sm-6 edit-profile-name">
                            <h4 className="">{userName}</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">

                            <h6 className="mt-4">Professional Headline</h6>
                            <input type="text" defaultValue={title} onBlur={(e) => setTitle(e.target.value)} className="w-100  form-control " required />
                            <h6 className="mt-3">Summary</h6>
                            <textarea type="text" defaultValue={description} onBlur={(e) => setDescription(e.target.value)} className="w-100  form-control " required cols="95" rows="9"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-3 mb-3" style={{ textAlignLast: 'end' }}>
                            <button className="cancel-button" onClick={() => profileSave()}>Cancel</button>
                            <button className="save-button" onClick={() => handleEditProfile()}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(EditProfile);