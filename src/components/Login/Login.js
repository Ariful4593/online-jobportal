import React, { useContext } from 'react';
import { useState } from 'react';
import worldMobile from '../../images/globe-mobile.jpg';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';
import './Login.css';
import Home from '../Home/Home';
import { collectionContext } from '../../App';
const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [card, setCard] = useState()
    const [employer, setEmployer] = useState(false);
    const [jobSeaker, setJobSeaker] = useState(false);
    const { value10 } = useContext(collectionContext)
    const handleEmployer = () => {
        setEmployer(true)
        setJobSeaker(false)
    }
    const handleJobseaker = () => {
        setJobSeaker(true)
        setEmployer(false)
    }
    const [signIn,] = value10;
    const [stripePromise] = useState(() => loadStripe(('pk_test_51HZp7VIFvbZO7xjYzMuCl9Dg8ITpUsSOwQX6LSfH45broJINKMrTNjw0Ls4TvaruUP9P94xnOO3fX3pXcQeJ1mkp00YyPWDvqq')))

    const cardData = (cardInfo) => {
        setCard(cardInfo)
    }

    const userLoginInfo = JSON.parse(localStorage.getItem('userLoginInfo'))

    return (
        <React.Fragment>
            <div className="login-block">
                <div className={`row ${signIn ? 'style-row' : 'login-block-row'}`}>
                    <div className="col-12 col-md-6 login-page">
                        <h1 className="display-4 title">Hire the best <br /> freelancers for any job, online.</h1>
                        <p className="title-description">Millions of people use freelancer.com to turn their ideas into reality.</p>

                        {
                            !userLoginInfo && <React.Fragment>
                                <div className="btn-area">
                                    <button className="btn hire-freelancer" onClick={() => handleEmployer()}>Hire a Freelancer</button>
                                    <button className="btn find-work" onClick={() => handleJobseaker()}>Earn Money Freelancing</button>
                                </div>

                                <div className="create-form mt-5 mb-5">
                                    <Elements stripe={stripePromise}>
                                        <SimpleCardForm cardData={cardData} employer={employer} jobSeaker={jobSeaker}></SimpleCardForm>
                                    </Elements>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center login-img">
                        <img className="w-75" src={worldMobile} alt="" />
                    </div>
                </div>

            </div>
            <Home />
        </React.Fragment>
    );
};

export default Login;