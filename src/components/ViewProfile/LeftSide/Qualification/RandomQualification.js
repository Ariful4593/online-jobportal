import React from 'react'

export default function RandomQualification({ proposalUser }) {
    return (
        <React.Fragment>
            {
                proposalUser.length > 0 &&
                    (
                        proposalUser[0].editQualification.certificate &&
                        proposalUser[0].editQualification.certificateStartYear &&
                        proposalUser[0].editQualification.certificateSummary &&
                        proposalUser[0].editQualification.organization
                    ) ?
                    <React.Fragment>
                        <h5>{proposalUser[0].editQualification.certificate}</h5>
                        <p>{proposalUser[0].editQualification.organization}</p>
                        <p>{proposalUser[0].editQualification.certificateStartYear}</p>
                        <p>{proposalUser[0].editQualification.certificateSummary}</p>
                    </React.Fragment>
                    : <p>No qualifications have been added yet.</p>
            }
        </React.Fragment>
    )
}
