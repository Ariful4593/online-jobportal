import React from 'react';
import whatTypeOfContestRunData from '../../../../fakedata/postProjectData/whatTypeOfContestRunData';
import Guaranted from '../Guaranted/Guaranted';
import './WhatTypeOfContestRun.css';
const WhatTypeOfContestRun = ({ bgColor, handleWhatTypeContestRun, contestType, file }) => {



    const contestTypeArray = ['guaranteed-contest', 'basic-contest']

    return (
        <div className="what-type-of-contest-run-area col-12">


            <div className="row what-type-of-contest-run-area-block">
                <h4 className="contest-run-title">{whatTypeOfContestRunData.title}</h4>
                {
                    whatTypeOfContestRunData.category.map((data, index) => (
                        <div className={`col-md-6 ${contestTypeArray[index]}`} key={index}
                            onClick={() => handleWhatTypeContestRun(contestTypeArray[index], data)}
                            style={{ background: `${bgColor === contestTypeArray[index] ? '#f0f0f0' : ''}` }}
                        >
                            <div className="row d-flex align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <h6 className="project">{data.whatTypeOfContestTitle}</h6>
                                    <small className="project-hints">{data.description}</small>
                                    <h6 className="hints mt-2">{data.status}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                contestType === 'guaranteed-contest' && <Guaranted file={file} />
            }
            {
                contestType === 'basic-contest' && <Guaranted contestType={contestType} file={file} />
            }
        </div>
    );
};

export default React.memo(WhatTypeOfContestRun);