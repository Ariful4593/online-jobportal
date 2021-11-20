import React from 'react';
import Loader from "react-loader-spinner";
const LoginButton = ({ newUser, setNewUser, dots }) => {
    return (
        <div>
            <button
                className='mt-3 w-100 form-control btn btn-success'
                type='submit' style={{borderRadius: '3px !important', fontWeight: '700', fontSize: '18px'}}>
                {dots ? <Loader type="ThreeDots" color="#00BFFF" height={30} width={80} /> : newUser ? 'Create an account' : 'Login'}
            </button>
            <div>
                {!newUser && (
                    <div className='login-qstn'>
                        <span style={{ color: 'white' }}>Don't have an account? </span>
                        <span className='pl-1'>
                            <span style={{ cursor: 'pointer', color: 'orange', fontSize: '16px' }} onClick={() => setNewUser(!newUser)}>
                                Create an account
                            </span>
                        </span>
                    </div>
                )}
            </div>
            <div>
                {newUser && (
                    <div>
                        <span style={{ color: 'white' }}>Already have an account? </span>
                        <span className='pl-1'>
                            <span style={{ color: 'orange', cursor: 'pointer', fontSize: '20px' }} onClick={() => setNewUser(!newUser)}>
                                Login
                            </span>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginButton;