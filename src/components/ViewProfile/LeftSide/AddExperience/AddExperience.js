import React, { useContext } from 'react';
import './AddExperience.css';
import { collectionContext } from '../../../../App';
import MyExperience from './MyExperience';
import RandomUserExperience from './RandomUserExperience';


const AddExperience = ({ handleEditExperience, profileId, proposalUser }) => {


    const { value7 } = useContext(collectionContext);
    const [profileData,] = value7;


    return (
        <div className="add-experience-block">
            <div className="single-add-block">
                <div className="row">
                    <div className="col-sm-6 experience">
                        <h4>Experience</h4>
                    </div>
                    {
                        !profileId && <div className="col-sm-6 text-end add-experience">
                            <button className="add-button" onClick={() => handleEditExperience()}>Add Experience</button>
                        </div>
                    }

                </div>
            </div>
            <hr />
            <div className="single-row-block">
                <div className="row">
                    <div className="col-12 add-experience-image-area">
                        {
                            proposalUser.length < 1 && profileData.length > 0 && !profileId ?
                                <MyExperience profileData={profileData} />
                                :
                                <RandomUserExperience proposalUser={proposalUser} />
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddExperience;