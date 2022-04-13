import React, { useState, useContext, useEffect } from 'react';
import './EditQualification.css';
import year from '../../../../fakedata/editExperienceData/year';
import { saveEditQualificationFnc } from '../../ProfileDriver/ProfileDriver';
import { collectionContext } from '../../../../App';
import Loader from "react-loader-spinner";


const EditQualification = ({ handleEditQualificationSave }) => {

    const [certificate, setCertificate] = useState('');
    const [organization, setOrganization] = useState('');
    const [summary, setSummary] = useState('');
    const [startYear, setStartYear] = useState('')
    const [dots, setDots] = useState(false);
    const { value7, value9 } = useContext(collectionContext);
    const [, setUpdateStatus] = value9;
    const [profileData, setProfileData] = value7;

    useEffect(() => {
        setCertificate(profileData[0].editQualification.certificate);
        setOrganization(profileData[0].editQualification.organization);
        setSummary(profileData[0].editQualification.certificateSummary);
        setStartYear(profileData[0].editQualification.certificateStartYear);
    }, [])


    const saveEditQualification = () => {
        setDots(true);
        saveEditQualificationFnc(certificate, organization, summary, startYear, profileData, handleEditQualificationSave, setUpdateStatus, setProfileData);
    }
    return (
        <div className="row experience-details-block">
            <div className="col-12 experience-details-title-block">
                <h1 className="experience-details-title">Qualification</h1>
            </div>
            <hr />
            <div className="col-sm-6 name-block">
                <h6 className="name">Professional Certificate or Award</h6>
                <input type="text" className="form-control" value={certificate} onChange={(e) => setCertificate(e.target.value)} placeholder="Enter your position or title" />
            </div>
            <div className="col-sm-6 name-block">
                <h6 className="name">Conferring Organization</h6>
                <input type="text" className="form-control" value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="Enter company name" />
            </div>
            <div className="col-12 mb-3">
                <div className="row">
                    <div className="col-12">
                        <h6 className="name">Summary</h6>
                        <textarea name="" value={summary} onChange={(e) => setSummary(e.target.value)} className="form-control" id="" cols="30" rows="10"></textarea>

                    </div>
                    <div className="col-3">
                        <h6 className="name">Start Year</h6>
                        <div className=" w-100 col-md-5">
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

            </div>
            <div className="row">
                <div className="col-12 mt-3 mb-3" style={{ textAlignLast: 'end' }}>
                    <button className="cancel-button" onClick={() => handleEditQualificationSave()} >Cancel</button>

                    <button className="save-button" disabled={(certificate && organization && summary && startYear) ? false : true} onClick={() => saveEditQualification()}>{dots ? <Loader type="ThreeDots" color="#00BFFF" height={30} width={40} /> : 'Save'}</button>
                </div>
            </div>
        </div>
    );
};

export default EditQualification;