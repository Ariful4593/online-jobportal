import React from 'react';
import Loader from "react-loader-spinner";
const LoginButton = ({newUser, setNewUser, dots}) => {
    return (
        <div>
            <input
                className='mt-3 w-100'
                type='submit'
                value={newUser ? 'Create an account' : 'Login'}
            />
            <div>
                {!newUser && (
                    <div className='login-qstn'>
                        <span style={{color: 'white'}}>Don't have an account? </span>
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
                        <span style={{color: 'white'}}>Already have an account? </span>
                        <span className='pl-1'>
                            <span style={{ color: 'orange', cursor: 'pointer', fontSize: '20px' }} onClick={() => setNewUser(!newUser)}>
                                 {dots ? <Loader type="Circles" color="#00BFFF" height={40} width={40} /> : 'Login'}
                            </span>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginButton;