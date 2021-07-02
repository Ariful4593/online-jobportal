import React from 'react';
import './Price.css';
const Price = () => {
    return (
        <>
            <div className="fixed-price">
                <ul>
                    <li>
                        <h6>Fixed Price</h6>
                    </li>
                    <li>
                        <input type="range" id="vol" name="vol" min="0" max="100" />
                    </li>
                </ul>
                <hr className="hr" />
            </div>

            <div className="hourly-price">
                <ul>
                    <li>
                        <h6>Hourly Price</h6>
                    </li>
                    <li>
                        <input type="range" id="vol" name="vol" min="0" max="100" />
                    </li>
                </ul>
                <hr className="hr" />
            </div>
        </>
    );
};

export default Price;