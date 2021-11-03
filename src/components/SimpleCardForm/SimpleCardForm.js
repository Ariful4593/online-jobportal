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

        if (!newUser && user.name && user.email && user.password) {
            const loginUser = userLogin.find(userData => userData.name === user.name && userData.email === user.email && userData.password === user.password)

            try {
                if (loginUser && employer) {
                    const newLoginInfo = { ...loginUser };
                    newLoginInfo.isLoggedIn = true;
                    setLoginInfo(newLoginInfo);
                    localStorage.setItem('userLoginInfo', JSON.stringify(newLoginInfo));
                    history.push('postproject');
                }
                else if (loginUser && jobSeaker) {
                    const newLoginInfo = { ...loginUser };
                    newLoginInfo.isLoggedIn = true;
                    setLoginInfo(newLoginInfo);
                    localStorage.setItem('userLoginInfo', JSON.stringify(newLoginInfo));

                    return history.push('postedJob')
                } else {
                    alert("Sorry! your password or email address doesn't match on the database")
                }
            } catch (err) {
                // alert(err.message)
            }


        } else if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return
        }

        try {
            const cardElement = elements.getElement(CardElement);

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });


            const data = { ...user, paymentMethod, accountType }

            if (error) {
                seterrorMessage(error.message);
                setSuccessMessage(null);
            } else {
                setSuccessMessage(paymentMethod.id);
                seterrorMessage(null);
                cardData(paymentMethod)

            }


            const newLoginUser = userLogin.find(userData => userData.email === user.email)
            try {
                if (newLoginUser) {
                    return alert("This email is already store in database")
                } else {
                    const { id, card: { brand, country, exp_month, exp_year, funding, last4 } } = data.paymentMethod;

                    const paymentInfo = [id, brand, country, exp_month, exp_year, funding, last4];

                    const newLoginInfo = { ...loginInfo };

                    newLoginInfo.accountType = accountType;
                    newLoginInfo.paymentData = paymentInfo;

                    setLoginInfo(newLoginInfo)


                    fetch('https://warm-anchorage-86355.herokuapp.com/userLogin', {
                        method: 'POST',
                        headers: { 'Content-type': 'application/json' },
                        body: JSON.stringify(newLoginInfo)
                    })

                    if (jobSeaker) {
                        localStorage.setItem('userLoginInfo', JSON.stringify(newLoginInfo));
                        return history.push('postedJob')
                    }
                    else if (employer) {
                        localStorage.setItem('userLoginInfo', JSON.stringify(newLoginInfo));
                        return history.push('postproject')
                    }

                }
            }
            catch (err) {
                alert(err.message)
            }


        } catch (error) {
            // alert(error.message);
        }
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