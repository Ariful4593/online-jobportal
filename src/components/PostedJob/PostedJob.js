import React from 'react';
import { useState, useEffect } from 'react';
import './PostedJob.css';
import { Link } from 'react-router-dom';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import Skills from './Skills/Skills';


const PostedJob = () => {

    const [getData, setGetdata] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/getPostProject')
            .then(res => res.json())//data.filter(post => post.status === 'Approved')
            .then(data => {
                setGetdata(data)
                sessionStorage.setItem('data', JSON.stringify(data))
            })
    }, [])


    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        if (search !== '') {
            getData.filter((data) => {
                const afterFilterData = data.postInfo.filter(item => Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase()))
                if (afterFilterData.length > 0) {
                    setSearchResult(afterFilterData)
                }
                return afterFilterData;
            });
        }
        else {
            setSearchResult(getData);
        }
    }, [getData, search])


    return (
        <div className="job-post-area">
            <div className="row">
                <div className="col-12 col-md-3 project-area" >
                    <div className="project-header">
                        <LeftSidebar />
                    </div>
                </div>
                <div className="col-12 col-md-9 search-project-area">
                    <div className="search-results">
                        <div className="search-area row">
                            <div className="col-12 search-block">
                                <input className="w-75 form-control" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search category" />
                            </div>
                        </div>
                        {
                            search.length < 1 ? getData.map((data) => {
                                return (
                                    data.postInfo.map((item, index) => {

                                        return (
                                            <Link to={`/singlePost/${item.projectId}`} key={index}>
                                                <div className="row search-result-item">

                                                    <div className="col-12 col-md-9">
                                                        <h4>{item.title}</h4>
                                                        {/* <p>{(data.description).slice(0, 200)}</p> */}
                                                        <p>{item.description}</p>
                                                        <p><small> <span style={{ color: '#5dc26a' }}>Open </span> 3 minutes ago - 0 bids</small></p>
                                                        <Skills postedjob={false} skillData={item.skillData} />
                                                    </div>
                                                    <div className="col-12 col-md-3 product-price">
                                                        <h5 style={{fontSize: '17px'}}>{item.budget}</h5>
                                                    </div>

                                                </div>
                                            </Link>
                                        )
                                    })
                                )

                            })
                                : searchResult.map((data, index) => {
                                    return (
                                        <Link to={`/singlePost/${data._id}`} key={index}>
                                            <div className="row search-result-item">

                                                <div className="col-12 col-md-9">
                                                    <h4>{data.title}</h4>
                                                    {/* <p>{(data.description).slice(0, 200)}</p> */}
                                                    <p>{data.description}</p>
                                                    <p><small> <span style={{ color: '#5dc26a' }}>Open </span> 3 minutes ago - 0 bids</small></p>
                                                    <p><small>PHP, JavaScript, Python, HTML5</small></p>
                                                </div>
                                                <div className="col-12 col-md-3 product-price">
                                                    <h5>{data.budget}</h5>
                                                </div>

                                            </div>
                                        </Link>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostedJob;