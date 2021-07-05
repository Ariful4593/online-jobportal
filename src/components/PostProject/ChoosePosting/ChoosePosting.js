import React from 'react';
import projectIcon from '../../../images/trusted/project-icon.svg';
import fixedPrice from '../../../images/trusted/fixed-price-project.svg';
import hourlyPrice from '../../../images/trusted/hourly-price-project.svg';
import recruiter from '../../../images/trusted/recruiter-001.svg';
import HowToPay from '../HowToPay/HowToPay';
import Budget from '../Budget/Budget';
import ProjectType from '../../PostProject/ProjectType/ProjectType';
import PostReview from '../PostReview/PostReview';
import YesPostMyProject from '../YesPostMyProject/YesPostMyProject';
import PostPolicy from '../PostPolicy/PostPolicy';
import ChoosePostingArea from './ChoosePostingArea';
const ChoosePosting = () => {
    return (
        <div className="choose-posting">
            <div className="row">
                <ChoosePostingArea />
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