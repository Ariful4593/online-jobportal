import React from 'react';
import { useState } from 'react';
import worldMobile from '../../images/globe-mobile.jpg';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';
import './Login.css';
const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [card, setCard] = useState()
    const [employer, setEmployer] = useState(false);
    const [jobSeaker, setJobSeaker] = useState(false)
    const handleEmployer = () => {
        setEmployer(true)
        setJobSeaker(false)
    }
    const handleJobseaker = () => {
        setJobSeaker(true)
        setEmployer(false)
    }

    const [stripePromise] = useState(() => loadStripe(('pk_test_51HZp7VIFvbZO7xjYzMuCl9Dg8ITpUsSOwQX6LSfH45broJINKMrTNjw0Ls4TvaruUP9P94xnOO3fX3pXcQeJ1mkp00YyPWDvqq')))
    
    const cardData = (cardInfo) => {
        setCard(cardInfo)
    }


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h1 className="display-4 title">Join the world's work marketplace</h1>
                    <p>Find great talent. Build your business.
                        Take your career to the next level.</p>

                    <div>
                        <button className="btn btn-success hire-freelancer" onClick={() => handleEmployer()}>Hire Freelancer</button>
                        <button className="btn btn-success find-work" onClick={() => handleJobseaker()}>Find Work</button>
                    </div>

                    <div className="create-form mt-5">
                        <Elements stripe={stripePromise}>
                            <SimpleCardForm cardData={cardData} employer={employer} jobSeaker={jobSeaker}></SimpleCardForm>
                        </Elements>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={worldMobile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;