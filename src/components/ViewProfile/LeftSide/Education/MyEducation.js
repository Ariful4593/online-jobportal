import React from 'react'

export default function MyEducation({ profileData }) {
    return (
        <React.Fragment>

            {
                (
                    profileData[0].editEducation.universityName &&
                    profileData[0].editEducation.countryName &&
                    profileData[0].editEducation.startYear &&
                    profileData[0].editEducation.endYear) ?
                    <React.Fragment>
                        <h5>{profileData[0].editEducation.degree}</h5>
                        <p>
                            {`${profileData[0].editEducation.universityName}, ${profileData[0].editEducation.countryName}`}
                        </p>
                        <p>{profileData[0].editEducation.startYear} - {profileData[0].editEducation.endYear}</p>
                    </React.Fragment> : <p>No education have been added yet</p>
            }
        </React.Fragment>
    )
}
