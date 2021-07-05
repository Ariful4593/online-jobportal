import React from 'react';
import editProfileSkillData from '../../../fakedata/postedJobData/editProfileSkillData';
const EditProfileSkill = () => {
    return (
        <div className="edit-profile-skill">
            <div>
                <ul>
                    <li>
                        <h6>{editProfileSkillData.title}</h6>
                    </li>
                </ul>
                <hr className="hr" />

                <ul>
                    <li>
                        <h6>{editProfileSkillData.type}</h6>
                    </li>
                    {
                        editProfileSkillData.skill.map((data, index) => (
                            <li key={index}>
                                <input type="checkbox" name="checkox" /> <label htmlFor="">{data}</label>
                            </li>
                        ))
                    }

                </ul>
            </div>
            <hr className="hr" />
        </div>
    );
};

export default EditProfileSkill;