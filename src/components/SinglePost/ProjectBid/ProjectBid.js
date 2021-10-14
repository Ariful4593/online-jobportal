import React from 'react';
import './ProjectBid.css';
const ProjectBid = () => {
    return (
        <div className="project-bid mt-4">
            <div className="row p-3">
                <div className="col-12">
                    <h3>Place a Bid on this Project</h3>
                </div>
                <p>Bid Details</p>
                <div className="row">
                    <div className="col-md-6">
                        <h6><label htmlFor="">Bid Amount</label></h6>
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
                        <textarea style={{ width: '100%' }} className="form-control" placeholder="What makes you the best candidate for this project?" name="" id="" cols="95" rows="10">
                        </textarea>
                    </div>
                </div>

                <div className="row place-bid">
                    <div className="col-12 place-bid-area">
                        <button className="btn btn-danger">Place bid</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectBid;