import React, { useState, useEffect } from 'react';
import './Proposal.css';
import profile from '../../../images/upload image/upload_image.png';
import { Link } from 'react-router-dom';

const Proposal = ({ id }) => {

    const [singlePost, setSinglePost] = useState([]);
    useEffect(() => {
        let isMounted = true;
        fetch('http://localhost:4000/getPostProject')
            .then(res => res.json())
            .then(data => {
                if(isMounted){
                    data.find(dt => {
                    const post = dt.postInfo.find(td => td.projectId === id)
                    if (post) {
                        setSinglePost(post)
                    }
                    return post;
                })
                }
            })
            return () => {isMounted = false}
    }, [])

    return (
        <div className="project-details-title-area">
            {
                (singlePost && singlePost.biddingPeople) ? singlePost.biddingPeople.map((item, index) => (
                    <div className="row " key={index}>
                        <div className="col-sm-9 details-left">
                            <div className="row">
                                <div className="col-md-2">
                                    <img className="w-100" src={profile} alt="" />
                                </div>
                                <div className="col-md-10">

                                    <h2 style={{ marginBottom: '0px' }}>
                                        <Link className="proposal-user-link" to={`/proposal-user-profile/${item.userLoginId}`}>
                                            {item.name}
                                        </Link>
                                    </h2>
                                    <small style={{ fontSize: '16px', fontWeight: 'normal' }} className="bidding">5 star review</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 details-right">
                            <h5 className="bidding-price">{item.bidAmount}</h5>
                            <small style={{ fontSize: '16px', fontWeight: 'normal' }} className="bidding">{`in ${item.projectDelivered} days`}</small>
                        </div>
                        <p className="mt-4">{item.describeProposal}</p>
                        <hr />
                    </div>
                ))
                    :
                    <p>No one has bid yet!</p>
            }
        </div>
    );
};

export default Proposal;