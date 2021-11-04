import React from 'react';
import './Price.css';
const Price = () => {    
    const priceRange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <div className="fixed-prices">
                <ul>
                    <li>
                        <h6>Fixed Price</h6>
                    </li>
                    <li>
                        <input type="range" id="vol" name="vol" min="0" max="100" onChange={priceRange} disabled />
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
                        <input type="range" id="vol" name="vol" min="0" max="100" disabled />
                    </li>
                </ul>
                <hr className="hr" />
            </div>
        </div>
    );
};

export default Price;