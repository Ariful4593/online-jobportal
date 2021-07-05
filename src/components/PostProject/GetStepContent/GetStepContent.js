import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { collectionContext } from '../../../App';
import ProjectType from '../../PostedJob/ProjectType/ProjectType';
import Budget from '../Budget/Budget';
import ChoosePostingArea from '../ChoosePosting/ChoosePostingArea';
import HowToPay from '../HowToPay/HowToPay';
import PostReview from '../PostReview/PostReview';
import ProjectForm from '../ProjectForm/ProjectForm';
import RequiredSkill from '../RequiredSkill/RequiredSkill';


function getSteps() {
    return ["Select campaign settings", "Create an ad group", "Create an ad"];
}
const GetStepContent = (step) => {
    const { value1 } = useContext(collectionContext)
    const [, setLoginInfo] = value1;
    const [file, setFile] = useState(null);
    const steps = getSteps();
    const [activeStep, setActiveStep] = useState(0);
    const [counter, setCounter] = useState(0)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }




    const [count, setCount] = useState(0);
    // const history = useHistory()
    const [post, setPost] = useState({
        title: '',
        description: ''
    })


    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleBlur = (e) => {
        let isFieldValid;
        if (e.target.name === 'title') {
            isFieldValid = e.target.value
        }
        if (e.target.name === 'description') {
            isFieldValid = e.target.value
        }
        if (isFieldValid) {
            const newPostInfo = { ...post }
            newPostInfo[e.target.name] = e.target.value
            setPost(newPostInfo)
        }
    }

    useEffect(() => {
        const description = post.description;
        setCount(description.length)
        setLoginInfo(post, file);
    }, [post.description])


    switch (step) {
        case 0:
            return <ProjectForm count={count} handleFileChange={handleFileChange} handleBlur={handleBlur} post={post}  />
        case 1:
            return <RequiredSkill setCounter={setCounter} />
        case 2:
            return <ChoosePostingArea setCounter={setCounter} />
        case 3:
            return <HowToPay setCounter={setCounter} />
        case 4:
            return <Budget setCounter={setCounter} />
        case 5:
            return <ProjectType setCounter={setCounter} />
        case 6:
            return <PostReview setCounter={setCounter} />
        default:
            return "Unknown Step";
    }
}

export default GetStepContent;