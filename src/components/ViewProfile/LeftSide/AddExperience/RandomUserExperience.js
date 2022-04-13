import React from 'react'

export default function RandomUserExperience({ proposalUser }) {
    return (
        <React.Fragment>
            {
                proposalUser.length > 0 &&
                    (
                        proposalUser[0].editExperience.experienceTitle &&
                        proposalUser[0].editExperience.companyName &&
                        proposalUser[0].editExperience.jobStartMonth &&
                        proposalUser[0].editExperience.jobStartYear &&
                        proposalUser[0].editExperience.jobEndMonth &&
                        proposalUser[0].editExperience.jobEndYear &&
                        proposalUser[0].editExperience.jobSummary
                    )
                    ?
                    <React.Fragment>
                        <h5>{proposalUser[0].editExperience.experienceTitle}</h5>
                        <h6>{proposalUser[0].editExperience.companyName}</h6>
                        <p>{`${proposalUser[0].editExperience.jobStartMonth} ${proposalUser[0].editExperience.jobStartYear} - ${proposalUser[0].editExperience.jobEndMonth} ${proposalUser[0].editExperience.jobEndYear}`}</p>
                        <p>{proposalUser[0].editExperience.jobSummary}</p>
                    </React.Fragment> :
                    <p>No experience have been added yet</p>
            }
        </React.Fragment>
    )
}
