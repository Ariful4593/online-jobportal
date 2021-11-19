import React from 'react';
import './AccountAnalyticsPage.css';
import UserStatistics from './UserStatistics/UserStatistics';
import UserStatisticsRow from './UserStatisticsRow/UserStatisticsRow';
import Footer from '../Footer/Footer';
const AccountAnalyticsPage = () => {
    document.title = "Freelancers || Account Analytics";
    return (
        <div>
            <UserStatistics />
            <UserStatisticsRow />
            <Footer />
        </div>
    );
};

export default AccountAnalyticsPage;