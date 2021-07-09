import React from 'react';
import { useContext, useCallback } from 'react';
import { collectionContext } from '../../../App';
import NextButton from '../NextButton/NextButton';
import ChipInput from "material-ui-chip-input";
import './RequiredSkill.css';


const defaultValue = ["HTML5", "CSS3"];
const RequiredSkill = ({ setCounter }) => {
    const { value1 } = useContext(collectionContext)
    const [loginInfo, setLoginInfo] = value1;
    const handleBlur = useCallback((e) => {
        const skill = { ...loginInfo };
        skill.skillData = e
        setLoginInfo(skill)
    }, [])


    return (
        <div className="col-sm-12 mt-4">
            <div className="required-skill">
                <h4>What skills are required?</h4>
                <p>Enter up to 5 skills that best describe your project. Freelancers will use these skills to find projects they are most interested and experienced in.</p>
            </div>
            <div className="mb-3 p-0">
                <ChipInput defaultValue={defaultValue} onChange={(e) => handleBlur(e)} label="Add Skill" />
            </div>
            <NextButton setCounter={setCounter} />
        </div>
    );
};

export default React.memo(RequiredSkill);