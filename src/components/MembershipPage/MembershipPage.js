import React from 'react';
import Footer from '../Footer/Footer';
import GrowBusiness from './GrowBusiness/GrowBusiness';
import MembershipCard from './MembershipCard/MembershipCard';
import PricePlan from './PricePlan/PricePlan';
import TryAmemberShip from './TryAmemberShip/TryAmemberShip';

const MembershipPage = () => {
    document.title = "Freelancers || Membership";
    return (
        <div>
            <TryAmemberShip />
            <PricePlan />
            <MembershipCard />

            <GrowBusiness />
            <Footer />
        </div>
    );
};

export default MembershipPage;