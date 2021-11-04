import React from 'react';
import ProjectType from '../ProjectType/ProjectType';
import Skills from '../Skills/Skills';
import EditProfileSkill from '../EditProfileSkill/EditProfileSkill';
import Price from '../Price/Price';
import AddLocation from '../AddLocation/AddLocation.js';
import './LeftSidebar.css';
import LanguagesArea from '../LanguagesArea/LanguagesArea';
const LeftSidebar = ({setPricingPost}) => {
    return (
        <div>
            <div className="project-area-contest">
                <ul>
                    <li id="project" disabled>Project</li>
                    {/* <li>Contest</li> */}
                </ul>
            </div>
            <ProjectType setPricingPost={setPricingPost}/>

            <Skills/>

            <EditProfileSkill/>

            <Price/>

            <AddLocation/>

            <LanguagesArea/>
        </div>
    );
};

export default LeftSidebar;