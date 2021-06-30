import React from 'react';
import AboutTheClient from './AboutTheClient/AboutTheClient';
import ProjectBid from './ProjectBid/ProjectBid';
import ProjectDetailsTitleArea from './ProjectDetailsTitleArea/ProjectDetailsTitleArea';
import './SinglePost.css';
import YourBid from './YourBid/YourBid';
const SinglePost = ({ id }) => {
    const getSessionData = JSON.parse(sessionStorage.getItem('data'));
    const singlePostData = getSessionData.find(data => data._id === id)
    return (
        <div className="single-post">
            <div className="row">
                <div className="col-12 project-title">
                    <h1>{singlePostData.orderProject.title}</h1>
                </div>
            </div>
            <div className="details-post">
                <div className="row">
                    <div className="col-md-9 project-details-area mt-4">
                        <ProjectDetailsTitleArea singlePostData={singlePostData} />
                        <ProjectBid />
                    </div>
                    <div className="col-md-3 ">
                        <AboutTheClient />
                        <YourBid />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SinglePost;