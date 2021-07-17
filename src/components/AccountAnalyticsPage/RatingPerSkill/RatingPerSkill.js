import React from 'react';
import './RatingPerSkill.css';
import ratingImg from '../../../images/account analytics/rating per skill.svg';
const RatingPerSkill = () => {
    return (
        <div className="rating-per-skill-area ">
            <ul className="rating-per-skill-title-area">
                <li>
                    <h6 className="rating-per-skills">Rating per skill</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="rating-per-skill-item">
                <li>
                    <img src={ratingImg} alt="" />
                </li>
                <li>
                    <small>It looks like you have not completed any jobs or received any ratings yet on Freelancer.</small>
                </li>
            </ul>
        </div>
    );
};

export default RatingPerSkill;