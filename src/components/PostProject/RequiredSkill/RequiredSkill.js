import React from 'react';
import './RequiredSkill.css';
const RequiredSkill = () => {
    return (
        <div className="required-skill">
            <h4>What skills are required?</h4>
            <p>Enter up to 5 skills that best describe your project. Freelancers will use these skills to find projects they are most interested and experienced in.</p>
            <p><input className="w-100" placeholder="Enter Skill here..." type="text" /></p>
        </div>
    );
};

export default RequiredSkill;