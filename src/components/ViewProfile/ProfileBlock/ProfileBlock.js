import React from 'react';
import RightSide from '../RightSide/RightSide';
import './ProfileBlock.css';
import LeftSide from '../LeftSide/LeftSide';
import Footer from '../../Footer/Footer';
const ProfileBlock = () => {
    return (
        <React.Fragment>
            <div className="container main-profile-block">
                <div className="row">
                    <LeftSide />
                    <RightSide />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default ProfileBlock;