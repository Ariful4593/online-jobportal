import React from 'react';
import { useState, useEffect } from 'react';
import './PostedJob.css';
import { Link } from 'react-router-dom';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import Skills from './Skills/Skills';
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en';
import { RiComputerFill } from "react-icons/ri";
import { HiAdjustments } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import { handleProjectType, handleSearchType } from './PostedJobDriver/PostedJobDriver';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const PostedJob = () => {

    const [getData, setGetdata] = useState([]);
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [pricingPost, setPricingPost] = useState('');
    const list = [];
    const skeleton_list = [1, 2, 3];

    useEffect(() => {
        fetch('https://warm-anchorage-86355.herokuapp.com/getPostProject')
            .then(res => res.json())
            .then(data => {
                setGetdata(data);
            })
    }, []);


    useEffect(() => {
        if (search !== '') {
            handleSearchType(getData, search, setSearchResult);
        }
        else {
            setSearchResult(getData);
        }
    }, [getData, search])


    useEffect(() => {
        if (pricingPost) {
            handleProjectType(getData, pricingPost, setSearchResult, list);
        }
        else {
            setSearchResult(getData);
        }
    }, [getData, pricingPost])
    return (
        <div className="job-post-area">
            <div className="row">
                <div className="col-12 col-md-3 project-area" >
                    <div className="project-header">
                        <LeftSidebar setPricingPost={setPricingPost} />
                    </div>
                </div>
                <div className="col-12 col-md-9 search-project-area">
                    {
                        getData.length > 0 ?
                            <div className="search-results">
                                <div className="search-area row">
                                    <div className="col-12 search-block">
                                        <input className="w-75 form-control" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search category" />
                                    </div>
                                </div>
                                {
                                    searchResult.length === getData.length && search.length < 1 ? getData.map((data) => {
                                        return (
                                            data.postInfo.map((item, index) => {
                                                TimeAgo.addLocale(en);
                                                const timeAgo = new TimeAgo("en-US");
                                                const minutesAgo = timeAgo.format(item.date - 60 * 1000);
                                                return (
                                                    <Link to={`/singlePost/${item.projectId}/${data._id}`} key={index}>
                                                        <div className="row search-result-item">

                                                            <div className="col-12 col-md-9">
                                                                <h4>{item.title}</h4>
                                                                <p>{`${(item.description).slice(0, 60)}....`}</p>
                                                                <p>
                                                                    {
                                                                        item.payType === 'fixed-price' ?
                                                                            <span><RiComputerFill /> Fixed Price</span> :
                                                                            <span><AiFillClockCircle /> Hourly Rate</span>

                                                                    }
                                                                    <span style={{ marginLeft: '20px' }}><HiAdjustments /> {`${item.biddingPeople.length} Bids`}</span> <small style={{ marginLeft: '20px' }}> <span style={{ color: '#5dc26a' }}>Open </span> {`${minutesAgo}`}</small></p>
                                                                <Skills postedjob={false} skillData={item.skillData} />
                                                            </div>
                                                            <div className="col-12 col-md-3 product-price">
                                                                <h5 style={{ fontSize: '17px' }}>{item.budget}</h5>
                                                            </div>

                                                        </div>
                                                    </Link>
                                                )
                                            })
                                        )

                                    })
                                        : searchResult.map((data, index) => {
                                            TimeAgo.addLocale(en);
                                            const timeAgo = new TimeAgo("en-US");
                                            const minutesAgo = data.date ? timeAgo.format(data.date - 60 * 1000) : 0;
                                            const postUniqueId = getData.find(item => item.postInfo.find(post => post.projectId === data.projectId))
                                            return (
                                                <Link to={`/singlePost/${data.projectId}/${postUniqueId && postUniqueId._id}`} key={index}>
                                                    <div className="row search-result-item">

                                                        <div className="col-12 col-md-9">
                                                            <h4>{data.title}</h4>
                                                            <p>{`${(data.description)}`}</p>
                                                            <p>
                                                                {
                                                                    data.payType === 'fixed-price' ?
                                                                        <span><RiComputerFill /> Fixed Price</span> :
                                                                        <span><AiFillClockCircle /> Hourly Rate</span>

                                                                }
                                                                <span style={{ marginLeft: '20px' }}><HiAdjustments />
                                                                    {`${data.biddingPeople && data.biddingPeople.length} Bids`}
                                                                </span> <small style={{ marginLeft: '20px' }}> <span style={{ color: '#5dc26a' }}>Open </span>
                                                                    {`${minutesAgo}`}
                                                                </small></p>
                                                            <Skills postedjob={false} skillData={data.skillData} />
                                                        </div>
                                                        <div className="col-12 col-md-3 product-price">
                                                            <h5 style={{ fontSize: '17px' }}>{data.budget}</h5>
                                                        </div>

                                                    </div>
                                                </Link>
                                            )
                                        })
                                }
                            </div>
                            : skeleton_list.map((item, index) => (
                                <div className="row mb-4" key={index}>
                                    <div className="col-12">
                                        <Skeleton />
                                        <Skeleton count={5} />
                                    </div>
                                </div>
                            ))

                    }

                </div>
            </div>
        </div>
    );
};

export default PostedJob;