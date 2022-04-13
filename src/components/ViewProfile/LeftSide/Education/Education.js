import React, { useEffect, useState, useContext } from 'react';
import './Education.css';
import { collectionContext } from '../../../../App';
import MyEducation from './MyEducation';
import RandomEducation from './RandomEducation';

const Education = ({ handleEditEducation, profileId, proposalUser }) => {

    const { value7 } = useContext(collectionContext);
    const [profileData,] = value7;
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < 3) {
            setTimeout(() => setCounter(counter + 1), 1000);
        }
    });
    return (
        <div className="education-block">
            <div className="single-add-block">
                <div className="row">
                    <div className="col-md-6 education">
                        <h4>Education</h4>
                    </div>
                    {
                        !profileId && <div className="col-md-6 text-end add-education">
                            <button className="add-button" onClick={() => handleEditEducation()}>Add Education</button>
                        </div>
                    }

                </div>
            </div>

            <hr />
            <div className="single-row-block">
                <div className="row">
                    <div className="col-12 education-image-area">
                        {
                            proposalUser.length < 1 && profileData.length > 0 && !profileId ?
                                <MyEducation profileData={profileData} />
                                :
                                <RandomEducation proposalUser={proposalUser} />
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;