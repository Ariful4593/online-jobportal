import React from 'react';
import './NeedWorkDone.css';
import needWorkDoneData from '../../../fakedata/homePageData/needWorkDoneData';
const NeedWorkDone = () => {
    return (
        <React.Fragment>
            <div className="row need-something-done-area">
                <div className="col-12 need-something-done">
                    <h1 className="need-something-done-title">
                        Need something done?
                    </h1>
                </div>
                {
                    needWorkDoneData.map((data, index) => (
                        <div className="col-md-3 need-work-done-area" key={index}>
                            <div className="row d-flex align-items-center">
                                <div className="col-md-4 img">
                                    <img className="w-100" src={data.img} alt="" />
                                </div>
                                <div className="col-md-8 ">
                                    <h4 className="title">{data.title}</h4>
                                </div>
                            </div>
                            <div>
                                <p className="description">{data.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <hr className="need-work-done-hr" />
        </React.Fragment>
    );
};

export default NeedWorkDone;