import React from 'react';
import AddExperience from './AddExperience/AddExperience';
import Education from './Education/Education';
import PortfolioItems from './PortfolioItems/PortfolioItems';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import Publication from './Publication/Publication';
import Qualification from './Qualification/Qualification';
import Reviews from './Reviews/Reviews';

const LeftSide = () => {
    return (
        <div className="col-md-9">
            <ProfileDetails />
            <PortfolioItems />
            <Reviews />
            <AddExperience />
            <Education />
            <Qualification />
            <Publication />
        </div>
    );
};

export default LeftSide;