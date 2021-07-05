import React from 'react';
import './Budget.css';
import budgetData from '../../../fakedata/postProjectData/budgetData';
import NextButton from '../NextButton/NextButton';
import { useContext } from 'react';
import { collectionContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';


const Budget = ({ setCounter }) => {
    const { value1 } = useContext(collectionContext)
    const [loginInfo, setLoginInfo] = value1;
    const [rate, setRate] = useState('');
    const [limit, setLimit] = useState('');

    const projectId = Math.random().toString(36).substring(7);


    useEffect(() => {
        setRate('USD');
        setLimit('Micro project ($10.00 - 30.00 USD)');
    }, [])

    useEffect(() => {
        const newLoginInfo = { ...loginInfo };
        newLoginInfo.currencyName = rate;
        newLoginInfo.budget = limit;
        newLoginInfo.projectId = projectId;
        newLoginInfo.status = 'Pending';
        setLoginInfo(newLoginInfo)
    }, [rate, limit])
    return (
        <div className="budget">
            {
                <div className="row">
                    <h4>{budgetData.title}</h4>
                    <div className="col-md-2 mt-2 rate">
                        <select className="w-100 form-control" name="currency" id="currency" value={rate} onChange={(e) => setRate(e.target.value)}>
                            {
                                budgetData.rate.map((data, index) => (
                                    <option key={index} value={data}>{data}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-6 mt-2 limit">
                        <select className="w-100 form-control" name="cars" id="cars" value={limit} onChange={(e) => setLimit(e.target.value)}>
                            {
                                budgetData.projetLimit.map((data, index) => (
                                    <option key={index} value={data}>{data}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            }
            <NextButton setCounter={setCounter} />
        </div>
    );
};

export default React.memo(Budget);