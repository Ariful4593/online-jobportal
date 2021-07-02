import React from 'react';
import './HowToPay.css';
const HowToPay = ({ fixedPrice, hourlyPrice }) => {
    return (
        <div className="how-to-pay">
            <div className="row">
                <h4>How do you want to pay?</h4>
                <div className="col-md-6 pay-category">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 text-center">
                            <img src={fixedPrice} alt="" />
                        </div>
                        <div className="col-md-8">
                            <h6 className="project">Pay fixed price</h6>
                            <small>Agree on a price and release payment when the job is done. Best for one-off tasks.</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pay-category">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 text-center">
                            <img src={hourlyPrice} alt="" />
                        </div>
                        <div className="col-md-8">
                            <h6 className="contest">Pay by the hour</h6>
                            <small>Hire based on an hourly rate and pay for hours billed. Best for ongoing work.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToPay;