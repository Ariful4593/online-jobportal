import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import Loader from "react-loader-spinner";



export default function PhoneInputModal({ firebase, setVerified }) {

    const [value, setValue] = useState();
    const [dots, setDots] = useState(false);

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
    return (
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
                            <button
                                type="button"
                                style={
                                    {
                                        backgroundColor: '#212121',
                                        color: 'white',
                                        width: '100%'
                                    }
                                }
                                className="btn"
                                data-dismiss="modal"
                                onClick={handlePhone}
                                disabled={(value && value.length === 14) ? false : true}
                            >
                                {
                                    dots ?
                                        <Loader type="ThreeDots" color="#00BFFF" height={40} width={80} />
                                        :
                                        'Send Code'
                                }
                            </button>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
