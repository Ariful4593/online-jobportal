import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import worldMobile from '../../images/globe-mobile.jpg';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';
import './Login.css';
import Home from '../Home/Home';
import { collectionContext } from '../../App';
const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [card, setCard] = useState()

    const { value10, value11, value12 } = useContext(collectionContext);
    const [employer, setEmployer] = value11;
    const [jobSeaker, setJobSeaker] = value12;
    const [current, setCurrent] = useState('');


    useEffect(() => {
        setCurrent('hire-freelancer')
    }, [])

    const handleEmployer = (type) => {
        setEmployer(true)
        setJobSeaker(false)
        setCurrent(type)
        console.log(employer)
    }
    const handleJobseaker = (type) => {
        setJobSeaker(true)
        setEmployer(false)
        setCurrent(type)
        console.log(jobSeaker)
    }
    const [signIn,] = value10;

    const cardData = (cardInfo) => {
        setCard(cardInfo)
    }

    const userLoginInfo = JSON.parse(localStorage.getItem('token'))

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
                                    {/* current */}
                                    <button
                                        className={`btn ${current === 'hire-freelancer' ? 'hire-freelancer' : 'find-work'}`}
                                        onClick={() => handleEmployer('hire-freelancer')}>Hire a Freelancer</button>
                                    <button
                                        className={`btn ${current === 'find-work' ? 'hire-freelancer' : 'find-work'}`}
                                        onClick={() => handleJobseaker('find-work')}>Earn Money Freelancing</button>
                                </div>

                                <div className="create-form mt-5 mb-5">
                                    <SimpleCardForm cardData={cardData} employer={employer} jobSeaker={jobSeaker}></SimpleCardForm>
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