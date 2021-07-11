import React from 'react';
import { Link } from 'react-router-dom';
import './Verification.css';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiGroup } from 'react-icons/bi';
import { MdVerifiedUser, MdEmail, MdCall } from 'react-icons/md';
import { IoLogoFacebook } from 'react-icons/io';
const Verification = () => {

    const verificationType = [
        { icon: AiOutlineUsergroupAdd, title: 'Preferred Freelancer' },
        { icon: BiGroup, title: 'Identity Verified' },
        { icon: MdVerifiedUser, title: 'Payment Verified' },
        { icon: MdCall, title: 'Phone Verified' },
        { icon: MdEmail, title: 'Email Verified' },
        { icon: IoLogoFacebook, title: 'Facebook Connected' },
    ]
    return (
        <div className="verification-area ">
            <ul className="verification-title-area">
                <li>
                    <h6>Verifications</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="verificaion-item">
                {
                    verificationType.map((data, index) => (
                        <li key={index}>
                            <Link to=""><data.icon /> {data.title}</Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default Verification;