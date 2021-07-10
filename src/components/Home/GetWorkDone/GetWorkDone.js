import React from 'react';
import './GetWorkDone.css';
import getWorkDoneData from '../../../fakedata/homePageData/getWorkDoneData';
const GetWorkDone = () => {
    return (
        <div className="row get-work-done">
            <h4 className="get-work-done-title">Get work done in over 1800 different categories</h4>

            {
                getWorkDoneData.map((data, index) => (
                    <div className="col-6 col-sm-2 get-work-done-single-block" key={index}>
                        <div className="container get-work-done-container">
                            <div className="row d-flex align-items-center">
                                <div className="col-12 col-sm-4 get-work-done-logo">
                                    <img className="w-100" src={data.img} alt="" />
                                </div>
                                <div className="col-12 col-sm-8 title__area">
                                    <h6 className="get-work-done-logo-title">{data.title}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default GetWorkDone;