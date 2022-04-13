import React from 'react';
import NextButton from '../NextButton/NextButton';
// import UploadFiles from '../UploadFiles/UploadFiles';

const ProjectFullForm = ({  post, counter, setCounter, handleBlur, count, handleFileChange }) => {
    return (
        <div className="col-12">

            <label htmlFor=""><h4>Choose a name for your project</h4></label>
            <br />

            <input defaultValue="" placeholder="e.g Build me a website" className="w-100 form-title form-control" name="title" onChange={handleBlur} />

            <br />
            <label htmlFor=""><h4>Tell us more about your project</h4></label>
            <br />

            <p>Start with a bit about yourself or your business, and include an overview of what you need done.</p>

            <textarea rows="4" className="form-control" placeholder="Describe your project here..." name="description" onChange={handleBlur}></textarea>

            <p className="character-counter"><small style={{fontWeight: 'bold'}}>Now {post.description.length} character. It should be 31 - 4000 character</small></p>

            {/* <UploadFiles handleFileChange={handleFileChange} /> */}
            {
                count > 30 && post.title.length > 5 && counter < 1 && <NextButton counter={counter} setCounter={setCounter} />
            }
        </div>
    );
};

export default React.memo(ProjectFullForm);