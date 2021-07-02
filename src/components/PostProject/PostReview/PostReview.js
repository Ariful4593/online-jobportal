import React from 'react';
import './PostReview.css';
import Skills from '../../PostedJob/Skills/Skills';
import projectIcon from '../../../images/trusted/project-icon.svg';
const PostReview = () => {
    return (
        <div className="review-post">
            <div className="row d-flex align-items-center">
                <div className="col-md-4 project-icon">
                    <img className="" src={projectIcon} alt="" />
                    <h5>Project</h5>
                    <p><small>$250.00 – 750.00 USD</small></p>
                </div>
                <div className="col-md-8">
                    <div className="review-post-content">
                        <h4 className="review-post-title">Athena Design</h4>
                        <p className="review-post-description">i need urgently a web developer</p>
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostReview;