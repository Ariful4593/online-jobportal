import React from 'react';
import BidConversion from '../BidConversion/BidConversion';
import BidPerMilestone from '../BidMilestone/BidPerMilestone';
import BidSummery from '../BidSummery/BidSummery';
import EarningPerClient from '../EarningPerClient/EarningPerClient';
import EarningPerSkill from '../EarningPerSkill/EarningPerSkill';
import EarningsOverTime from '../EarningsOverTime/EarningsOverTime';
import JobProficiency from '../JobProficiency/JobProficiency';
import RatingPerSkill from '../RatingPerSkill/RatingPerSkill';
import TotalEarnings from '../TotalEarnings/TotalEarnings';
import './UserStatisticsRow.css';
const UserStatisticsRow = () => {
    return (
        <div className="container user-statistics-row">
            <div className="row">
                <div className="col-md-4">
                    <TotalEarnings />
                    <EarningsOverTime />
                    <EarningPerSkill />
                    <EarningPerClient />
                </div>
                <div className="col-md-4">
                    <JobProficiency />
                    <RatingPerSkill />
                </div>
                <div className="col-md-4">
                    <BidConversion />
                    <BidSummery />
                    <BidPerMilestone />
                </div>
            </div>
        </div>
    );
};

export default UserStatisticsRow;