import React, { useState, useEffect } from 'react';
import './Verification.css';
import firebase from "firebase/app";
import "firebase/auth";
import 'react-phone-number-input/style.css';
import IsVerified from './IsVerified';
import PhoneInputModal from './PhoneInputModal';
import { getSingleUserByEmail } from '../../../../Driver';
import initializeAuth from '../../../Firebase/firebase.init';
import captchaVerifier from '../../../Firebase/RecaptchaVerifier.init';
import VerificationIdentity from './VerificationIdentity';


initializeAuth();

const Verification = ({ profileId }) => {

    const [userData, setUserData] = useState([]);
    const [verified, setVerified] = useState(false);
    const [codeData, setCodeData] = useState("");
    const handleChangeOTP = (codeData) => setCodeData(codeData);


    //Get user data via email
    useEffect(() => {
        getSingleUserByEmail(setUserData);
    }, [])

    const auth = firebase.auth();
    useEffect(() => {
        captchaVerifier();
    }, []);


    auth.onAuthStateChanged((user) => {
        if (user) {
            // console.log(user);
        }
    });
    return (
        <div className="verification-area ">
            {
                !verified && <div id="recaptcha-container"></div>
            }


            <ul className="verification-title-area">
                <li>
                    <h6>Verifications</h6>
                </li>
            </ul>
            <hr className="hr" />

            {
                verified ?
                    <IsVerified codeData={codeData} handleChangeOTP={handleChangeOTP} />
                    :
                    <VerificationIdentity profileId={profileId} userData={userData} />
            }

            <PhoneInputModal firebase={firebase} setVerified={setVerified} />
        </div >
    );
};

export default Verification;