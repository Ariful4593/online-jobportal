//From AddExperience

export const addExperienceFnc = (data, profileId, setProposalUser) => {
    const userData = data && data.find(item => item._id === profileId);
    return (setProposalUser(userData ? userData.editExperience : []));
}

//From EditProfile
export const userDataFnc = (data, getUserLogin, setUserProfileData) => {
    const userData = data.find(item => item.email === getUserLogin.email);
    setUserProfileData(userData);
    localStorage.setItem('userLoginInfo', JSON.stringify(userData));
    return (setUserProfileData);
}

export const userDataFnc1 = (getUserLogin, setUserName, setTitle, setDescription, setRate) => {
    const { name, profileEdit } = getUserLogin;
    setUserName(name)
    setTitle(profileEdit ? profileEdit.headline : '');
    setDescription(profileEdit ? profileEdit.summery : '');
    setRate(Number(profileEdit ? profileEdit.hourlyRate : ''));
    return (setUserName, setTitle, setDescription, setRate);
}

export const handleEditProfileFnc = (title, description, rate, getUserLogin, setSaveData, profileSave, setUpdateStatus) => {
    return (
        fetch('https://warm-anchorage-86355.herokuapp.com/add-profile-info', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, description: description, rate: rate, id: getUserLogin._id })
        })
            .then(res => res.json())
            .then(data => {
                setUpdateStatus(true);
                setSaveData(data);
                profileSave();
                
                // window.location.reload();
            })
    )
}


//From EditEducation.js
export const editEducationSaveFnc = (country, university, degree, startYear, endYear, getUserLoginInfo, setLoadExperienceData, setUpdateStatus, handleEditEducationSave) => {
    return (fetch('https://warm-anchorage-86355.herokuapp.com/editEducation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ countryName: country, universityName: university, degree: degree, startYear: startYear, endYear: endYear, id: getUserLoginInfo._id })
    }).then(res => res.json())
        .then(data => {
            setUpdateStatus(true);
            setLoadExperienceData(data)
            handleEditEducationSave();
        }))
}

//From Education.js
export const educationFnc = (data, profileId, setProposalUser) => {
    const proposalUserData = data.find(item => item._id === profileId);;
    return (setProposalUser(proposalUserData ? proposalUserData.editEducation : []));

}

//From ProfileDetails.js
export const profileDetailsFnc = (data, getUserLogin, profileId, setProposalUser) => {
    const userData = data && data.find(item => item._id === profileId);
    return (setProposalUser(userData ? userData : []));

}

//From EditQualification.js
export const saveEditQualificationFnc = (certificate, organization, summary, startYear, getUserLoginInfo, setLoadExperienceData, handleEditQualificationSave, setUpdateStatus) => {
    return (fetch('https://warm-anchorage-86355.herokuapp.com/editQualification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificate: certificate, organization: organization, certificateSummary: summary, certificateStartYear: startYear, id: getUserLoginInfo._id })
    }).then(res => res.json())
        .then(data => {
            setUpdateStatus(true);
            setLoadExperienceData(data);
            handleEditQualificationSave();
        }))
}

//From Qualification
export const qualificationFnc = (data, profileId, setProposalUser) => {
    const proposalUserData = data.find(item => item._id === profileId);
    return (setProposalUser(proposalUserData ? proposalUserData.editQualification : []));
}


//From ProfileBlock.js
export const profileBlockFnc = (userData, userLoginInfo, setPostData) => {
    const finalData = userData && userData.find(data => data.email === userLoginInfo.email);
    if (finalData) {
        const { profileEdit, imageFile, name, _id, editExperience, editEducation, editQualification, joiningDate } = finalData;
        const { headline, summery, hourlyRate } = profileEdit;

        const { experienceTitle, companyName, jobStartMonth, jobStartYear, jobEndMonth, jobEndYear, jobSummary } = editExperience;

        const { countryName, universityName, degree, startYear, endYear } = editEducation;
        const { certificate, organization, certificateSummary, certificateStartYear } = editQualification;
        const { img } = imageFile;
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
                certificateStartYear: certificateStartYear,
                joiningDate: joiningDate,

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
                certificateStartYear: certificateStartYear,
                joiningDate: joiningDate,
            })
        }
    }
    return (setPostData)
}


