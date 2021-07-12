import React from 'react';
import './PricePlan.css';
const PricePlan = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12 plan">
                    <button className="monthly-plan">Monthly Plan</button>
                    <button className="anual-monthly">Anual Plan, Paid Monthly</button>
                    <button className="anual-plan">Annual Plan, Prepaid</button>
                </div>
            </div>
        </div>
    );
};

export default PricePlan;