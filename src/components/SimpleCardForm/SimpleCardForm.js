import React, { useContext, useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useHistory } from "react-router-dom"
import { collectionContext } from '../../App';
import './SimpleCardForm.css';
import NewClient from '../Login/ClientVerify/NewClient';
import ExistingClient from '../Login/ClientVerify/ExistingClient';
import NewFreelancer from '../Login/FreelancerVerify/NewFreelancer'
import ExistingFreelancer from '../Login/FreelancerVerify/ExistingFreelancer';
import LoginButton from '../Login/LoginButton/LoginButton';
import { notNewUserFnc, cardElementFnc } from './LoginDriver/LoginDriver';


const SimpleCardForm = ({ cardData, employer, jobSeaker }) => {

    const { value1 } = useContext(collectionContext)
    const [loginInfo, setLoginInfo] = value1;
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory()
    const [newUser, setNewUser] = useState(false);
    const [, seterrorMessage] = useState(null);
    const [, setSuccessMessage] = useState(null);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [accountType, setAccountType] = useState('')
    const [userLogin, setUserLogin] = useState([])
    useEffect(() => {
        let isMounted = true;
        setAccountType('basic')
        fetch("https://warm-anchorage-86355.herokuapp.com/userLoginData")
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setUserLogin(data)
                }
            })
        return () => { isMounted = false };
    }, [user])



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
            const newUserInfo = { ...user, ...loginInfo }
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
            setLoginInfo(newUserInfo)
        }
    }
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        notNewUserFnc(newUser, user, userLogin, employer, setLoginInfo, history, jobSeaker, stripe, elements);

        cardElementFnc(elements, CardElement, stripe, user, accountType, seterrorMessage, setSuccessMessage, cardData, userLogin, loginInfo, setLoginInfo, jobSeaker, history, employer);
    };


    return (
        <div>
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
                                CardElement={CardElement}
                            />


                            {/* Not new user */}

                            <ExistingClient
                                newUser={newUser}
                                handleBlur={handleBlur}
                            />

                            {/* <p className='text-left mb-2 px-3'>
                        <span className='float-right'>
                            <Link to="/">Forgot Password ?</Link>
                        </span>
                    </p> */}
                            <LoginButton
                                newUser={newUser}
                                setNewUser={setNewUser}
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
                                CardElement={CardElement}
                            />


                            <ExistingFreelancer
                                newUser={newUser}
                                handleBlur={handleBlur}
                            />

                            {/* <p className='text-left mb-2 px-3'>
                        <span className='float-right'>
                            <Link to="/">Forgot Password ?</Link>
                        </span>
                    </p> */}
                            <LoginButton
                                newUser={newUser}
                                setNewUser={setNewUser}
                            />
                        </div>
                    </form>
                }
            </div>
        </div>
    );
};
export default React.memo(SimpleCardForm);