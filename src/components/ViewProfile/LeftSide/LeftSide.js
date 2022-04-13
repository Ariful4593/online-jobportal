import React, { useContext, useEffect, useState } from 'react';
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
import { singleProfileId } from '../../../Driver';
import { collectionContext } from '../../../App';


const LeftSide = ({ setCoverPhotoBtn, setRightSide, profileId, isPhoto, loader }) => {
    const [editProfileBtn, setEditProfileBtn] = useState(true);
    const [profileSaveBtn, setProfileSaveBtn] = useState(false);
    const [editExperience, setEditExperience] = useState(true);
    const [experienceSave, setExperienceSave] = useState(false);
    const [editEducation, setEditEducation] = useState(true);
    const [editEducationSave, setEditEducationSave] = useState(false);
    const [editQualificaton, setQualification] = useState(true);
    const [editQualificationSave, setEditQualificationSave] = useState(false);
    const [proposalUser, setProposalUser] = useState([]);
    const { value9 } = useContext(collectionContext);
    const [updateStatus, setUpdateStatus] = value9;
    


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

    useEffect(() => {
        setCoverPhotoBtn(false)
    }, [])

    useEffect(() => {
        singleProfileId(profileId, setProposalUser);
        setUpdateStatus(false);
    }, [updateStatus]);




    return (
        <div className="col-lg-9 left-side">
            {
                editProfileBtn && <ProfileDetails editProfile={editProfile} profileId={profileId} proposalUser={proposalUser} />
            }
            {
                !profileId && profileSaveBtn && <EditProfile profileSave={profileSave} />
            }
            <Reviews />
            {
                editExperience && <AddExperience handleEditExperience={handleEditExperience} profileId={profileId} proposalUser={proposalUser} />
            }
            {
                !profileId && experienceSave && <EditExperience handleExperienceSave={handleExperienceSave} />
            }


            {
                editEducation && <Education handleEditEducation={handleEditEducation} profileId={profileId} proposalUser={proposalUser} />
            }
            {
                !profileId && editEducationSave && <EditEducation handleEditEducationSave={handleEditEducationSave} />
            }

            {
                editQualificaton && <Qualification handleEditQualification={handleEditQualification} profileId={profileId} proposalUser={proposalUser} />
            }
            {
                !profileId && editQualificationSave && <EditQualification handleEditQualificationSave={handleEditQualificationSave} />
            }
            <Publication profileId={profileId} />
        </div>
    );
};

export default LeftSide;