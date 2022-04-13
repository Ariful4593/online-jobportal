import React from 'react'

export default function RandomEducation({ proposalUser }) {
    return (
        <React.Fragment>
            {
                proposalUser.length > 0 &&
                    (
                        proposalUser[0].editEducation.universityName &&
                        proposalUser[0].editEducation.countryName &&
                        proposalUser[0].editEducation.startYear &&
                        proposalUser[0].editEducation.endYear
                    ) ?
                    <React.Fragment>
                        <h5>{proposalUser[0].editEducation.degree}</h5>
                        <p>
                            {`${proposalUser[0].editEducation.universityName}, ${proposalUser[0].editEducation.countryName}`}
                        </p>
                        <p>{proposalUser[0].editEducation.startYear} - {proposalUser[0].editEducation.endYear}</p>
                    </React.Fragment> : <p>No education have been added yet.</p>

            }
        </React.Fragment>
    )
}
