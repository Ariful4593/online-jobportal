import React from 'react';

const EditProfileSkill = () => {
    return (
        <div className="edit-profile-skill">
            <ul>
                <li>
                    <h6>Edit Profile Skills</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul>
                <li>
                    <h6>Listing Types</h6>
                </li>
                <li>
                    <input type="checkbox" name="checkox" id="" /> <label htmlFor="">Featured</label>
                </li>
                <li>
                    <input type="checkbox" name="checkox" id="" /> <label htmlFor=""> Sealed</label>
                </li>
                <li>
                    <input type="checkbox" name="checkox" id="" /> <label htmlFor="">NDA</label>
                </li>
                <li>
                    <input type="checkbox" name="checkox" id="" /> <label htmlFor=""> Urgent</label>
                </li>
                <li>
                    <input type="checkbox" name="checkox" id="" /> <label htmlFor="">Fulltime</label>
                </li>
                <li>
                    <input type="checkbox" name="checkox" id="" /> <label htmlFor=""> Recruiter</label>
                </li>
            </ul>
            <hr className="hr" />
        </div>
    );
};

export default EditProfileSkill;