import React from 'react';
import './EarningPerClient.css';
import wallet from '../../../images/account analytics/wallet.svg';
const EarningPerClient = () => {
    return (
        <div className="earning-per-skill-area ">
            <ul className="earning-per-skill-title-area">
                <li>
                    <h6 className="earning-per-skills">Earnings per client</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="earning-per-skill-item">
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

export default EarningPerClient;