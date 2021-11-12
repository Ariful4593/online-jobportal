import React, { useEffect, useState } from 'react';
import AddExperience from './AddExperience/AddExperience';
import Education from './Education/Education';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import Publication from './Publication/Publication';
import Qualification from './Qualification/Qualification';
import Reviews from './Reviews/Reviews';
import './LeftSide.css';
import EditProfile from './EditProfile/EditProfile';
import EditExperience from './AddExperience/EditExperience';
import EditEducation from './Education/EditEducation';
import EditQualification from './Qualification/EditQualification';


const LeftSide = ({ setCoverPhotoBtn, postData, setRightSide, profileId, isPhoto }) => {
    const [editProfileBtn, setEditProfileBtn] = useState(true);
    const [profileSaveBtn, setProfileSaveBtn] = useState(false);
    const [editExperience, setEditExperience] = useState(true);
    const [experienceSave, setExperienceSave] = useState(false);
    const [editEducation, setEditEducation] = useState(true);
    const [editEducationSave, setEditEducationSave] = useState(false);
    const [editQualificaton, setQualification] = useState(true);
    const [editQualificationSave, setEditQualificationSave] = useState(false);
    const [saveData, setSaveData] = useState(false);
    const [loadExperienceData, setLoadExperienceData] = useState(false);
    

    useEffect(() => {
        setCoverPhotoBtn(false)
    }, [])



    const editProfile = () => {
        setEditProfileBtn(false);
        setRightSide(true);
        setProfileSaveBtn(true);
        setCoverPhotoBtn(true);
    }

    const profileSave = () => {
        setProfileSaveBtn(false);
        setEditProfileBtn(true);
        setCoverPhotoBtn(false);
    }

    const handleEditExperience = () => {
        setEditExperience(false);
        setExperienceSave(true);
    }
    const handleExperienceSave = () => {
        setEditExperience(true);
        setExperienceSave(false);
    }

    const handleEditEducation = () => {
        setEditEducation(false);
        setEditEducationSave(true);
    }

    const handleEditEducationSave = () => {
        setEditEducation(true);
        setEditEducationSave(false);
    }

    const handleEditQualification = () => {
        setQualification(false);
        setEditQualificationSave(true);
    }

    const handleEditQualificationSave = () => {
        setQualification(true);
        setEditQualificationSave(false);
    }





    return (
        <div className="col-lg-9 left-side">
            {
                editProfileBtn && <ProfileDetails editProfile={editProfile} postData={postData} profileId={profileId} saveData={saveData} />
            }
            {
                !profileId && profileSaveBtn && <EditProfile profileSave={profileSave} postData={postData} isPhoto={isPhoto} setSaveData={setSaveData} />
            }
            <Reviews />
            {
                editExperience && <AddExperience handleEditExperience={handleEditExperience} postData={postData} profileId={profileId} loadExperienceData={loadExperienceData} />
            }
            {
                !profileId && experienceSave && <EditExperience handleExperienceSave={handleExperienceSave} postData={postData} setLoadExperienceData={setLoadExperienceData} />
            }


            {
                editEducation && <Education handleEditEducation={handleEditEducation} postData={postData} profileId={profileId} loadExperienceData={loadExperienceData} />
            }
            {
                !profileId && editEducationSave && <EditEducation handleEditEducationSave={handleEditEducationSave} postData={postData} setLoadExperienceData={setLoadExperienceData} />
            }

            {
                editQualificaton && <Qualification handleEditQualification={handleEditQualification} postData={postData} profileId={profileId} loadExperienceData={loadExperienceData} />
            }
            {
                !profileId && editQualificationSave && <EditQualification handleEditQualificationSave={handleEditQualificationSave} postData={postData} setLoadExperienceData={setLoadExperienceData}/>
            }
            <Publication profileId={profileId} />
        </div>
    );
};

export default LeftSide;