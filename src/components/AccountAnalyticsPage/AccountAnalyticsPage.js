import React from 'react';
import './AccountAnalyticsPage.css';
import UserStatistics from './UserStatistics/UserStatistics';
import UserStatisticsRow from './UserStatisticsRow/UserStatisticsRow';
import Footer from '../Footer/Footer';
const AccountAnalyticsPage = () => {
    return (
        <div>
            <UserStatistics />
            <UserStatisticsRow />
            <Footer />
        </div>
    );
};

export default AccountAnalyticsPage;