import React from 'react';
import { useForm } from "react-hook-form";
import ChoosePosting from '../ChoosePosting/ChoosePosting';
import NextButton from '../NextButton/NextButton';
import RequiredSkill from '../RequiredSkill/RequiredSkill';
import UploadFiles from '../UploadFiles/UploadFiles';
import './ProjectForm.css';
const ProjectForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className="col-12 choose-project-area">
            <div className="row">
                <div className="col-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Choose a name for your project</label>
                        <br />
                        <input defaultValue="" placeholder="e.g Build me a website" {...register("title")} className="w-100 form-title" />
                        {errors.title && <span className="text-danger">The title is required</span>}
                        <br /><br />
                        <label htmlFor="">Tell us more about your project</label>
                        <br />
                        <p>Start with a bit about yourself or your business, and include an overview of what you need done.</p>
                        <textarea rows="4" placeholder="Describe your project here..." {...register("projectDescription", { required: true })} ></textarea>
                        {errors.projectDescription && <span className="text-danger">This field is required</span>}
                        <br /><br />
                        {/* <div className="btn-area">
                    <input type="submit" className="submit-btn" />
                </div> */}
                    </form>
                </div>
            </div>

            <UploadFiles />
            <NextButton />
            <RequiredSkill />

            <NextButton />
            <ChoosePosting />
            
        </div>
    );
};

export default ProjectForm;