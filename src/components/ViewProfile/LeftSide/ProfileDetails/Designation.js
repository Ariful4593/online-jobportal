import React from 'react'

export default function Designation({ profileData }) {
    return (
        <>
            {
                <h6 className="user-pro-title">{profileData[0].profileEdit.headline}</h6>
            }
        </>
    )
}
