import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiGroup } from 'react-icons/bi';
import { MdVerifiedUser, MdEmail, MdCall } from 'react-icons/md';
import { IoLogoFacebook } from 'react-icons/io';
import './Verification.css';
import firebase from '../../../../firebase';

// import verificationTypeData from '../../../../fakedata/viewProfileData/rightSideData/verificationTypeData';
const Verification = () => {


    const [newNumber, setNewNumber] = useState('');
    const [verified, setVerified] = useState(false);
    const handleClick = () => {
        let recaptcha = new firebase.auth.RecaptchaVerifier('captcha-container');
        let number = `+88${newNumber}`;
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {
            let code = prompt("Enter OTP number");
            if (code === null) return;
            e.confirm(code).then((res) => {
                setVerified(true);
            }).catch((err) => {
                alert('Sorry, Your OTP not matching. Try again later...')
            })
        })
    }

    return (
        <div className="verification-area ">
            {
                !verified && <div id='captcha-container'></div>
            }
            <ul className="verification-title-area">
                <li>
                    <h6>Verifications</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="verificaion-item">
                <li >
                    <Link to="" className="text-dark" style={{ fontSize: '14px' }}><AiOutlineUsergroupAdd /> Prererred Freelancer</Link>
                    <Link to="" className="text-success" style={{ marginLeft: '25px', fontSize: '14px' }}>Verifiy</Link>
                </li>
                <li >
                    <Link to="" className="text-dark" style={{ fontSize: '14px' }}><BiGroup /> Identity Verified</Link>
                    <Link to="" className="text-success" style={{ marginLeft: '25px', fontSize: '14px' }}>Verifiy</Link>
                </li>
                <li >
                    <Link to="" className="text-dark" style={{ fontSize: '14px' }}><MdVerifiedUser /> Payment Verified</Link>
                    <Link to="" className="text-success" style={{ marginLeft: '25px', fontSize: '14px' }}>Verifiy</Link>
                </li>
                <li >
                    <Link to="" className="text-dark" style={{ fontSize: '14px' }}><MdCall /> Phone Verified</Link>
                    {
                        verified ? <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px', }} data-toggle="modal" data-target="#exampleModal" >Verified</small> : <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px',  cursor: 'pointer'} } data-toggle="modal" data-target="#exampleModal" >Verifiy</small>
                    }
                </li>
                <li >
                    <Link to="" className="text-dark" style={{ fontSize: '14px' }}><MdEmail /> Email Verified</Link>
                    <Link to="" className="text-success" style={{ marginLeft: '25px', fontSize: '14px' }}>Verifiy</Link>
                </li>
                <li >
                    <Link to="" className="text-dark" style={{ fontSize: '14px' }}><IoLogoFacebook /> Facebook Connected</Link>
                    <Link to="" className="text-success" style={{ marginLeft: '25px', fontSize: '14px' }}>Verifiy</Link>
                </li>

            </ul>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Enter Mobile Number</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type="number" onChange={(e) => setNewNumber(e.target.value)} required className="form-control" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {
                                newNumber.length === 11 && <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleClick} >Save changes</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verification;