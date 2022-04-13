import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom"
import { collectionContext } from '../../App';
import './SimpleCardForm.css';
import NewClient from '../Login/ClientVerify/NewClient';
import ExistingClient from '../Login/ClientVerify/ExistingClient';
import NewFreelancer from '../Login/FreelancerVerify/NewFreelancer'
import ExistingFreelancer from '../Login/FreelancerVerify/ExistingFreelancer';
import LoginButton from '../Login/LoginButton/LoginButton';

const SimpleCardForm = ({ employer, jobSeaker }) => {

    const { value10 } = useContext(collectionContext)
    const [signIn,] = value10;
    const history = useHistory()
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [accountType, setAccountType] = useState('');
    const location = useLocation();
    const [dots, setDots] = useState(false);


    const handleBlur = (e) => {
        let isFieldValid
        if (e.target.name === 'name') {
            isFieldValid = e.target.value
        }
        if (e.target.name === 'email') {
            isFieldValid = e.target.value
        }
        if (e.target.name === 'password') {
            isFieldValid = e.target.value
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDots(true);
        if (!user.name) {
            fetch('https://online-jobplace.herokuapp.com/userLoginInfo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then((res) => res.json())
                .then(data => {
                    localStorage.setItem('token', JSON.stringify(data.token));
                    setDots(false);
                    if (data && employer) {
                        return history.push('/postproject');
                    }
                    else if (data && jobSeaker) {
                        return history.push('/postedJob')
                    } else {
                        localStorage.removeItem("token");
                        return alert('Password matching failed or user may not exists.')
                    }
                })
        } else {
            fetch('https://online-jobplace.herokuapp.com/userSignup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            }).then((res) => res.json())
                .then(data => {
                    setDots(false);
                    if (employer) {
                        return history.push('/postproject');
                    }
                    else if (jobSeaker) {
                        return history.push('/postedJob')
                    }
                })
        }

    };

    // const handleKeypress = e => {
    //     if (e.keyCode === 13) {
    //         handleSubmit();
    //     }
    // };

    return (
        <div>

            {
                (signIn || location.pathname === '/login') && (!employer && !jobSeaker) && <form id="form" onSubmit={handleSubmit}>
                    <div className='form-field w-100 p-4 m-0'>
                        <h4 className='text-center text-white mb-5 ml-3'>
                            {newUser ? 'Created an account' : 'Login'}
                        </h4>

                        <NewClient
                            newUser={newUser}
                            handleBlur={handleBlur}
                            accountType={accountType}
                            setAccountType={setAccountType}
                        // CardElement={CardElement}
                        />


                        {/* Not new user */}

                        <ExistingClient
                            newUser={newUser}
                            handleBlur={handleBlur}
                        />
                        <LoginButton
                            newUser={newUser}
                            setNewUser={setNewUser}
                            dots={dots}
                        />
                    </div>
                </form>
            }
            <div>
                {
                    employer &&
                    <form id="form" onSubmit={handleSubmit}>
                        <div className='form-field w-100 p-4 m-0'>
                            <h4 className='text-center text-white mb-5 ml-3'>
                                {newUser ? 'Created an account' : 'Login'}
                            </h4>

                            <NewClient
                                newUser={newUser}
                                handleBlur={handleBlur}
                                accountType={accountType}
                                setAccountType={setAccountType}
                            // CardElement={CardElement}
                            />


                            {/* Not new user */}

                            <ExistingClient
                                newUser={newUser}
                                handleBlur={handleBlur}
                            />
                            <LoginButton
                                newUser={newUser}
                                setNewUser={setNewUser}
                                dots={dots}
                            />
                        </div>
                    </form>
                }
            </div>
            <div>
                {
                    jobSeaker &&
                    <form id="form" onSubmit={handleSubmit}>
                        <div className='form-field w-100 p-4 m-0'>
                            <h4 className='text-center text-white mb-5 ml-3'>
                                {newUser ? 'Created an account' : 'Login'}
                            </h4>

                            <NewFreelancer
                                newUser={newUser}
                                handleBlur={handleBlur}
                            // CardElement={CardElement}
                            />


                            <ExistingFreelancer
                                newUser={newUser}
                                handleBlur={handleBlur}
                            />
                            <LoginButton
                                newUser={newUser}
                                setNewUser={setNewUser}
                                dots={dots}
                            />
                        </div>
                    </form>
                }
            </div>
        </div>
    );
};
export default React.memo(SimpleCardForm);