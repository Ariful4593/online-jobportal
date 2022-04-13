import React, { useContext } from 'react';
import './ProfileDetails.css';
import { collectionContext } from '../../../../App';
import ProfileImg from './ProfileImg';
import OnlineStatus from './OnlineStatus';
import EditProfileNameSection from './EditProfileNameSection';
import Designation from './Designation';
import Cta from './Cta';
import DesignationSummary from './DesignationSummary';



const ProfileDetails = ({ editProfile, profileId, proposalUser }) => {


    const { value7 } = useContext(collectionContext);
    const [profileData,] = value7;

    
    return (
        <div className="profile-details">
            {
                (proposalUser.length < 1 && profileData.length > 0 && !profileId) ?
                    <div className="row">
                        <div className="col-12 col-sm-4 profile-block-area">
                            <ProfileImg profileData={profileData} />
                            <OnlineStatus profileData={profileData} />
                        </div>
                        <div className="col-12 col-sm-8 mt-2">
                            <EditProfileNameSection proposalUser={proposalUser} profileData={profileData} editProfile={editProfile} />
                            <Designation profileData={profileData} />

                            <Cta />

                            <br />
                            <DesignationSummary profileData={profileData} />
                        </div>
                    </div>
                    :
                    proposalUser.length > 0 && profileId && <div className="row">
                        <div className="col-12 col-sm-4">
                            <ProfileImg profileData={proposalUser} />
                            <OnlineStatus profileData={proposalUser} />
                        </div>
                        <div className="col-12 col-sm-8 mt-2">

                            <EditProfileNameSection proposalUser={!proposalUser} profileData={proposalUser} editProfile={editProfile} />
                            <Designation profileData={proposalUser} />

                            <Cta />

                            <br />
                            <DesignationSummary profileData={proposalUser} />
                        </div>
                    </div>

            }


            {/* Proposal user */}

        </div>
    );
};

export default ProfileDetails;