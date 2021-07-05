import React, { useContext } from 'react';
import './PostReview.css';
import Skills from '../../PostedJob/Skills/Skills';
import projectIcon from '../../../images/trusted/project-icon.svg';
import YesPostMyProject from '../YesPostMyProject/YesPostMyProject';
import { collectionContext } from '../../../App';
const PostReview = ({ file }) => {
    const { value1 } = useContext(collectionContext)
    const [loginInfo] = value1;
    const { title, description, skillData } = loginInfo;
    return (
        <div>
            {
                <div className="review-post-area">
                    <h4>Are these details correct?</h4>
                    <div className="row d-flex align-items-center review-post">
                        <div className="col-md-4 project-icon">
                            <img className="" src={projectIcon} alt="" />
                            <h5>Project</h5>
                            <p><small>$250.00 – 750.00 USD</small></p>
                        </div>
                        <div className="col-md-8">
                            <div className="review-post-content">
                                <h4 className="review-post-title">{title}</h4>
                                <p className="review-post-description">{description}</p>
                                <Skills skillData={skillData} />
                            </div>
                        </div>
                    </div>
                </div>
            }
            <YesPostMyProject file={file} />
        </div>
    );
};

export default React.memo(PostReview);