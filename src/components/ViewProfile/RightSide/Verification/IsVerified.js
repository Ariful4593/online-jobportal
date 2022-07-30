import React, { useContext, useState } from 'react'
import OtpInput from "react-otp-input";
import Loader from "react-loader-spinner";
import { collectionContext } from '../../../../App'

export default function IsVerified({ codeData, handleChangeOTP }) {

    const { value7 } = useContext(collectionContext);
    const [dots, setDots] = useState(false);
    const [profileData] = value7;
    const otpSubmit = () => {

        setDots(true);
        let opt_number = codeData;

        window.confirmationResult
            .confirm(opt_number)
            .then((confirmationResult) => {
                fetch('https://online-jobplace.herokuapp.com/phoneVerify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ verify: 'Verified', id: profileData[0]._id })
                })
                    .then(data => window.location.reload())
            })
            .catch((error) => {
                // User couldn't sign in (bad verification code?)
                alert(error.message);
            });
    }
    return (
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
    )
}
