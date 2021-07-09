import React from 'react';
import './Budget.css';
import budgetData from '../../../fakedata/postProjectData/budgetData';
import payByHourData from '../../../fakedata/postProjectData/payByHourData';
import { useContext } from 'react';
import { collectionContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';
import ProjectType from '../ProjectType/ProjectType';

const Budget = ({ file, setCounter, price }) => {
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


    const [currentCategory, setCurrentCategory] = useState('');
    const [projectTypeBgColor, setProjectTypeBgColor] = useState('')
    const handleProjectType = (type, data) => {
        setCurrentCategory(type);
        setProjectTypeBgColor(type);

        const newProjectType = { ...loginInfo };
        newProjectType.projectType = data.chooseProjectTitle;
        setLoginInfo(newProjectType)
    }
    return (
        <React.Fragment>
            <div className="budget col-12">
                {
                    <div className="row budget-row">
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
                            <select className="w-100 form-control" name="price" id="price" value={limit} onChange={(e) => setLimit(e.target.value)}>
                                {
                                    price === 'pay-by-hour' ? payByHourData.projetLimit.map((data, index) => (
                                        <option key={index} value={data}>{data}</option>
                                    ))
                                        :
                                        budgetData.projetLimit.map((data, index) => (
                                            <option key={index} value={data}>{data}</option>
                                        ))
                                }
                            </select>
                        </div>
                    </div>
                }
            </div>
            <ProjectType
                currentCategory={currentCategory}
                handleProjectType={handleProjectType}
                file={file}
                projectTypeBgColor={projectTypeBgColor}
            />
        </React.Fragment>
    );
};

export default React.memo(Budget);