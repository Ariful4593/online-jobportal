import React from 'react';
import './ChoosePosting.css';
import projectIcon from '../../../images/trusted/project-icon.svg';
import contestIcon from '../../../images/trusted/contest-icon.svg';
import fixedPrice from '../../../images/trusted/fixed-price-project.svg';
import hourlyPrice from '../../../images/trusted/hourly-price-project.svg';
import recruiter from '../../../images/trusted/recruiter-001.svg';

import HowToPay from '../HowToPay/HowToPay';
import Budget from '../Budget/Budget';
import ProjectType from '../../PostProject/ProjectType/ProjectType';
import PostReview from '../PostReview/PostReview';
import YesPostMyProject from '../YesPostMyProject/YesPostMyProject';
import PostPolicy from '../PostPolicy/PostPolicy';
const ChoosePosting = () => {
    return (
        <div className="choose-posting">
            <div className="row">
                <h4 className="p-0">How would you like to get it done?</h4>
                <div className="choose-item">
                    <div className="choose-item-content">
                        <p>Based on the description you have written, we recommend posting a contest. Contests are great for when you want to crowdsource the best ideas.</p>
                    </div>
                </div>
                <div className="col-md-6 category">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 text-center">
                            <img src={projectIcon} alt="" />
                        </div>
                        <div className="col-md-8">
                            <h6 className="project">Post a project</h6>
                            <small>Recieve free quotes, best for when you have a specific idea, the project is not visual in nature or the project is complex.</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 category">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 text-center">
                            <img src={contestIcon} alt="" />
                        </div>
                        <div className="col-md-8">
                            <h6 className="contest">Start a contest</h6>
                            <small>Crowdsource ideas. Post a prize and get competing entries which you can iterate on with feedback. Great for visuals designs.</small>
                        </div>
                    </div>
                </div>
                <HowToPay fixedPrice={fixedPrice} hourlyPrice={hourlyPrice} />
                <Budget />
                <ProjectType projectIcon={projectIcon} recruiter={recruiter} />
                <PostReview />
                <YesPostMyProject />
                <hr />
                <PostPolicy />
            </div>
        </div>
    );
};

export default ChoosePosting;