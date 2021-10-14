import React, { useState } from 'react';
import './EditEducation.css';
import countryName from '../../../../fakedata/editEducationData/country';
import universityName from '../../../../fakedata/editEducationData/university';
import year from '../../../../fakedata/editExperienceData/year';
const EditEducation = ({ handleEditEducationSave, postData }) => {


    const [country, setCountry] = useState('');
    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');


    const { id } = postData;
    const editEducationSave = () => {
        fetch('http://localhost:4000/editEducation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ countryName: country, universityName: university, degree: degree, startYear: startYear, endYear: endYear, id: id })
        })
        handleEditEducationSave();
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
                    <button className="save-button" onClick={() => editEducationSave()}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditEducation;