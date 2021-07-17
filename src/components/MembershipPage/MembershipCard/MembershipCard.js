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
                            </div>
                            <div className={data.divTwo}>
                                <button className={data.btnClass}>Upgrade</button>
                                <div className={data.divTwoDataClass}>

                                    {
                                        data.divTwoData.map((endData, index) => (
                                            <p key={index}>{endData}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MembershipCard;