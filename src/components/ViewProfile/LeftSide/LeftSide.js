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
const LeftSide = ({ setCoverPhotoBtn, postData, setRightSide }) => {
    const [editProfileBtn, setEditProfileBtn] = useState(true);
    const [profileSaveBtn, setProfileSaveBtn] = useState(false);
    const [editExperience, setEditExperience] = useState(true);
    const [experienceSave, setExperienceSave] = useState(false);
    const [editEducation, setEditEducation] = useState(true);
    const [editEducationSave, setEditEducationSave] = useState(false);
    const [editQualificaton, setQualification] = useState(true);
    const [editQualificationSave, setEditQualificationSave] = useState(false)

    useEffect(() => {
        setCoverPhotoBtn(false)
    }, [])



    const editProfile = () => {
        setEditProfileBtn(false);
        setRightSide(true);
        setProfileSaveBtn(true);
        setCoverPhotoBtn(true)
    }

    const profileSave = () => {
        setProfileSaveBtn(false)
        setEditProfileBtn(true)
        setCoverPhotoBtn(false)
    }

    const handleEditExperience = () => {
        setEditExperience(false);
        setExperienceSave(true)
    }
    const handleExperienceSave = () => {
        setEditExperience(true);
        setExperienceSave(false)
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
        setEditQualificationSave(true)
    }

    const handleEditQualificationSave = () => {
        setQualification(true);
        setEditQualificationSave(false)
    }


    return (
        <div className="col-lg-9 left-side">
            {
                editProfileBtn && <ProfileDetails editProfile={editProfile} postData={postData} />
            }
            {
                profileSaveBtn && <EditProfile profileSave={profileSave} postData={postData} />
            }
            <Reviews />
            {
                editExperience && <AddExperience handleEditExperience={handleEditExperience} postData={postData} />
            }
            {
                experienceSave && <EditExperience handleExperienceSave={handleExperienceSave} postData={postData} />
            }


            {
                editEducation && <Education handleEditEducation={handleEditEducation} postData={postData} />
            }
            {
                editEducationSave && <EditEducation handleEditEducationSave={handleEditEducationSave} postData={postData} />
            }

            {
                editQualificaton && <Qualification handleEditQualification={handleEditQualification} postData={postData} />
            }
            {
                editQualificationSave && <EditQualification handleEditQualificationSave={handleEditQualificationSave} postData={postData} />
            }
            <Publication />
        </div>
    );
};

export default LeftSide;