import React from 'react';
import upload_image from '../../../../images/upload image/upload_image.png';

export default function ProfileImg({ profileData }) {
    return (
        <>
            {
                profileData[0].imageFile.img ?
                    <img className="profile-image" style={{ height: '276px' }} src={`data:image/png;base64,${profileData[0].imageFile.img}`} alt="" />
                    :
                    <img className="profile-image" style={{ height: '276px' }} src={`${upload_image}`} alt="" />
            }
        </>
    )
}
