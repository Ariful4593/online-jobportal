import React from 'react';
import choosePostingData from '../../../fakedata/postProjectData/choosePostingData';
import './ChoosePostingArea.css';
const ChoosePostingArea = ({ setCounter }) => {
    return (
        <div>
            <h4 className="p-0">{choosePostingData.title}</h4>
            <div className="choose-item">
                <div className="choose-item-content">
                    <p>{choosePostingData.chooseItemContent}</p>
                </div>
            </div>
            {
                choosePostingData.category.map((data, index) => (
                    <div className="col-md-6 category" key={index} onClick={() => setCounter((counter) => counter + 1)}>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4 text-center">
                                <img src={data.img} alt="" />
                            </div>
                            <div className="col-md-8">
                                <h6 className="project">{data.title}</h6>
                                <small>{data.description}</small>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    );
};

export default React.memo(ChoosePostingArea);