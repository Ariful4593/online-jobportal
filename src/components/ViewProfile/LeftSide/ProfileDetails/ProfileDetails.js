import React, { useContext, useEffect, useState } from 'react';
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
import { profileDetailsFnc } from '../../ProfileDriver/ProfileDriver';
import { collectionContext } from '../../../../App';



const ProfileDetails = ({ editProfile, profileId, saveData, postData }) => {


    const { value7 } = useContext(collectionContext);
    const { userName, headline, hourlyRate, summery, joiningDate, img } = postData;
    const [profileData,] = value7;
    const [proposalUser, setProposalUser] = useState([]);
    const getUserLogin = JSON.parse(localStorage.getItem('userLoginInfo'));
    const proposalUserImage = proposalUser ? proposalUser.imageFile : '';
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    useEffect(() => {
        profileDetailsFnc(profileData, getUserLogin, profileId, setProposalUser);
    }, [profileData]);
    return (
        <div className="profile-details">
            {
                (proposalUser.length < 1 && postData) ? <div className="row">
                    <div className="col-12 col-sm-4 profile-block-area">
                        {
                            img ?
                                <img className="profile-image" style={{ height: '276px' }} src={`data:image/png;base64,${img}`} alt="" />
                                :
                                <img className="profile-image" style={{ height: '276px' }} src={`${upload_image}`} alt="" />
                        }

                        <div className="row mt-4 online-area" >
                            <h4 className="profile-name">{postData && userName}</h4>

                            <p className="online"><RiRadioButtonLine style={{ color: 'green' }} /> I'm Online!</p>

                            <h6><HiOutlineCurrencyDollar />  ${postData && hourlyRate} USD / Hour</h6>

                            <p><FaFlag />  Chittagong Bangladesh</p>

                            <p><AiOutlineClockCircle /> It's currently {`${hours}:${minutes}`} {hours > 12 ? 'PM' : 'AM'} here</p>

                            <p><HiBadgeCheck /> {`Joined ${postData && joiningDate}`} </p>

                            <p><GiSelfLove /> 0 Recommendations</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 mt-2">
                        <div className="row">
                            <div className="col-sm-6 edit-profile-name">
                                <h4 className="">{(postData && userName)}</h4>
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
                                proposalUser && <div className="col-12 col-sm-6 profile-edit-profile-button">
                                    <button className="" onClick={() => editProfile()}>Edit Profile</button>
                                </div>
                            }

                        </div>


                        {
                            <h6 className="user-pro-title">{headline}</h6>
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
                        <p>{summery}</p>
                    </div>
                </div>
                :
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

                            <p><HiBadgeCheck /> {`Joined ${proposalUser && proposalUser.joiningDate}`}</p>

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


            {/* Proposal user */}
            
        </div>
    );
};

export default ProfileDetails;