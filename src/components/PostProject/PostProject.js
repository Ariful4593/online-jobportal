import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { collectionContext } from '../../App';
import freelancerlogo from '../../images/trusted/freelancer-logo-light.svg';
import './PostProject.css';
import ProjectForm from './ProjectForm/ProjectForm';
const PostProject = () => {
    const { value1 } = useContext(collectionContext)
    const [loginInfo, setLoginInfo] = value1;

    const history = useHistory()
    const onSubmit = data => {
        const loginInfoWithProjectDetails = { ...loginInfo };
        loginInfoWithProjectDetails.orderProject = data;
        loginInfoWithProjectDetails.status = 'Pending';
        setLoginInfo(loginInfoWithProjectDetails)

        fetch('https://aqueous-river-54090.herokuapp.com/userData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginInfoWithProjectDetails)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        history.push('/pendingArea')
    };
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
                <ProjectForm onSubmit={onSubmit} />
            </div>
        </div>
    );
};

export default PostProject;