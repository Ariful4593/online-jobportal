import React from 'react'

export default function MyQualification({ profileData }) {
    return (
        <React.Fragment>
            {
                (
                    profileData[0].editQualification.certificate &&
                    profileData[0].editQualification.certificateStartYear &&
                    profileData[0].editQualification.certificateSummary &&
                    profileData[0].editQualification.organization
                ) ?
                    <React.Fragment>
                        <h5>{profileData[0].editQualification.certificate}</h5>
                        <p>{profileData[0].editQualification.organization}</p>
                        <p>{profileData[0].editQualification.certificateStartYear}</p>
                        <p>{profileData[0].editQualification.certificateSummary}</p>
                    </React.Fragment>
                    : <p>No qualifications have been added yet.</p>
            }
        </React.Fragment>
    )
}
