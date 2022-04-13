import React, { useState, useContext, useEffect } from 'react';
import './EditEducation.css';
import countryName from '../../../../fakedata/editEducationData/country';
import universityName from '../../../../fakedata/editEducationData/university';
import year from '../../../../fakedata/editExperienceData/year';
import { editEducationSaveFnc } from '../../ProfileDriver/ProfileDriver';
import { collectionContext } from '../../../../App';
import Loader from "react-loader-spinner";


const EditEducation = ({ handleEditEducationSave }) => {


    const [country, setCountry] = useState('');
    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const { value7, value9 } = useContext(collectionContext);
    const [, setUpdateStatus] = value9;
    const [profileData, setProfileData] = value7;
    const [dots, setDots] = useState(false);

    useEffect(() => {
        setCountry(profileData[0].editEducation.countryName);
        setUniversity(profileData[0].editEducation.universityName);
        setDegree(profileData[0].editEducation.degree);
        setStartYear(profileData[0].editEducation.startYear);
        setEndYear(profileData[0].editEducation.endYear);
    }, [])

    const editEducationSave = () => {
        setDots(true);
        editEducationSaveFnc(country, university, degree, startYear, endYear, profileData, setUpdateStatus, handleEditEducationSave, setProfileData);

    }
    return (
        <div className="row experience-details-block">
            <div className="col-12 experience-details-title-block">
                <h1 className="experience-details-title">Education</h1>
            </div>
            <hr />
            <div className="col-12">
                <div className="row">
                    <div className="col-6">
                        <h6 className="name">Country</h6>
                        <div className=" w-100 col-md-5">
                            <select className="form-select" value={country} onChange={(e) => setCountry(e.target.value)} aria-label="Default select example">
                                <option  >Select Country</option>
                                {
                                    countryName.map((item, index) => (
                                        <option value={item} key={index}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <h6 className="name">University/College</h6>
                        <div className="w-100 col-md-5">
                            <select className="form-select" value={university} onChange={(e) => setUniversity(e.target.value)} aria-label="Default select example">
                                <option  >Select University</option>

                                {
                                    universityName.map((item, index) => (
                                        <option value={item} key={index}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <h6 className="name">Degree</h6>
                <input type="text" className="form-control" value={degree} onChange={(e) => setDegree(e.target.value)} placeholder="Enter your degree" />
            </div>

            <div className="col-12 mb-3">
                <div className="row">
                    <div className="col-6">
                        <div className="row">

                            <div className="col-md-5">
                                <h6 className="name">Start Year</h6>
                                <select className="form-select" value={startYear} onChange={(e) => setStartYear(e.target.value)} aria-label="Default select example">
                                    <option  >Select Year</option>
                                    {
                                        year.map((item, index) => (
                                            <option value={item} key={index}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-md-5">
                                <h6 className="name">End Year</h6>
                                <select className="form-select" value={endYear} onChange={(e) => setEndYear(e.target.value)} aria-label="Default select example">
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
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-3 mb-3" style={{ textAlignLast: 'end' }}>
                    <button className="cancel-button" onClick={() => handleEditEducationSave()}>Cancel</button>
                    <button className="save-button" disabled={(country && university && degree && startYear && endYear) ? false : true} onClick={() => editEducationSave()}>{dots ? <Loader type="ThreeDots" color="#00BFFF" height={30} width={40} /> : 'Save'}</button>
                </div>
            </div>
        </div>
    );
};

export default EditEducation;