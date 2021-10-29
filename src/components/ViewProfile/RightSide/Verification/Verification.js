import React, { useState, useContext, useEffect } from 'react';
import { BiGroup } from 'react-icons/bi';
import { MdVerifiedUser, MdEmail, MdCall } from 'react-icons/md';
import './Verification.css';
import firebase from '../../../../firebase';
import { collectionContext } from '../../../../App'


const Verification = ({ profileId }) => {


    const [newNumber, setNewNumber] = useState('');
    const [verified, setVerified] = useState(false);
    const { value6 } = useContext(collectionContext)

    const [userAuth] = value6;

    const { name } = JSON.parse(localStorage.getItem('userLoginInfo'))

    const loginData = userAuth.find(data => data.name === name);

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        let isMounted = true;
        fetch('http://localhost:4000/userLoginData')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    const newData = data.find(item => item._id === profileId)
                    setUserData(newData);
                }
            })
        return () => { isMounted = false };
    }, [])

    const handleClick = () => {
        let recaptcha = new firebase.auth.RecaptchaVerifier('captcha-container');
        let number = `+88${newNumber}`;
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {
            let code = prompt("Enter OTP number");
            if (code === null) return;
            e.confirm(code).then((res) => {
                setVerified(true);
                fetch('http://localhost:4000/phoneVerify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ verify: 'Verified', id: loginData._id })
                })

            })
                .then(data => window.location.reload())
                .catch((err) => {
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
                        !profileId ? loginData && loginData.verify ? <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px', }} >{loginData.verify}</small> : <small className="text-danger" style={{ marginLeft: '25px', fontSize: '14px', cursor: 'pointer' }} data-toggle="modal" data-target="#exampleModal" >Verifiy</small>
                            :
                            <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px', }} >{userData && userData.verify ? userData.verify : 'Not Verified'}</small>
                    }
                </li>
                <li >
                    <small className="text-dark" style={{ fontSize: '14px' }}><MdEmail /> Email Verified</small>
                    <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px' }}>Verified</small>
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
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            {
                                newNumber.length === 11 && <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleClick} >Send OTP</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Verification;