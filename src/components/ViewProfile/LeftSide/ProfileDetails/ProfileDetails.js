import React from 'react';
import './ProfileDetails.css';

import { HiOutlineCurrencyDollar, HiBadgeCheck } from 'react-icons/hi';
import { FaFlag } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { RiRadioButtonLine } from 'react-icons/ri';
import { AiOutlineClockCircle } from 'react-icons/ai';
import logo from '../../../../images/Arif.png';
const ProfileDetails = () => {
    return (
        <div className="profile-details">
            <div className="row">
                <div className="col-4">
                    <img className="w-100" src={logo} alt="" />
                    <div className="row mt-4 online-area" >
                        <p className="online"><RiRadioButtonLine /> I'm Online!</p>
                        <h6><HiOutlineCurrencyDollar />  $10 USD / Hour</h6>
                        <p><FaFlag />  Chittagong Bangladesh</p>
                        <p><AiOutlineClockCircle /> It's currently 9:17 PM here</p>
                        <p><HiBadgeCheck /> Joined April 9, 2021</p>
                        <p><GiSelfLove /> 0 Recommendations</p>
                    </div>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Ariful islam</h4>
                        </div>
                        <div className="col-md-6 text-end">
                            <button className="btn btn-success">Edit Profile</button>
                        </div>
                    </div>
                    <h6>React JS Developer</h6>

                    <div className="row">
                        <div className="col-md-2">
                            <h5 className="n-a">N/A</h5>
                        </div>
                        <div className="col-md-4">
                            Jobs Completed
                        </div>
                        <div className="col-md-2">
                            <h5 className="n-a">N/A</h5>
                        </div>
                        <div className="col-md-4">
                            On Budget
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-2">
                            <h5 className="n-a">N/A</h5>
                        </div>
                        <div className="col-md-4">
                            On Time
                        </div>
                        <div className="col-md-2">
                            <h5 className="n-a">N/A</h5>
                        </div>
                        <div className="col-md-4">
                            Repeat Hire Rate
                        </div>
                    </div>

                    <br />
                    <p>I am an innovative front-end developer with 1.5 years+ experience managing all aspects of the development process for small to medium size companies. I am passionate about the long term value for our customer. My main strength is I have a positive attitude and my
                        weakness is I don't feel comfortable until I complete my work in a given time.</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;