import React from 'react';
import './TotalBid.css';
const TotalBid = ({ biddingCount }) => {
    const price = biddingCount && biddingCount.reduce((total, bid) => total + Number(bid.bidAmount), 0);
    return (
        <div className="row your-bid-area mt-4 text-center p-2">
            <div className="col-6 -md-6 border-right" style={{ borderRight: '1px solid lightslategrey' }}>
                <h6 className="mb-0" >Bids</h6>
                <p className="mb-0">{biddingCount.length}</p>
            </div>
            <div className="col-6 col-md-6">
                <h6 className="mb-0">Avg bid</h6>
                <p className="mb-0">{biddingCount.length === 0 ? '$0.00 USD' : `$${price/biddingCount.length}.00 USD`}</p>
            </div>
        </div>
    );
};

export default TotalBid;