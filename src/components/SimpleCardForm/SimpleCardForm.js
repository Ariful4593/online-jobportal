import React, { useContext, useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useHistory } from "react-router-dom"
import { collectionContext } from '../../App';
import './SimpleCardForm.css';
const SimpleCardForm = ({ cardData, employer, jobSeaker }) => {

    const { value1 } = useContext(collectionContext)
    const [, setLoginInfo] = value1;
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
        setAccountType('basic')
        fetch("https://aqueous-river-54090.herokuapp.com/userLoginData")
            .then(res => res.json())
            .then(data => setUserLogin(data))
    }, [])



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
        // Block native form submission.
        event.preventDefault();

        if (!newUser && user.email && user.password) {
            const loginUser = userLogin.find(userData => userData.email === user.email && userData.password === user.password)
            if (loginUser && employer) {
                return history.push('postproject')
            }
            else if(loginUser && jobSeaker){
                return history.push('postedJob')
            }
        } else if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return
        }


        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);
        // Use your card Element with other Stripe.js APIs
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
        if (newUser && user.name && user.email && user.password && (!error)) {
            setUser(data)
            setLoginInfo(data)
            fetch('https://aqueous-river-54090.herokuapp.com/userLogin', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            })
            if(jobSeaker){
               return history.push('postedJob')
            }
            else if(employer){
                history.push('postproject')
            }
            
        }
    };
    return (
        <div>
            <div>
                {
                    employer &&
                    <form id="form" onSubmit={handleSubmit}>
                        <div className='form-field w-100 p-4 m-0'>
                            <h4 className='text-center mb-5 ml-3'>
                                {newUser ? 'Created an account' : 'Login'}
                            </h4>

                            {newUser && (
                                <input
                                    className='mb-2 w-100 enter-name'
                                    onBlur={handleBlur}
                                    type='text'
                                    name='name'
                                    placeholder='Enter Your Name'
                                    required
                                />
                            )}


                            {newUser && (
                                <input
                                    className='mb-2 w-100 enter-email'
                                    onBlur={handleBlur}
                                    type='text'
                                    name='email'
                                    placeholder='Enter email'
                                    required
                                />
                            )}

                            {newUser && (
                                <input
                                    className='mb-2 w-100 enter-pass'
                                    onBlur={handleBlur}
                                    type='password'
                                    name='password'
                                    placeholder='Enter password'
                                    required
                                />
                            )}

                            {
                                newUser && <pre style={{ fontFamily: 'system-ui' }}>Account Type: <select name="cars" id="account-type" value={accountType} onChange={(e) => setAccountType(e.target.value)}>
                                    <option value="basic">Basic</option>
                                    <option value="standard">Standard</option>
                                    <option value="premium">Premium</option>
                                </select></pre>
                            }
                            {
                                newUser &&
                                <div>
                                    {
                                        accountType === 'basic' && <p style={{ color: 'green' }}>Your can 10 post job per month!</p>
                                    }
                                    {
                                        accountType === 'standard' && <p style={{ color: 'green' }}>Your can 20 post job per month!</p>
                                    }
                                    {
                                        accountType === 'premium' && <p style={{ color: 'green' }}>Your can 30 post job per month!</p>
                                    }
                                </div>
                            }
                            {
                                newUser &&
                                <div>
                                    <label htmlFor="" className="">Enter Stripe Payment Number</label>
                                    <br /><br />
                                    <CardElement required className="w-100" />
                                </div>

                            }
                            {
                                !newUser && <input
                                    className='mb-2 w-100 enter-email'
                                    onBlur={handleBlur}
                                    type='email'
                                    name='email'
                                    placeholder='Enter email'
                                    required
                                />
                            }

                            {
                                !newUser && <input
                                    className='mb-2 w-100 enter-pass'
                                    onBlur={handleBlur}
                                    type='password'
                                    name='password'
                                    placeholder='Enter password'
                                    required
                                />
                            }

                            {/* <p className='text-left mb-2 px-3'>
                        <span className='float-right'>
                            <Link to="/">Forgot Password ?</Link>
                        </span>
                    </p> */}
                            <input
                                className='mt-3 w-100'
                                type='submit'
                                value={newUser ? 'Create an account' : 'Login'}
                            />
                            <div>
                                {!newUser && (
                                    <div className='login-qstn'>
                                        <span>Don't have an account? </span>
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
                                        <span>Already have an account? </span>
                                        <span className='pl-1'>
                                            <span style={{ color: 'orange', cursor: 'pointer', fontSize: '20px' }} onClick={() => setNewUser(!newUser)}>
                                                Login
                                            </span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                }
            </div>
            <div>
                {
                    jobSeaker &&
                    <form id="form" onSubmit={handleSubmit}>
                        <div className='form-field w-100 p-4 m-0'>
                            <h4 className='text-center mb-5 ml-3'>
                                {newUser ? 'Created an account' : 'Login'}
                            </h4>

                            {newUser && (
                                <input
                                    className='mb-2 w-100'
                                    onBlur={handleBlur}
                                    type='text'
                                    name='name'
                                    placeholder='Enter Your Name'
                                    required
                                />
                            )}


                            {newUser && (
                                <input
                                    className='mb-2 w-100'
                                    onBlur={handleBlur}
                                    type='text'
                                    name='email'
                                    placeholder='Enter email'
                                    required
                                />
                            )}

                            {newUser && (
                                <input
                                    className='mb-2 w-100'
                                    onBlur={handleBlur}
                                    type='password'
                                    name='password'
                                    placeholder='Enter password'
                                    required
                                />
                            )}
                            {
                                newUser &&
                                <div>
                                    <label htmlFor="" className="">Enter Stripe Payment Number</label>
                                    <br /><br />
                                    <CardElement required className="w-100" />
                                </div>

                            }


                            {
                                !newUser && <input
                                    className='mb-2 w-100'
                                    onBlur={handleBlur}
                                    type='email'
                                    name='email'
                                    placeholder='Enter email'
                                    required
                                />
                            }

                            {
                                !newUser && <input
                                    className='mb-2 w-100'
                                    onBlur={handleBlur}
                                    type='password'
                                    name='password'
                                    placeholder='Enter password'
                                    required
                                />
                            }

                            {/* <p className='text-left mb-2 px-3'>
                        <span className='float-right'>
                            <Link to="/">Forgot Password ?</Link>
                        </span>
                    </p> */}
                            <input
                                className='mt-3 w-100'
                                type='submit'
                                value={newUser ? 'Create an account' : 'Login'}
                            />
                            <div>
                                {!newUser && (
                                    <div className='login-qstn'>
                                        <span>Don't have an account? </span>
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
                                        <span>Already have an account? </span>
                                        <span className='pl-1'>
                                            <span style={{ color: 'orange', cursor: 'pointer', fontSize: '20px' }} onClick={() => setNewUser(!newUser)}>
                                                Login
                                            </span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                }
            </div>
        </div>
    );
};
export default SimpleCardForm;