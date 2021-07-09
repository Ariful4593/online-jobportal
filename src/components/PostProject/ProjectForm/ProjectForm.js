import React, { useContext } from 'react';
import { useState } from 'react';
import ChoosePostingArea from '../ChoosePosting/ChoosePostingArea';
import RequiredSkill from '../RequiredSkill/RequiredSkill';
import './ProjectForm.css';
import ProjectFullForm from './ProjectFullForm';
import { collectionContext } from '../../../App';
const ProjectForm = ({ count, handleBlur, post, handleFileChange, file }) => {

    const { value1 } = useContext(collectionContext);
    const [loginInfo, setLoginInfo] = value1;


    const [counter, setCounter] = useState(0);
    const [currentCategory, setCurrentCategory] = useState('');
    const [postingBgColor, setPostingBgColor] = useState('')
    const handleCategory = (categoryType, data) => {
        setCurrentCategory(categoryType)
        setPostingBgColor(categoryType);


        const postType = { ...loginInfo };
        postType.postType = data.choosePostTitle;
        setLoginInfo(postType);
    }

    return (
        <div className="col-12 choose-project-area">
            <div className="row">
                <ProjectFullForm
                    post={post}
                    counter={counter}
                    setCounter={setCounter}
                    handleBlur={handleBlur}
                    count={count}
                    handleFileChange={handleFileChange}
                />

                {
                    counter === 1 && <RequiredSkill setCounter={setCounter} />
                }


                {
                    counter === 2 &&
                    <ChoosePostingArea
                        setCounter={setCounter}
                        handleCategory={handleCategory}
                        currentCategory={currentCategory}
                        setCurrentCategory={setCurrentCategory}
                        file={file}
                        postingBgColor={postingBgColor}
                    />
                }
            </div>

        </div>
    );
};

export default React.memo(ProjectForm);