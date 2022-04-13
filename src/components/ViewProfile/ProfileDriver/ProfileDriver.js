//From EditProfile

export const userDataFnc = (data, getUserLogin, setUserProfileData) => {
    // const userData = data.find(item => item.email === getUserLogin.email);
    // setUserProfileData(userData);
    // localStorage.setItem('userLoginInfo', JSON.stringify(userData));
    // return (setUserProfileData);
}

export const userDataFnc1 = (getUserLogin, setUserName, setTitle, setDescription, setRate) => {
    const { name, profileEdit } = getUserLogin;
    setUserName(name)
    setTitle(profileEdit ? profileEdit.headline : '');
    setDescription(profileEdit ? profileEdit.summery : '');
    setRate(Number(profileEdit ? profileEdit.hourlyRate : ''));
    return (setUserName, setTitle, setDescription, setRate);
}

export const handleEditProfileFnc = (title, description, rate, profileData, profileSave, setUpdateStatus, setProfileData, setLoadingDot) => {
    return (
        fetch('https://online-jobplace.herokuapp.com/add-profile-info', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, description: description, rate: rate, id: profileData[0]._id })
        })
            .then(res => res.json())
            .then(data => {
                setLoadingDot(false);
                setProfileData(data);
                setUpdateStatus(true);
                profileSave();
            })
    )
}


//From EditEducation.js
export const editEducationSaveFnc = (country, university, degree, startYear, endYear, profileData, setUpdateStatus, handleEditEducationSave, setProfileData) => {
    return (fetch('https://online-jobplace.herokuapp.com/editEducation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ countryName: country, universityName: university, degree: degree, startYear: startYear, endYear: endYear, id: profileData[0]._id })
    }).then(res => res.json())
        .then(data => {
            setProfileData(data);
            setUpdateStatus(true);
            handleEditEducationSave();
        }))
}



//From ProfileDetails.js
export const profileDetailsFnc = (profileId, setProposalUser, setUpdateStatus) => {
    try {
        async function getData() {
            const response = await fetch(`https://online-jobplace.herokuapp.com/alluser/${profileId}`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })
            const data = await response.json();
            setProposalUser(data[0]);
            setUpdateStatus(false);
        }
        getData();
    } catch {

    }


}

//From EditQualification.js
export const saveEditQualificationFnc = (certificate, organization, summary, startYear, profileData, handleEditQualificationSave, setUpdateStatus, setProfileData) => {
    return (fetch('https://online-jobplace.herokuapp.com/editQualification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificate: certificate, organization: organization, certificateSummary: summary, certificateStartYear: startYear, id: profileData[0]._id })
    }).then(res => res.json())
        .then(data => {
            setProfileData(data);
            setUpdateStatus(true);
            handleEditQualificationSave();
        }))
}

//From Qualification
export const qualificationFnc = (data, profileId, setProposalUser) => {
    // const proposalUserData = data.find(item => item._id === profileId);
    // return (setProposalUser(proposalUserData ? proposalUserData.editQualification : []));
}





