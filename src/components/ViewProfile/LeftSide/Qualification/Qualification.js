import React, { useContext } from 'react';
import './Qualification.css';
import { collectionContext } from '../../../../App';
import MyQualification from './MyQualification';
import RandomQualification from './RandomQualification';

const Qualification = ({ handleEditQualification, profileId, proposalUser }) => {


    const { value7 } = useContext(collectionContext);
    const [profileData,] = value7;

    return (
        <div className="qualification-block">
            <div className="single-add-block">
                <div className="row">
                    <div className="col-md-6 qualification">
                        <h4>Qualification</h4>
                    </div>
                    {
                        !profileId && <div className="col-md-6 text-end add-qualification">
                            <button className="add-button" onClick={() => handleEditQualification()}>Add Qualification</button>
                        </div>
                    }

                </div>
            </div>

            <hr />
            <div className="single-row-block">
                <div className="row">
                    <div className="col-12 qualification-image-area">
                        {
                            proposalUser.length < 1 && profileData.length > 0 && !profileId ?
                                <MyQualification profileData={profileData} />
                                :
                                <RandomQualification proposalUser={proposalUser} />
                        }
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Qualification;