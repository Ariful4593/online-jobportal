import React, { useEffect, useState } from 'react';
import './YourBid.css';
import { Link } from 'react-router-dom';
import { newUserBid } from '../SinglePostDriver/SinglePostDriver';


const YourBid = () => {
    let getSessionData = JSON.parse(sessionStorage.getItem('data'));
    let getUserData = JSON.parse(localStorage.getItem('userLoginInfo'));

    const [userBid, setUserBid] = useState([])
    let bidList = [];
    useEffect(() => {
        newUserBid(getSessionData, getUserData, bidList, setUserBid);
    }, [])
    return (
        <div className="your-bid-area mt-4">
            <div className="about-your-bid">
                <h6>Your Bids <span className="member">Free Member</span></h6>
            </div>
            <div className="your-bid-details">
                <p><span className="bid-counter">{userBid.length} bids</span> left out of 6</p>
                <p><span className="bidding-day">4 days, 15 hours</span> until next additional bid (1x replenishment rate)</p>
                <button className="bid-insights"><Link className="text-dark" to="/bidinsights">View Bid Insights</Link> </button>
            </div>
        </div>
    );
};

export default YourBid;