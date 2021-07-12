import React from 'react';
import './GrowBusiness.css';
import growBusinessData from '../../../fakedata/membershipData/growBusinessData';
const GrowBusiness = () => {
    return (
        <div className="container grow-business">
            <div className="row">
                <div className="">
                    <h1 className="grow-business-title">
                        Here's How Membership Helps You Grow Your Business
                    </h1>
                </div>

                {
                    growBusinessData.map((data, index) => (
                        <div className="col-md-3 mt-3 grow-business-single-block" key={index}>
                            <img className="grow-business-logo" src={data.icon} alt="" />
                            <h5>{data.title}</h5>
                            <p>{data.description}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default GrowBusiness;