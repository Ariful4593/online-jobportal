import React, { useState, useContext, useEffect } from 'react';
import { BiGroup } from 'react-icons/bi';
import { MdVerifiedUser, MdEmail, MdCall } from 'react-icons/md';
import './Verification.css';
// import firebase from '../../../../firebase';
// import 'firebase/auth';
import { collectionContext } from '../../../../App'
import firebase from "firebase/app";
import "firebase/auth";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import Loader from "react-loader-spinner";
import OtpInput from "react-otp-input";
const Verification = ({ profileId }) => {
    const { value6 } = useContext(collectionContext);
    const [userAuth] = value6;
    const { name } = JSON.parse(localStorage.getItem('userLoginInfo'));
    const loginData = userAuth.find(data => data.name === name);
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        let isMounted = true;
        fetch('https://warm-anchorage-86355.herokuapp.com/userLoginData')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    const newData = data.find(item => item._id === profileId)
                    setUserData(newData);
                }
            })
        return () => { isMounted = false };
    }, [])

    // const handleClick = () => {
    //     let recaptcha = new firebase.auth.RecaptchaVerifier('captcha-container');
    //     let number = `+88${newNumber}`;
    //     firebase.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {
    //         let code = prompt("Enter OTP number");
    //         if (code === null) return;
    //         e.confirm(code).then((res) => {
    //             setVerified(true);
    //             fetch('https://warm-anchorage-86355.herokuapp.com/phoneVerify', {
    //                 method: 'POST',
    //                 headers: { 'Content-Type': 'application/json' },
    //                 body: JSON.stringify({ verify: 'Verified', id: loginData._id })
    //             })

    //         })
    //             .then(data => window.location.reload())
    //             .catch((err) => {
    //                 alert('Sorry, Your OTP not matching. Try again later...')
    //             })
    //     })
    // }

    const [value, setValue] = useState();
    const firebaseConfig = {
        apiKey: "AIzaSyAQXeqAShL2nGYPvNfD4F4Z-gS4H3Nqmag",
        authDomain: "online-jobplace.firebaseapp.com",
        projectId: "online-jobplace",
        storageBucket: "online-jobplace.appspot.com",
        messagingSenderId: "48147710375",
        appId: "1:48147710375:web:13651ac63a8a0e00d0b682",
        measurementId: "G-1VRTZZHGCT"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const auth = firebase.auth();
    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container", {
            size: "invisible",
            callback: function (response) {
                // console.log("Captcha Resolved");
            },
            defaultCountry: "IN",
        }
        );
    }, []);

    const [verified, setVerified] = useState(false);

    const [dots, setDots] = useState(false);
    const [codeData, setCodeData] = useState("");
    const handleChangeOTP = (codeData) => setCodeData(codeData);

    const otpSubmit = () => {

        setDots(true);
        let opt_number = codeData;

        window.confirmationResult
            .confirm(opt_number)
            .then((confirmationResult) => {
                // console.log(confirmationResult);
                // console.log("success");
                fetch('https://warm-anchorage-86355.herokuapp.com/phoneVerify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ verify: 'Verified', id: loginData._id })
                })
                .then(data => window.location.reload())
            })
            .catch((error) => {
                // User couldn't sign in (bad verification code?)
                alert(error.message);
            });
    }


    const handlePhone = () => {
        setDots(true);
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(value, appVerifier).then((confirmationResult) => {
            // console.log("otp sent");
            setVerified(true);
            setDots(false);
            window.confirmationResult = confirmationResult;
        })
            .catch((error) => {
                // Error; SMS not sent
                // ...
                alert(error.message);
            });
    }
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
                    <div className="" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div style={{ maxWidth: '410px', position: 'fixed', top: '0%', left: '33%', }} className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header border-0" >
                                    <h5 className="modal-title" id="exampleModalLabel">Verify Code</h5>

                                </div>

                                <div className="modal-body pt-0" style={{ paddingBottom: '10px' }}>
                                    <div style={{ border: '1px solid #cccccc', borderRadius: '6px', backgroundColor: '#f2f2f2' }}>
                                        <OtpInput
                                            value={codeData}
                                            onChange={handleChangeOTP}
                                            numInputs={6}
                                            separator={<span style={{ width: "8px" }}></span>}
                                            isInputNum={true}
                                            shouldAutoFocus={true}
                                            inputStyle={{
                                                border: "1px solid transparent",
                                                borderRadius: "8px",
                                                width: "54px",
                                                height: "54px",
                                                fontSize: "12px",
                                                color: "#000",
                                                fontWeight: "400",
                                                caretColor: "blue"
                                            }}
                                            focusStyle={{
                                                border: "1px solid #CFD3DB",
                                                outline: "none"
                                            }}
                                        />
                                    </div>

                                </div>
                                <div className="modal-footer border-0 pt-0">
                                    {
                                        <button type="button" style={{ backgroundColor: '#212121', color: 'white', width: '100%' }} className="btn" onClick={() => otpSubmit()}
                                        >
                                            {dots ? <Loader type="ThreeDots" color="#00BFFF" height={40} width={80} /> : 'Verify & Login'}

                                        </button>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <ul className="verificaion-item">
                        <li >
                            <small className="text-dark" style={{ fontSize: '14px' }}><BiGroup /> Identity Verified</small>
                            <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px' }}>Verified</small>
                        </li>
                        <li >
                            <small className="text-dark" style={{ fontSize: '14px' }}><MdVerifiedUser /> Payment Verified</small>
                            <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px' }}>Verified</small>
                        </li>
                        <li >
                            <small className="text-dark" style={{ fontSize: '14px' }}><MdCall /> Phone Verified</small>
                            {
                                !profileId ? loginData && loginData.verify ? <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px', }} >{loginData.verify}</small> :
                                    <small className="text-danger" style={{ marginLeft: '25px', fontSize: '14px', cursor: 'pointer' }} data-toggle="modal" data-target="#exampleModalCenter" >Verifiy</small>
                                    :
                                    <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px', }} >{userData && userData.verify ? userData.verify : 'Not Verified'}</small>
                            }
                        </li>
                        <li >
                            <small className="text-dark" style={{ fontSize: '14px' }}><MdEmail /> Email Verified</small>
                            <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px' }}>Verified</small>
                        </li>
                    </ul>
            }


            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div style={{ maxWidth: '410px' }} className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0" >
                            <h5 className="modal-title" id="exampleModalLabel">Enter Your Number</h5>

                        </div>

                        <div className="modal-body pt-0" style={{ paddingBottom: '10px' }}>
                            <div style={{ border: '1px solid #cccccc', borderRadius: '6px', backgroundColor: '#f2f2f2' }}>
                                <PhoneInput
                                    international
                                    countryCallingCodeEditable={false}
                                    defaultCountry="BD"
                                    value={value}
                                    onChange={setValue} />
                            </div>

                        </div>
                        <div className="modal-footer border-0 pt-0">
                            {
                                <button type="button" style={{ backgroundColor: '#212121', color: 'white', width: '100%' }} className="btn" data-dismiss="modal" onClick={handlePhone} disabled={(value && value.length === 14) ? false : true} >{dots ? <Loader type="ThreeDots" color="#00BFFF" height={40} width={80} /> : 'Send Code'}  </button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Verification;