import React, { useEffect, useState } from 'react';
import AboutTheClient from './AboutTheClient/AboutTheClient';
import ProjectBid from './ProjectBid/ProjectBid';
import ProjectDetailsTitleArea from './ProjectDetailsTitleArea/ProjectDetailsTitleArea';
import Proposal from './Proposal/Proposal';
import './SinglePost.css';
import YourBid from './YourBid/YourBid';
import TotalBid from './TotalBid/TotalBid';
import { useHistory } from 'react-router-dom';
const SinglePost = ({ id, userId }) => {
    const [singlePost, setSinglePost] = useState({})
    const [details, setDetails] = useState('');
    const [biddingCount, setBiddingCount] = useState(0);
    const history = useHistory();
    useEffect(() => {
        let isMounted = true;
        fetch('https://online-jobplace.herokuapp.com/getPostProject', {
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
                    data.find(userData => {
                        const post = userData.postInfo.find(td => td.projectId === id)
                        if (post) {
                            setSinglePost(post)
                        }
                        return post;
                    })
                }
            })
        return () => { isMounted = false };
    }, []);

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
                    <h1 className="post-title">{singlePost.title}</h1>
                    <div className="col-12 project-proposal">

                        <h2 className="type-area">
                            <span style={{ cursor: 'pointer' }} className={`${details === 'details' ? 'details' : ''}`} onClick={() => handleEvent('details')}>Details</span> <span style={{ cursor: 'pointer' }} className={`${details === 'proposal' ? 'proposals' : ''}`} onClick={() => handleEvent('proposal')} >Proposal</span></h2>
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
                                <TotalBid biddingCount={biddingCount} />
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