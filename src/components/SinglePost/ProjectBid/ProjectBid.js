import React, { useState, useEffect } from 'react';
import './ProjectBid.css';
import Confetti from 'react-confetti';
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
        fetch('http://localhost:4000/userLoginData')
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
    const placeBid = () => {
        const newData = { ...singlePost };
        newData.bidAmount = bidAmount;
        newData.projectDelivered = projectDelivered;
        newData.describeProposal = describeProposal;


        fetch('http://localhost:4000/placeBid', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: userId, id: id, name: userLoginInfo.name, email: userLoginInfo.email, bidAmount: newData.bidAmount, projectDelivered: newData.projectDelivered, describeProposal: newData.describeProposal, userLoginId: userData._id, proposalId: proposalId })
        }).then(res => res.json())
            .then(data => {
                
                if (data) {
                    setDetails('proposal');
                    setConfetti(true);
                } else {
                    alert('Hey! You already bidded for this project. Please see proposal area.');
                    setDetails('proposal');
                }

            })
    }
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
                    <div className="col-md-6">
                        <h6 style={{ fontWeight: '700' }}><label htmlFor="">Bid Amount</label></h6>
                        <div className="row">
                            <div className="col-md-1 d-flex align-items-center bid-amount" >
                                $
                            </div>
                            <div className="col-md-10 bid-amount-field">
                                <input className="form-control" onBlur={(e) => setBidAmount(e.target.value)} type="text" />
                            </div>
                            <div className="col-md-1 d-flex align-items-center currency" >
                                USD
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <h6 style={{ fontWeight: '700' }}>This project will be delivered in</h6>
                        <div className="row">
                            <div className="col-md-10 day-field">
                                <input className="form-control" type="number" onBlur={(e) => setProjectDelivered(e.target.value)} />
                            </div>
                            <div className="col-md-2 days d-flex align-items-center">
                                Days
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