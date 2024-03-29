import React, { useContext, useState } from 'react';
import './PostReview.css';
import Skills from '../../PostedJob/Skills/Skills';
import projectIcon from '../../../images/trusted/project-icon.svg';
import YesPostMyProject from '../YesPostMyProject/YesPostMyProject';
import { collectionContext } from '../../../App';
import StringManipulation from '../../StringManipulation/StringManipulation';
import { useEffect } from 'react';
import { budgetStateData } from '../PostProjectDriver/PostProjectDriver';


const PostReview = ({ contestType, userInfo, currentCategory }) => {


    const { value1 } = useContext(collectionContext)
    const [loginInfo] = value1;
    const { title, description, skillData } = loginInfo;
    const budgetData = StringManipulation(loginInfo.budget);
    const [budgetState, setBudgetState] = useState({})

    useEffect(() => {
        budgetStateData(budgetState, loginInfo, setBudgetState);
    }, [loginInfo.budget, loginInfo.currencyName]);



    return (
        <React.Fragment>
            {
                <div className="review-post-area mt-4">
                    <h4>Are these details correct?</h4>
                    <div className="col-12  review-post">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4 project-icon">
                                <img className="" src={projectIcon} alt="" />
                                <h5>Project</h5>
                                <p><small>{budgetData ? budgetData : `$${budgetState.price}.00 ${budgetState.currency}`}</small></p>
                            </div>
                            <div className="col-md-8">
                                <div className="review-post-content">
                                    <h4 className="review-post-title">{title}</h4>
                                    <p className="review-post-description">{description}</p>
                                    <Skills skillData={skillData} />
                                </div>
                                {
                                    !contestType && <div className="post-guaranty-type">
                                        <h5>Guaranted</h5>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    {
                        currentCategory === 'recruiter-contest' && <div>
                            <div className="recruiter-item">
                                <div className="recruiter-item-content">
                                    <p>Your project will be sent live immediately, but you will not be charged yet.</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            }
            <YesPostMyProject
                budgetState={budgetState}
                budgetData={budgetData}
                userInfo={userInfo}
            />
        </React.Fragment>
    );
};

export default React.memo(PostReview);