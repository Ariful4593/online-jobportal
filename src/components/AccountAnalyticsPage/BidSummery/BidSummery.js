import React from 'react';
import './BidSummery.css';
import BidSummeryChart from './BidSummeryChart';
const BidSummery = () => {
    return (
        <div className="bid-summery-area ">
            <ul className="bid-summery-title-area">
                <li>
                    <h6 className="bid-summerys">Bid summery</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="bid-summery-item">
                <BidSummeryChart />
            </ul>
        </div>
    );
};

export default BidSummery;