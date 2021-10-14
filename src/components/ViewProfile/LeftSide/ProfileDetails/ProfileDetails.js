import React, { useContext, useEffect } from 'react';
import './ProfileDetails.css';

import { HiOutlineCurrencyDollar, HiBadgeCheck } from 'react-icons/hi';
import { FaFlag } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { RiRadioButtonLine } from 'react-icons/ri';
import { AiOutlineClockCircle } from 'react-icons/ai';
import verificationTypeData from '../../../../fakedata/viewProfileData/rightSideData/verificationTypeData';
import { Link } from 'react-router-dom';
import upload_image from '../../../../images/upload image/upload_image.png';
import { collectionContext } from '../../../../App';


const ProfileDetails = ({ editProfile }) => {

    const { value2, value3, value4, value5, value6, } = useContext(collectionContext)
    const [userName,] = value2;
    const [title,] = value3;
    const [description,] = value4;
    const [rate,] = value5;
    const [userAuth, setUserAuth] = value6;

    const { name } = JSON.parse(localStorage.getItem('userLoginInfo'))

    const loginData = userAuth.find(data => data.name === name);
    console.log(loginData)


    useEffect(() => {
        fetch("http://localhost:4000/userLoginData")
            .then(res => res.json())
            .then(data => { setUserAuth(data) })
    }, [userName, title, description, rate]);

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return (
        <div className="profile-details">
            {
                loginData && <div className="row">
                    <div className="col-12 col-sm-4">
                        {
                            loginData.imageFile.img ? <img className="w-100 profile-image" style={{ height: '276px' }} src={`data:image/png;base64,${loginData.imageFile.img}`} alt="" /> :
                                <img className="w-100 profile-image" style={{ height: '276px' }} src={`${upload_image}`} alt="" />
                        }

                        <div className="row mt-4 online-area" >
                            <h4 className="profile-name">{loginData.name}</h4>

                            <p className="online"><RiRadioButtonLine style={{ color: 'green' }} /> I'm Online!</p>

                            <h6><HiOutlineCurrencyDollar />  ${loginData.withoutPostProf.hourlyRate} USD / Hour</h6>

                            <p><FaFlag />  Chittagong Bangladesh</p>

                            <p><AiOutlineClockCircle /> It's currently {`${hours}:${minutes}`} {hours > 12 ? 'PM' : 'AM'} here</p>

                            <p><HiBadgeCheck /> Joined April 9, 2021</p>

                            <p><GiSelfLove /> 0 Recommendations</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 mt-2">
                        <div className="row">
                            <div className="col-sm-6 edit-profile-name">
                                <h4 className="">{loginData.name}</h4>
                            </div>
                            <ul className="verificaion-item-p">
                                {
                                    verificationTypeData.map((data, index) => (
                                        <li key={index}>
                                            <Link to="" className="text-dark"><data.icon /></Link>
                                        </li>
                                    ))
                                }

                            </ul>
                            <div className="col-12 col-sm-6 profile-edit-profile-button">
                                <button className="" onClick={() => editProfile()}>Edit Profile</button>
                            </div>
                        </div>


                        {
                            <h6 className="user-pro-title">{loginData.withoutPostProf.headline}</h6>
                        }


                        <div className="row">
                            <div className="col-2 col-md-2 job-state">
                                <h5 className="n-a">N/A</h5>
                            </div>
                            <div className="col-4 col-md-4 job-status">
                                Jobs Completed
                            </div>
                            <div className="col-2 col-md-2 job-state">
                                <h5 className="n-a">N/A</h5>
                            </div>
                            <div className="col-4 col-md-4  job-status">
                                On Budget
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 col-md-2 job-state">
                                <h5 className="n-a">N/A</h5>
                            </div>
                            <div className="col-4 col-md-4  job-status">
                                On Time
                            </div>
                            <div className="col-2 col-md-2 job-state">
                                <h5 className="n-a">N/A</h5>
                            </div>
                            <div className="col-4 col-md-4  job-status">
                                Repeat Hire Rate
                            </div>
                        </div>

                        <br />
                        <p>{loginData.withoutPostProf.summery}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProfileDetails;