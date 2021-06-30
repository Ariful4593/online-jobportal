import React from 'react';
import './YourBid.css';
const YourBid = () => {
    return (
        <div className="your-bid-area mt-4">
            <div className="about-your-bid">
                <h6>Your Bids <span className="member">Free Member</span></h6> 
            </div>
            <div className="your-bid-details">
                <p><span className="bid-counter">4 bids</span> left out of 6</p>
                <p><span className="bidding-day">4 days, 15 hours</span> until next additional bid (1x replenishment rate)</p>
                <button className="bid-insights">View Bid Insights</button>
            </div>
        </div>
    );
};

export default YourBid;