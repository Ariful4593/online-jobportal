import React from 'react'

export default function MyExperience({ profileData }) {
    return (
        <React.Fragment>
            {
                (
                    profileData[0].editExperience.experienceTitle &&
                    profileData[0].editExperience.companyName &&
                    profileData[0].editExperience.jobStartMonth &&
                    profileData[0].editExperience.jobStartYear &&
                    profileData[0].editExperience.jobEndMonth &&
                    profileData[0].editExperience.jobEndYear)
                    ?
                    < React.Fragment >
                        <h5>{profileData[0].editExperience.experienceTitle}</h5>
                        <h6>{profileData[0].editExperience.companyName}</h6>
                        <p>{`${profileData[0].editExperience.jobStartMonth} ${profileData[0].editExperience.jobStartYear} - ${profileData[0].editExperience.jobEndMonth} ${profileData[0].editExperience.jobEndYear}`}</p>
                        <p>{profileData[0].editExperience.jobSummary}</p>
                    </React.Fragment> : <p>No experience have been added yet</p>

            }
        </React.Fragment>
    )
}
