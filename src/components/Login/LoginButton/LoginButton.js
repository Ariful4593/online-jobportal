import React from 'react';

const LoginButton = ({newUser, setNewUser}) => {
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
                            <span style={{ cursor: 'pointer', color: 'orange', fontSize: '22px' }} onClick={() => setNewUser(!newUser)}>
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