import React from 'react';
import './EarningsOverTime.css';
import wallet from '../../../images/account analytics/wallet.svg';
const EarningsOverTime = () => {
    return (
        <div className="earning-over-time-area ">
            <ul className="earning-over-time-title-area">
                <li>
                    <h6 className="earning-over-times">Earnings over time</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="earning-over-time-item">
                <li>
                    <img src={wallet} alt="" />
                </li>
                <li>
                    <small>It looks like you have not earned yet on Freelancer.</small>
                </li>
            </ul>
        </div>
    );
};

export default EarningsOverTime;