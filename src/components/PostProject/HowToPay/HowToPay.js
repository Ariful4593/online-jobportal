import React from 'react';
import './HowToPay.css';
import howToPayData from '../../../fakedata/postProjectData/howToPayData';
import Budget from '../Budget/Budget';
const HowToPay = ({ payBgColor,handlePay, setCounter, price, file }) => {

    const priceArray = ['fixed-price', 'pay-by-hour']
    return (
        <React.Fragment>
            <div className="how-to-pay col-12">

                <div className="row how-to-pay-block">

                    <h4>{howToPayData.title}</h4>
                    {
                        howToPayData.category.map((data, index) => (
                            <div className={`col-md-6 ${priceArray[index]}`}
                                key={index}
                                onClick={() => handlePay(priceArray[index], data)}
                                style={{background: `${payBgColor === priceArray[index] ? '#f0f0f0' : ''}`}}
                            >
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-4 text-center">
                                        <img src={data.img} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <h6 className="project">{data.payTitle}</h6>
                                        <small className="project-hints">{data.description}</small>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                price === 'fixed-price' && <Budget file={file} setCounter={setCounter} />
            }

            {
                price === 'pay-by-hour' && <Budget file={file} setCounter={setCounter} price={price} />
            }
        </React.Fragment>
    );
};

export default React.memo(HowToPay);