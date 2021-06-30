import React from 'react';
import './AboutTheClient.css';
const AboutTheClient = () => {
    return (
        <div className="client-area mt-4">
            <div className="about-client">
                <h5>About the Client</h5>
            </div>
            <div className="client-details">
                <p>Singapore</p>
                <p>Member since Aug 13, 2012</p>
                <h5 style={{ fontWeight: 'bold' }}>Client Verification</h5>
                <p> Identity verified</p>
                <p>Payment method verified</p>
                <p>Deposit made</p>
                <p> Email address verified</p>
                <p> Profile completed</p>
                <p>Phone number verified</p>
            </div>
        </div>
    );
};

export default AboutTheClient;