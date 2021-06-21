import React from 'react';
import { useParams } from 'react-router-dom';
import './SinglePost.css';
const SinglePost = () => {
    const getSessionData = JSON.parse(sessionStorage.getItem('data'));
    const { id } = useParams()
    const singlePostData = getSessionData.find(data => data._id === id)
    return (
        <div className="single-post">
            <div className="row">
                <div className="col-12 project-title">
                    <h1>{singlePostData.orderProject.title}</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 project-details-area mt-4">
                        <div className="project-details-title-area">
                            <div className="row ">
                                <div className="col-md-9">
                                    <h3>Project Details</h3>
                                </div>
                                <div className="col-md-3 p-0">
                                    <h5 className="bidding-price">$30.00 – 250.00 USD</h5>
                                    <small className="bidding">BIDDING ENDS IN 6 DAYS, 23 HOURS</small>
                                </div>
                            </div>
                            <div className="row project-details-description-area">
                                <div className="col-12">
                                    <p>{singlePostData.orderProject.projectDescription}</p>

                                    <div className="skill-area">
                                        <span className="badge badge-primary text-primary">Node.js</span>
                                        <span className="badge badge-secondary text-secondary">Andular JS</span>
                                        <span className="badge badge-success text-success">Typescript</span>
                                        <span className="badge badge-danger text-danger">Angular Material</span>
                                        <span className="badge badge-warning text-warning">Google APIs</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="project-bid mt-4">
                            <div className="row p-3">
                                <div className="col-12">
                                    <h3>Place a Bid on this Project</h3>
                                </div>
                                <p>Bid Details</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Bid Amount</h6>
                                        <input className="form-control" type="number" />
                                    </div>
                                    <div className="col-md-6">
                                        <h6>This project will be delivered in</h6>
                                        <input className="form-control" type="number" />
                                    </div>
                                    <small>Paid to you: $140.00 - $14.00 fee = $126.00</small>
                                </div>
                                <div className="row mt-3 proposal">
                                    <div className="col-12">
                                        <h6>Describe your proposal</h6>
                                        <textarea placeholder="What makes you the best candidate for this project?" name="" id="" cols="95" rows="10">
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row place-bid">
                            <div className="col-12 text-right">
                                <button className="btn btn-danger">Place bid</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 ">
                        <div className="client-area mt-4">
                            <div className="about-client">
                                <h4>About the Client</h4>
                            </div>
                            <div className="client-details">
                                <p>Singapore</p>
                                <p>Member since Aug 13, 2012</p>
                                <h5 style={{ fontWeight: 'bold' }}>Client Verification</h5>
                                <p> Identity verified</p>
                                <p>Payment method verified</p>
                                <p>Deposit made</p>
                                <p> Email address verified</p>
                                <p> Profile completed</p>
                                <p>Phone number verified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SinglePost;