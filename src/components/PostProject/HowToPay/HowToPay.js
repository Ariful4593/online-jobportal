import React from 'react';
import './HowToPay.css';
import howToPayData from '../../../fakedata/postProjectData/howToPayData';
const HowToPay = ({ setCounter }) => {
    return (
        <div className="how-to-pay">
            <div className="row">
                {
                    <div>
                        <h4>{howToPayData.title}</h4>
                        {
                            howToPayData.category.map((data, index) => (
                                <div className="col-md-6 pay-category" key={index} onClick={() => setCounter((counter) => counter + 1)}>
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
                }
            </div>
        </div>
    );
};

export default React.memo(HowToPay);