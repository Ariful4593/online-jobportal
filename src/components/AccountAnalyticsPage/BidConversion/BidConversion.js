import React from 'react';
import './BidConversion.css';
import BidConversionChart from './BidConversionChart';
const BidConversion = () => {

    return (
        <div className="bid-conversion-area ">
            <ul className="bid-conversion-title-area">
                <li>
                    <h6 className="bid-conversions">Bid conversion</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="bid-conversion-item">
                <BidConversionChart />
            </ul>
        </div>
    );
};

export default BidConversion;