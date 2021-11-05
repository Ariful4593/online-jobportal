import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { collectionContext } from '../../../../App';
import WhatTypeOfContestRun from '../WhatTypeOfContestRun/WhatTypeOfContestRun';
import './HowLongRunContest.css';
import { longContestFnc } from '../../PostProjectDriver/PostProjectDriver';


const HowLongRunContest = ({ bgColor, handleWhatTypeContestRun, urgentCategory, contestType, file }) => {

    const { value1 } = useContext(collectionContext);
    const [loginInfo, setLoginInfo] = value1;
    const [howLongRunContest, setHowLongRunContest] = useState(0);

    useEffect(() => {
        longContestFnc(loginInfo, howLongRunContest, setLoginInfo);
    }, [howLongRunContest]);


    return (
        <div className="row how-long-run-area">
            {
                !urgentCategory && <div className="col-12 mt-2 ">
                    <div className="row">
                        <h4 className="long-run-title">How long would you like to run your contest?</h4>
                        <div className="col-3 col-md-1 dollar-sign" >
                            Days
                        </div>
                        <div className="col-9 col-md-6 contest-budget">
                            <input type="number"
                                value={howLongRunContest} onChange={(e) => setHowLongRunContest(e.target.value)}
                                className="w-100  form-control"
                            />
                        </div>
                    </div>
                </div>
            }
            <WhatTypeOfContestRun
                handleWhatTypeContestRun={handleWhatTypeContestRun}
                contestType={contestType}
                file={file}
                bgColor={bgColor}
            />
        </div>
    );
};

export default React.memo(HowLongRunContest);