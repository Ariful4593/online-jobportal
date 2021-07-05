import React from 'react';
import { useState } from 'react';
import ChoosePostingArea from '../ChoosePosting/ChoosePostingArea';
import RequiredSkill from '../RequiredSkill/RequiredSkill';
import HowToPay from '../HowToPay/HowToPay';
import './ProjectForm.css';
import Budget from '../Budget/Budget';
import ProjectType from '../ProjectType/ProjectType';
import PostReview from '../PostReview/PostReview';
import ProjectFullForm from './ProjectFullForm';
const ProjectForm = ({ count, handleBlur, post, handleFileChange, file }) => {

    const [counter, setCounter] = useState(0)

    return (
        <div className="col-12 choose-project-area">
            <div className="row">
                <ProjectFullForm post={post} counter={counter} setCounter={setCounter} handleBlur={handleBlur} count={count} handleFileChange={handleFileChange} />
            </div>

            {
                counter === 1 && <RequiredSkill setCounter={setCounter} />
            }

            {
                counter === 2 && <ChoosePostingArea setCounter={setCounter} />
            }
            {
                counter === 3 && <HowToPay setCounter={setCounter} />
            }
            {
                counter === 4 && <Budget setCounter={setCounter} />
            }
            {
                counter === 5 && <ProjectType setCounter={setCounter} />
            }
            {
                counter === 6 && <PostReview file={file} setCounter={setCounter} />
            }

        </div>
    );
};

export default React.memo(ProjectForm);