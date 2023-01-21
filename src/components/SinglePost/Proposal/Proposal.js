import React, { useState, useEffect } from 'react';
import './Proposal.css';
import profile from '../../../images/upload image/upload_image.png';
import { Link } from 'react-router-dom';
import Loader from "react-loader-spinner";
import { useHistory } from 'react-router-dom';
import { getAuthUser } from '../../../Driver';

const Proposal = ({ id, setBiddingCount }) => {

    const [singlePost, setSinglePost] = useState([]);
    // const userLoginInfo = JSON.parse(localStorage.getItem('userLoginInfo'));
    const [retract, setRetract] = useState(false);
    const history = useHistory();
    const [userLoginInfo, setUserLoginInfo] = useState({});

    //Get authenticate user
    useEffect(() => {
        getAuthUser(setUserLoginInfo, history);
    }, [])


    useEffect(() => {
        let isMounted = true;
        fetch('https://online-jobplace-server-production.up.railway.app/getPostProject', {
            headers: {
                'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else if (res.status === 401) {
                    history.push('/login');
                }
            })
            .then(data => {
                if (isMounted) {
                    data.find(dt => {
                        const post = dt.postInfo.find(td => td.projectId === id)
                        if (post) {
                            setSinglePost(post);
                            setBiddingCount(post.biddingPeople);
                        }
                        return post;
                    })
                }
            })
        return () => { isMounted = false }
    }, [retract]);

    const retractPost = (projectOwnerId, proposalId) => {
        setRetract(true)
        fetch('https://online-jobplace-server-production.up.railway.app/retractPost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ projectOwnerId: projectOwnerId, proposalId: proposalId }),
        })
            .then(res => res.json())
            .then(data => setRetract(false))
    }
    return (
        <div className="project-details-title-area">
            {
                singlePost && singlePost.biddingPeople ?
                    <div>
                        {
                            (singlePost && singlePost.biddingPeople) ? singlePost.biddingPeople.map((item, index) => {
                                return (
                                    <div className="row " key={index}>
                                        <div className="col-sm-9 details-left">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img className="w-100" src={profile} alt="" />
                                                </div>
                                                <div className="col-md-10">

                                                    <h2 style={{ marginBottom: '0px' }}>
                                                        <Link className="proposal-user-link" to={`/proposal-user-profile/${item.userLoginId}`}>
                                                            {item.bidderName}
                                                        </Link>
                                                    </h2>
                                                    <small style={{ fontSize: '16px', fontWeight: 'normal' }} className="bidding">5 star review</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 details-right">
                                            <h5 className="bidding-price-proposal ">${(Number(item.bidAmount)).toFixed(2)} USD</h5>
                                            <small style={{ fontSize: '16px', fontWeight: 'normal' }} className="bidding">{`in ${item.projectDeliveredInDay} days`}</small>
                                        </div>
                                        <p className="mt-4">{item.describeProposal}</p>
                                        {
                                            userLoginInfo._id === item.userLoginId && <div className="press-next d-flex justify-content-end">
                                                <div className="row">
                                                    <ul>
                                                        <button onClick={() => retractPost(item.projectOwnerId
                                                            , item.proposalId)}>{retract ? <Loader type="Circles" color="#00BFFF" height={40} width={40} /> : 'Retract your post'}</button>
                                                    </ul>
                                                </div>
                                            </div>
                                        }

                                        <hr />
                                    </div>
                                )
                            })
                                :
                                <p>No one has bid yet!</p>
                        }
                    </div>
                    :
                    <Loader type="Circles" color="#00BFFF" height={40} width={40} />
            }


        </div>
    );
};

export default Proposal;