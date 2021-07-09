import React, { useContext, useState } from 'react';
import './StartContest.css';
import UrgentContest from './UrgentContest/UrgentContest';
import startContestRate from '../../../fakedata/postProjectData/startContestRate';
import { useEffect } from 'react';
import { collectionContext } from '../../../App';
import { useCallback } from 'react';
const StartContest = ({ setCounter, file }) => {

    const { value1 } = useContext(collectionContext)
    const [loginInfo, setLoginInfo] = value1;

    const projectId = Math.random().toString(36).substring(7);

    const [rate, setRate] = useState('');
    const [currency, setCurrency] = useState('');
    const [urgentCategory, setUrgentCategory] = useState('')
    const [urgentBgColor, setUrgentBgColor] = useState('')

    const handleUrgent = useCallback((urgent, data) => {
        setUrgentCategory(urgent)
        setUrgentBgColor(urgent)

        const newStartContestState = { ...loginInfo };
        newStartContestState.days = data.urgentContestTitle
        setLoginInfo(newStartContestState);
    }, [])

    useEffect(() => {
        setCurrency('USD')
    }, [])

    useEffect(() => {
        const newStartContestState = { ...loginInfo };
        newStartContestState.currencyName = currency;
        newStartContestState.budget = rate;
        newStartContestState.projectId = projectId;
        newStartContestState.status = 'Pending';
        setLoginInfo(newStartContestState)
    }, [rate, currency])

    return (
        <div className="start-contest-area">
            <h4>What is your budget?</h4>

            <div className="col-12 mb-3 great-result-area">
                <div className="row great-result">
                    <h4>GREAT RESULTS</h4>
                    <small>Expect around 100 entries</small>
                </div>

                {
                    <div className="row">
                        <div className="col-md-6 mt-2 ">
                            <div className="row">
                                <div className="col-2 dollar-sign" >
                                    $
                                </div>
                                <div className="col-10 contest-budget">
                                    <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="w-100  form-control" required />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-2 currency-area">
                            <select className="w-100 form-control"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)} name="rate" id="rate"
                            >
                                {
                                    startContestRate.map((data, index) => (
                                        <option key={index} value={data}>{data}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                }
            </div>

            <UrgentContest
                urgentCategory={urgentCategory}
                handleUrgent={handleUrgent}
                file={file}
                urgentBgColor={urgentBgColor}
            />
        </div>
    );
};

export default React.memo(StartContest);