import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { collectionContext } from '../../App';
import './PostProject.css';
const PostProject = () => {
    const { value1 } = useContext(collectionContext)
    const [loginInfo, setLoginInfo] = value1;
    const { register, handleSubmit, formState: { errors } } = useForm();
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
        <div className="container mt-5 post-project-area">
            <div className="row">
                <div className="col-12 description">
                    <h1>Tell us what you need done</h1>
                    <p>Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 choose-project-area">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Choose a name for your project</label>
                        <br />
                        <input defaultValue="" placeholder="e.g Build me a website" {...register("title")} className="w-100" />
                        {errors.title && <span className="text-danger">The title is required</span>}
                        <br /><br />
                        <label htmlFor="">Tell us more about your project</label>
                        <br />
                        <p>Start with a bit about yourself or your business, and include an overview of what you need done.</p>
                        <textarea rows="4" placeholder="Describe your project here..." {...register("projectDescription", { required: true })} ></textarea>
                        {errors.projectDescription && <span className="text-danger">This field is required</span>}
                        <br /><br />
                        <div className="btn-area">
                            <input type="submit" className="submit-btn" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostProject;