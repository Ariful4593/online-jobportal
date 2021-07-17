import React from 'react';
import './BidPerMilestone.css';
import ratingImg from '../../../images/account analytics/rating per skill.svg';
const BidPerMilestone = () => {
    return (
        <div className="bid-per-skill-area ">
            <ul className="bid-per-skill-title-area">
                <li>
                    <h6 className="bid-per-skills">Bids per milestone
</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="bid-per-skill-item">
                <li>
                    <img src={ratingImg} alt="" />
                </li>
                <li>
                    <small>You have not received a milestone recently. Keep bidding!</small>
                </li>
            </ul>
        </div>
    );
};

export default BidPerMilestone;