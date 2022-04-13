import React from 'react'

export default function DesignationSummary({ profileData }) {
    return (
        <p>{profileData[0].profileEdit.summery}</p>
    )
}
