import React from 'react';
import './TotalEarnings.css';
const TotalEarnings = () => {
    return (
        <div className="total-earning-area ">
            <ul className="total-earning-title-area">
                <li>
                    <h6 className="total-earnings">Total earnings</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="total-earning-item">
                <li>
                    <h4>$0.00</h4>
                </li>
                <li>
                    <p>YOUR TOTAL EARNINGS SINCE JOINING FREELANCER</p>
                </li>

                <hr />

                <li>
                    <h4>$0.00</h4>
                </li>
                <li>
                    <p>YOUR TOTAL EARNINGS FROM THE PAST 30 DAYS</p>
                </li>
            </ul>
        </div>
    );
};

export default TotalEarnings;