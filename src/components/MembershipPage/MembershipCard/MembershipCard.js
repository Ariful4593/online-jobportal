import React from 'react';
import logoImg from '../../../images/monthly-level-two.svg';
import './MembershipCard.css';
import membershipCardData from '../../../fakedata/membershipData/membershipCardData';
const MembershipCard = () => {
    return (
        <div className="container membership-card-block">
            <div className="row">
                {
                    membershipCardData.map((data, index) => (
                        <div className={data.mainColumnClass} key={index}>
                            <div className={data.divOne}>
                                <img src={logoImg} alt="" />
                                {
                                    data.divOneData.map((item, index) => (
                                        <h6 className={data.divOneClass[index]} key={index}>
                                            {item}
                                        </h6>
                                    ))
                                }
                                {/* <h4 className="category">Basic</h4>
                                <h6 className="start-price">FROM $4.95 USD NOW ONLY</h6>
                                <h6 className="price">$4.45</h6>
                                <small>per month</small> */}
                            </div>
                            <div className={data.divTwo}>
                                <button className={data.btnClass}>Upgrade</button>
                                <div className={data.divTwoDataClass}>

                                    {
                                        data.divTwoData.map((endData, index) => (
                                            <p key={index}>{endData}</p>
                                        ))
                                    }
                                    {/* <p>50 Bids per month</p>
                                    <p>50 Skills</p>
                                    <p>Unlock rewards</p>
                                    <p>Unlimited project bookmarks</p>
                                    <p>Preferred Freelancer eligible*</p>
                                    <p>Custom cover photo</p>
                                    <p>3 Free highlighted contest entries / month</p>
                                    <p>12 Free sealed contest entries / month</p>
                                    <p>5 Employer followings</p> */}
                                </div>
                            </div>
                        </div>
                    ))
                }
                {/* <div className="col-md-3 special-plus">
                    <div className="plus">
                        <img src={logoImg} alt="" />
                        <h4 className="category">Plus</h4>
                        <h6 className="start-price">FROM $9.95 USD TRY 14 DAYS</h6>
                        <h6 className="price">Free</h6>
                        <small>or purchase now</small>
                    </div>
                    <div className="plus-item">
                        <button className="trial-button">Try Free Tial</button>
                        <div className="plus-item-p">
                            <p>100 Bids per month</p>
                            <p>80 Skills</p>
                            <p>Client Engagement NEW</p>
                            <p>Daily withdrawal requests</p>
                            <p>Unlock rewards</p>
                            <p>Unlimited project bookmarks</p>
                            <p>Preferred Freelancer eligible*</p>
                            <p>Custom cover photo</p>
                            <p>5 Free highlighted contest entries / month</p>
                            <p>25 Free sealed contest entries / month</p>
                            <p>10 Employer followings</p>
                            <p>5 External invoices</p>
                            <p>Project extensions</p>
                            <p>Project extensions</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="professional">
                        <img src={logoImg} alt="" />
                        <h4 className="category">Professional</h4>
                        <h6 className="start-price">FROM $29.95 USD NOW ONLY</h6>
                        <h6 className="price">$24.95</h6>
                        <small>per month</small>
                    </div>
                    <div className="professional-item">
                        <button className="upgrade-button">Upgrade</button>
                        <div className="professional-item-p">
                            <p>300 Bids per month
                            </p>
                            <p>100 Skills</p>
                            <p>Client Engagement NEW</p>
                            <p>Bid Insights NEW</p>
                            <p>Daily withdrawal requests</p>
                            <p>Unlock rewards</p>
                            <p>Unlimited project bookmarks</p>
                            <p>Preferred Freelancer eligible*</p>
                            <p>Custom cover photo</p>
                            <p>15 Free highlighted contest entries / month</p>
                            <p>75 Free sealed contest entries / month</p>
                            <p>20 Employer followings</p>
                            <p>15 External invoices</p>
                            <p>Project extensions</p>
                            <p>Sealed projects</p>
                            <p>Premium Freelancer Insights</p>
                            <p>High value project bidding*</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="premier">
                        <img src={logoImg} alt="" />
                        <h4 className="category">Premier</h4>
                        <h6 className="start-price">FROM $59.95 USD NOW ONLY</h6>
                        <h6 className="price">$49.95</h6>
                        <small>per month</small>
                    </div>
                    <div className="premier-item">
                        <button className="upgrade-button">Upgrade</button>
                        <div className="premier-item-p">
                            <p>1500 Bids per month
                            </p>
                            <p>400 Skills</p>
                            <p>Client Engagement NEW</p>
                            <p>Bid Insights NEW</p>
                            <p>Daily withdrawal requests</p>
                            <p>Unlock rewards</p>
                            <p>Unlimited project bookmarks</p>
                            <p>Preferred Freelancer eligible*</p>
                            <p>Custom cover photo</p>
                            <p>30 Free highlighted contest entries / month</p>
                            <p>150 Free sealed contest entries / month</p>
                            <p>Unlimited Employer followings</p>
                            <p>Unlimited External invoices</p>
                            <p>Project extensions</p>
                            <p>Sealed projects</p>
                            <p>Premium Freelancer Insights</p>
                            <p>Free NDA projects</p>
                            <p>High value project bidding*</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default MembershipCard;