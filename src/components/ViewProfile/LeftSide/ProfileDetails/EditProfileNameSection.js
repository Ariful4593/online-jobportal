import React from 'react'
import VerificationItem from './VerificationItem'
import verificationTypeData from '../../../../fakedata/viewProfileData/rightSideData/verificationTypeData';
export default function EditProfileNameSection({ proposalUser, profileData, editProfile }) {
    return (
        <div className="row">
            <div className="col-sm-6 edit-profile-name">
                <h4 className="">{profileData[0].name}</h4>
            </div>
            <VerificationItem verificationTypeData={verificationTypeData} />
            {
                proposalUser && <div className="col-12 col-sm-6 profile-edit-profile-button">
                    <button className="" onClick={() => editProfile()}>Edit Profile</button>
                </div>
            }

        </div>
    )
}
