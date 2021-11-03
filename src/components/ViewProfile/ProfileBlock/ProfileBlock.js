import React, { useState, useEffect, useContext } from 'react';
import RightSide from '../RightSide/RightSide';
import './ProfileBlock.css';
import LeftSide from '../LeftSide/LeftSide';
import Footer from '../../Footer/Footer';
import { collectionContext } from '../../../App';


const ProfileBlock = ({ userData, profileId }) => {
    const [coverPhotoBtn, setCoverPhotoBtn] = useState(false);
    const [postData, setPostData] = useState('');
    const {value6} = useContext(collectionContext);
    const [userAuth, ] = value6;


    

    const userLoginInfo = JSON.parse(localStorage.getItem('userLoginInfo'));
    const loginData = userAuth.find(data => data.name === userLoginInfo.name);
    useEffect(() => {
        const finalData = userData.find(data => data.email === userLoginInfo.email);
        
        if (finalData) {
            const { profileEdit, imageFile, name, _id, editExperience, editEducation, editQualification } = finalData;
            const { headline, summery, hourlyRate } = profileEdit;

            const { experienceTitle, companyName, jobStartMonth, jobStartYear, jobEndMonth, jobEndYear, jobSummary } = editExperience;

            const { countryName, universityName, degree, startYear, endYear } = editEducation;
            const { certificate, organization, certificateSummary, certificateStartYear } = editQualification;
            const { img } = imageFile
            if (headline || img) {
                setPostData({
                    userName: name,
                    id: _id,
                    headline: headline,
                    summery: summery,
                    hourlyRate: hourlyRate,
                    img: img,
                    experienceTitle: experienceTitle,
                    companyName: companyName,
                    jobStartMonth: jobStartMonth,
                    jobStartYear: jobStartYear,
                    jobEndMonth: jobEndMonth,
                    jobEndYear: jobEndYear,
                    jobSummary: jobSummary,
                    countryName: countryName,
                    universityName: universityName,
                    degree: degree,
                    startYear: startYear,
                    endYear: endYear,
                    certificate: certificate,
                    organization: organization,
                    certificateSummary: certificateSummary,
                    certificateStartYear: certificateStartYear

                })
            } else {
                setPostData({
                    userName: name,
                    id: _id,
                    headline: '',
                    summery: '',
                    hourlyRate: '',
                    img: '',
                    experienceTitle: experienceTitle,
                    companyName: companyName,
                    jobStartMonth: jobStartMonth,
                    jobStartYear: jobStartYear,
                    jobEndMonth: jobEndMonth,
                    jobEndYear: jobEndYear,
                    jobSummary: jobSummary,
                    countryName: countryName,
                    universityName: universityName,
                    degree: degree,
                    startYear: startYear,
                    endYear: endYear,
                    certificate: certificate,
                    organization: organization,
                    certificateSummary: certificateStartYear,
                    certificateStartYear: certificateStartYear
                })
            }
        }
    }, [postData])

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

    const [rightSide, setRightSide] = useState(false)
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