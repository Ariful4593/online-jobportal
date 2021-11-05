import React, { useState, useEffect } from 'react';
import './ProjectBid.css';
import Confetti from 'react-confetti';
import { placeBidFnc } from '../SinglePostDriver/SinglePostDriver';

const ProjectBid = ({ singlePost, id, userId, setDetails }) => {

    const [bidAmount, setBidAmount] = useState(singlePost.budget);
    const [projectDelivered, setProjectDelivered] = useState('');
    const [describeProposal, setDescribeProposal] = useState('');
    const [confetti, setConfetti] = useState(false);
    // const { width, height } = useWindowSize();
    const [userData, setUserData] = useState([])
    const userLoginInfo = JSON.parse(localStorage.getItem('userLoginInfo'));
    
    useEffect(() => {
        let isMounted = true;
        fetch('https://warm-anchorage-86355.herokuapp.com/userLoginData')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    const newData = data.find(item => item.email === userLoginInfo.email)
                    setUserData(newData)
                }
            })
        return () => { isMounted = false };
    }, [])

    const proposalId = Math.random().toString(36).substring(7);
    const placeBid = () => placeBidFnc(singlePost, bidAmount, projectDelivered, describeProposal, userId, id, userLoginInfo, userData, proposalId, setDetails, setConfetti);
    
    return (
        <div className="project-bid mt-4">
            {
                confetti && <Confetti width={1240} height={900} />
            }
            <div className="row p-3">
                <div className="col-12">
                    <h3>Place a Bid on this Project</h3>
                </div>
                <p>Bid Details</p>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h6 style={{ fontWeight: '700' }}><label htmlFor="">Bid Amount</label></h6>
                        <div className="input-group">
                            <input className="form-control" onBlur={(e) => setBidAmount(e.target.value)} type="text" />
                            <button className="bg-dark text-white" disabled>USD</button>
                        </div>

                    </div>

                    <div className="col-12 col-lg-6">
                        <h6 style={{ fontWeight: '700' }}>This project will be delivered in</h6>
                        <div className="input-group">
                            <input className="form-control" type="number" onBlur={(e) => setProjectDelivered(e.target.value)} />
                            <button className="bg-dark text-white" disabled>Days</button>
                        </div>

                    </div>
                    <div className="col-md-6">

                        <div className="row">
                            <div className="col-md-10 day-field">

                            </div>
                            <div className="col-md-2 days d-flex align-items-center">

                            </div>
                        </div>

                    </div>
                    {/* <small>Paid to you: $140.00 - $14.00 fee = $126.00</small> */}
                </div>
                <div className="row mt-3 proposal">
                    <div className="col-12">
                        <h6>Describe your proposal</h6>
                        <textarea style={{ width: '100%' }} className="form-control"
                            // defaultValue={describeProposal}
                            onChange={(e) => setDescribeProposal(e.target.value)}
                            placeholder="What makes you the best candidate for this project?" name="" id="" cols="95" rows="10">
                        </textarea>
                    </div>
                </div>

                {
                    bidAmount && projectDelivered && describeProposal && <div className="row place-bid">
                        <div className="col-12 place-bid-area">
                            <button className="btn btn-danger" onClick={() => placeBid()}>Place bid</button>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default ProjectBid;