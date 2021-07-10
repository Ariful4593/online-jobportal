import React from 'react';
import './UrgentContest.css';
import urgentContestData from '../../../../fakedata/postProjectData/urgentContestData';
import HowLongRunContest from '../HowLongRunContest/HowLongRunContest';
import { useState } from 'react';
import { useContext } from 'react';
import { collectionContext } from '../../../../App';
const UrgentContest = ({ urgentBgColor, urgentCategory, handleUrgent, file }) => {

    const { value1 } = useContext(collectionContext);
    const [loginInfo, setLoginInfo] = value1;


    const priceArray = ['not-urgent', 'urgent']

    const [bgColor, setBgColor] = useState('')
    const [contestType, setContestType] = useState('')
    const handleWhatTypeContestRun = (contestRun, data) => {
        setContestType(contestRun)
        setBgColor(contestRun)

        const newTypesOfContestRun = { ...loginInfo };
        newTypesOfContestRun.whatTypeContestRun = data.whatTypeOfContestTitle;
        setLoginInfo(newTypesOfContestRun)

    }
    return (
        <div className="is-urgent-area col-12">

            <h4>{urgentContestData.title}</h4>
            <div className="row urgent-area-block">
                {
                    urgentContestData.category.map((data, index) => (
                        <div className={`col-md-6 ${priceArray[index]}`}
                            key={index}
                            onClick={() => handleUrgent(priceArray[index], data)}

                            style={{ background: `${urgentBgColor === priceArray[index] ? '#f0f0f0' : ''}` }}
                        >
                            <div className="row d-flex align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <h5 className="project">{data.urgentContestTitle}</h5>
                                    <small className="project-hints">{data.description}</small>
                                    <h6 className="hints mt-3">{data.status}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                urgentCategory === 'not-urgent' && <HowLongRunContest handleWhatTypeContestRun={handleWhatTypeContestRun} contestType={contestType} file={file}
                    bgColor={bgColor}
                />

            }

            {
                urgentCategory === 'urgent' && <HowLongRunContest
                    urgentCategory={urgentCategory}
                    handleWhatTypeContestRun={handleWhatTypeContestRun} contestType={contestType} file={file}
                    bgColor={bgColor}
                />
            }
        </div>
    );
};

export default React.memo(UrgentContest);