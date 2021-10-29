import React, { useEffect, useState } from 'react';
import './ProfileDetails.css';
import { HiOutlineCurrencyDollar, HiBadgeCheck } from 'react-icons/hi';
import { FaFlag } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { RiRadioButtonLine } from 'react-icons/ri';
import { AiOutlineClockCircle } from 'react-icons/ai';
import verificationTypeData from '../../../../fakedata/viewProfileData/rightSideData/verificationTypeData';
import { Link } from 'react-router-dom';
import upload_image from '../../../../images/upload image/upload_image.png';
import Loader from "react-loader-spinner";


const ProfileDetails = ({ editProfile, profileId }) => {


    const [userProfileData, setUserProfileData] = useState([]);
    const [proposalUser, setProposalUser] = useState([]);
    const getUserLogin = JSON.parse(localStorage.getItem('userLoginInfo'));


    useEffect(() => {
        let isMounted = true;
        fetch("http://localhost:4000/userLoginData")
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    const userData = data.find(item => item.email === getUserLogin.email);
                    const proposalUserData = data.find(item => item._id === profileId);
                    setProposalUser(proposalUserData)
                    setUserProfileData(userData)
                }
            })
        return () => { isMounted = false }
    }, []);

    const proposalUserImage = proposalUser ? proposalUser.imageFile : '';
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return (
        <div className="profile-details">
            {
                !proposalUser && userProfileData && <div className="row">
                    <div className="col-12 col-sm-4">
                        {
                            userProfileData && userProfileData.imageFile && userProfileData.imageFile.img ?
                                <img className="w-100 profile-image" style={{ height: '276px' }} src={`data:image/png;base64,${userProfileData.imageFile.img}`} alt="" />
                                :
                                <img className="w-100 profile-image" style={{ height: '276px' }} src={`${upload_image}`} alt="" />
                        }

                        <div className="row mt-4 online-area" >
                            <h4 className="profile-name">{userProfileData && userProfileData.name}</h4>

                            <p className="online"><RiRadioButtonLine style={{ color: 'green' }} /> I'm Online!</p>

                            <h6><HiOutlineCurrencyDollar />  ${userProfileData && userProfileData.profileEdit && (userProfileData.profileEdit.hourlyRate ? userProfileData.profileEdit.hourlyRate : '')} USD / Hour</h6>

                            <p><FaFlag />  Chittagong Bangladesh</p>

                            <p><AiOutlineClockCircle /> It's currently {`${hours}:${minutes}`} {hours > 12 ? 'PM' : 'AM'} here</p>

                            <p><HiBadgeCheck /> Joined April 9, 2021</p>

                            <p><GiSelfLove /> 0 Recommendations</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 mt-2">
                        <div className="row">
                            <div className="col-sm-6 edit-profile-name">
                                <h4 className="">{(userProfileData && userProfileData.name)}</h4>
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
                            {
                                !proposalUser && <div className="col-12 col-sm-6 profile-edit-profile-button">
                                    <button className="" onClick={() => editProfile()}>Edit Profile</button>
                                </div>
                            }

                        </div>


                        {
                            <h6 className="user-pro-title">{userProfileData && userProfileData.profileEdit && (userProfileData.profileEdit.headline ? userProfileData.profileEdit.headline : '')}</h6>
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
                        <p>{userProfileData && userProfileData.profileEdit && (userProfileData.profileEdit.summery ? userProfileData.profileEdit.summery : '')}</p>
                    </div>
                </div>
            }


            {/* Proposal user */}
            {
                proposalUser && <div className="row">
                    <div className="col-12 col-sm-4">
                        {
                            proposalUser && proposalUserImage && proposalUserImage.img ?
                                <img className="w-100 profile-image" style={{ height: '276px' }} src={`data:image/png;base64,${proposalUserImage.img}`} alt="" />
                                :
                                <img className="w-100 profile-image" style={{ height: '276px' }} src={`${upload_image}`} alt="" />
                        }

                        <div className="row mt-4 online-area" >
                            <h4 className="profile-name">{proposalUser && proposalUser.name}</h4>

                            <p className="online"><RiRadioButtonLine style={{ color: 'green' }} /> I'm Online!</p>

                            <h6><HiOutlineCurrencyDollar />  ${proposalUser && proposalUser.profileEdit && (proposalUser.profileEdit.hourlyRate ? proposalUser.profileEdit.hourlyRate : '')} USD / Hour</h6>

                            <p><FaFlag />  Chittagong Bangladesh</p>

                            <p><AiOutlineClockCircle /> It's currently {`${hours}:${minutes}`} {hours > 12 ? 'PM' : 'AM'} here</p>

                            <p><HiBadgeCheck /> Joined April 9, 2021</p>

                            <p><GiSelfLove /> 0 Recommendations</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 mt-2">
                        <div className="row">
                            <div className="col-sm-6 edit-profile-name">
                                <h4 className="">{(proposalUser && proposalUser.name) ? proposalUser.name : <Loader type="ThreeDots" color="#00BFFF" height={40} width={80} />}</h4>
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
                            {
                                !proposalUser && <div className="col-12 col-sm-6 profile-edit-profile-button">
                                    <button className="" onClick={() => editProfile()}>Edit Profile</button>
                                </div>
                            }

                        </div>


                        {
                            <h6 className="user-pro-title">{proposalUser && proposalUser.profileEdit && (proposalUser.profileEdit.headline ? proposalUser.profileEdit.headline : '')}</h6>
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
                        <p>{proposalUser && proposalUser.profileEdit && (proposalUser.profileEdit.summery ? proposalUser.profileEdit.summery : '')}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProfileDetails;