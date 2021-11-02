import React, { useEffect, useState } from 'react';
import AboutTheClient from './AboutTheClient/AboutTheClient';
import ProjectBid from './ProjectBid/ProjectBid';
import ProjectDetailsTitleArea from './ProjectDetailsTitleArea/ProjectDetailsTitleArea';
import Proposal from './Proposal/Proposal';
import './SinglePost.css';
import YourBid from './YourBid/YourBid';
import TotalBid from './TotalBid/TotalBid';
const SinglePost = ({ id, userId }) => {
    var getSessionData = JSON.parse(sessionStorage.getItem('data'));
    const [singlePost, setSinglePost] = useState({})
    const [details, setDetails] = useState('');
    const [biddingCount, setBiddingCount] = useState(0);

    useEffect(() => {
        getSessionData.find(data => {
            const post = data.postInfo.find(td => td.projectId === id)
            if (post) {
                setSinglePost(post)
            }
            return post;
        })
    }, [])


    useEffect(() => {
        fetch('http://localhost:4000/clientPlaceData')
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('clientData', JSON.stringify(data))
            })
    }, [])

    

    useEffect(() => {
        setDetails('details');
    }, [])

    const handleEvent = (status) => {
        setDetails(status);
    }
    return (
        <div className="single-post">
            <div className="row">
                <div className="col-12 project-title">
                    <h1>{singlePost.title}</h1>
                    <div className="col-12 project-proposal">
                        <h1>
                            <span style={{ cursor: 'pointer' }} className={`${details === 'details' ? 'details' : ''}`} onClick={() => handleEvent('details')}>Details</span> <span style={{ cursor: 'pointer' }} className={`${details === 'proposal' ? 'proposals' : ''}`} onClick={() => handleEvent('proposal')} >Proposal</span></h1>
                    </div>
                </div>

            </div>
            <div className="details-post">
                <div className="row">
                    <div className="col-md-9 project-details-area mt-4">
                        {
                            details === 'details' ?
                                <React.Fragment>
                                    <ProjectDetailsTitleArea singlePostData={singlePost} />
                                    <ProjectBid singlePost={singlePost} id={id} setDetails={setDetails} userId={userId} />
                                </React.Fragment>
                                :
                                <Proposal details={details} id={id} setBiddingCount={setBiddingCount} />
                        }

                    </div>
                    <div className="col-md-3 ">
                        {
                            details === 'proposal' ?
                                <TotalBid biddingCount={biddingCount}/>
                                :
                                <React.Fragment>
                                    <AboutTheClient />
                                    <YourBid />
                                </React.Fragment>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SinglePost;