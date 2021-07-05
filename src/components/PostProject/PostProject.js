import React from 'react';
import { useEffect, useCallback } from 'react';
import { useState, useContext } from 'react';
import { collectionContext } from '../../App';
import freelancerlogo from '../../images/trusted/freelancer-logo-light.svg';
import './PostProject.css';
import ProjectForm from './ProjectForm/ProjectForm';
const PostProject = () => {
    const { value1 } = useContext(collectionContext)
    const [loginInfo, setLoginInfo] = value1;
    const [file, setFile] = useState(null);




    const [count, setCount] = useState(0);
    const [post, setPost] = useState({
        title: '',
        description: ''
    })


    const handleFileChange = useCallback((e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }, [])

    const handleBlur = useCallback((e) => {
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
    }, [post.description, post.title])

    useEffect(() => {
        const newLoginInfo = { ...loginInfo };
        newLoginInfo.title = post.title;
        newLoginInfo.description = post.description;
        const description = post.description;
        setCount(description.length)
        setLoginInfo(newLoginInfo);
    }, [post.description])

    return (
        <div className="container post-project-area">
            <div className="row">
                <div className="col-12 description">
                    <img src={freelancerlogo} alt="" />
                    <h1>Tell us what you need done</h1>
                    <p>Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.</p>
                </div>
            </div>
            <div className="row">
                <ProjectForm count={count} handleFileChange={handleFileChange} handleBlur={handleBlur} post={post} file={file} />
            </div>
        </div>
    );
};

export default PostProject;