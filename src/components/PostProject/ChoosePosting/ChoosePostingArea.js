import React, { useContext } from 'react';
import { useState } from 'react';
import { collectionContext } from '../../../App';
import choosePostingData from '../../../fakedata/postProjectData/choosePostingData';
import HowToPay from '../HowToPay/HowToPay';
import StartContest from '../StartContest/StartContest';
import './ChoosePostingArea.css';
import { handlePayData } from '../PostProjectDriver/PostProjectDriver';
const ChoosePostingArea = ({ postingBgColor, currentCategory, handleCategory, setCounter, file }) => {
    const { value1 } = useContext(collectionContext);
    const [loginInfo, setLoginInfo] = value1;
    const categoryArray = ['post-project', 'start-contest'];
    const [payBgColor, setPayBgColor] = useState('');
    const [price, setPrice] = useState('');

    const handlePay = (pay, data) => handlePayData(pay, data, setPrice, setPayBgColor, loginInfo, setLoginInfo);

    return (
        <div className="col-sm-12 mt-4">
            <h4 className="p-0">{choosePostingData.title}</h4>
            <div className="choose-item">
                <div className="choose-item-content">
                    <p>{choosePostingData.chooseItemContent}</p>
                </div>
            </div>
            <div className="row choose-category">
                {
                    choosePostingData.category.map((data, index) => (
                        <div className={`col-md-6  ${categoryArray[index]}`}
                            key={index}
                            onClick={() => handleCategory(categoryArray[index], data)}
                            style={{ background: `${postingBgColor === categoryArray[index] ? '#f0f0f0' : ''}` }}
                        >
                            <div className="row d-flex align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <h6 className="project">{data.choosePostTitle}</h6>
                                    <small className="project-hints">{data.description}</small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


            {
                currentCategory === 'post-project' && <HowToPay
                    setCounter={setCounter}
                    price={price}
                    file={file}
                    handlePay={handlePay}
                    payBgColor={payBgColor}
                />
            }
            {
                currentCategory === 'start-contest' && <StartContest setCounter={setCounter} file={file} />
            }

        </div>
    );
};

export default React.memo(ChoosePostingArea);