import React, { useState, useContext } from 'react';
import './EditExperience.css';
import month from '../../../../fakedata/editExperienceData/month';
import year from '../../../../fakedata/editExperienceData/year';
import { collectionContext } from '../../../../App';
import Loader from "react-loader-spinner";


const EditExperience = ({ handleExperienceSave, setLoadExperienceData }) => {

    const [title, setTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [startMonth, setStartMonth] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
    const [summary, setSummary] = useState('');
    const [dots, setDots] = useState(false);
    const { value9 } = useContext(collectionContext);
    const [, setUpdateStatus] = value9;


    const getUserLoginInfo = JSON.parse(localStorage.getItem('userLoginInfo'))
    const saveButton = () => {
        setDots(true);
        fetch('https://warm-anchorage-86355.herokuapp.com/editExperience', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ experinceTitle: title, companyName: companyName, jobStartMonth: startMonth, jobStartYear: startYear, jobEndMonth: endMonth, jobEndYear: endYear, jobSummary: summary, id: getUserLoginInfo._id })
        }).then(res => res.json())
            .then(data => {
                setUpdateStatus(true);
                setLoadExperienceData(data);
                setTimeout(() => {
                    handleExperienceSave();
                }, 4000);

            })

    }
    return (
        <div className="row experience-details-block">
            <div className="col-12 experience-details-title-block">
                <h1 className="experience-details-title">Experiece</h1>
            </div>
            <hr />
            <div className="col-sm-6 name-block">
                <h6 className="name">Title</h6>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your position or title" />
            </div>
            <div className="col-sm-6 name-block">
                <h6 className="name">Company</h6>
                <input type="text" className="form-control" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Enter company name" />
            </div>
            <div className="col-12 mb-3">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <h6 className="name">Start</h6>
                            <div className="col-md-5">

                                <select className="form-select" value={startMonth} onChange={(e) => setStartMonth(e.target.value)} aria-label="Default select example">
                                    <option  >Select Month</option>
                                    {
                                        month.map((item, index) => (
                                            <option value={item} key={index}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-md-5">
                                <select className="form-select" value={startYear} onChange={(e) => setStartYear(e.target.value)} aria-label="Default select example">
                                    <option  >Select Year</option>

                                    {
                                        year.map((item, index) => (
                                            <option value={item} key={index}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h6 className="name">End</h6>
                        <div className="row">
                            <div className="col-md-5">
                                <select className="form-select" value={endMonth} onChange={(e) => setEndMonth(e.target.value)} aria-label="Default select example">
                                    <option >Select Month</option>
                                    {
                                        month.map((item, index) => (
                                            <option value={item} key={index}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-md-5">
                                <select className="form-select" value={endYear} onChange={(e) => setEndYear(e.target.value)} aria-label="Default select example">
                                    <option >Select Year</option>

                                    {
                                        year.map((item, index) => (
                                            <option value={item} key={index}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h6 className="name">Summary</h6>
                        <textarea name="" value={summary} onChange={(e) => setSummary(e.target.value)} className="form-control" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-3 mb-3" style={{ textAlignLast: 'end' }}>
                    <button className="cancel-button" onClick={() => handleExperienceSave()}>Cancel</button>
                    <button className="save-button" disabled={(title && companyName && startMonth && startYear && endMonth && endYear && summary) ? false : true} onClick={() => saveButton()}>{dots ? <Loader type="ThreeDots" color="#00BFFF" height={30} width={40} /> : 'Save'}</button>
                </div>
            </div>
        </div>
    );
};

export default EditExperience;