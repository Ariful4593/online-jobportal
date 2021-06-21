import React from 'react';
import { useState, useEffect } from 'react';
import './PostedJob.css';
import { Link } from 'react-router-dom'


const PostedJob = () => {



    const [getData, setGetdata] = useState([])
    useEffect(() => {
        fetch('https://aqueous-river-54090.herokuapp.com/getUserData')
            .then(res => res.json())
            .then(data => {
                const approvedData = data.filter(post => post.status === 'Approved')
                setGetdata(approvedData)
                sessionStorage.setItem('data', JSON.stringify(data))
            })
    }, [])


    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])


    useEffect(() => {
        if (search !== '') {
            const newData = getData.filter((data) => {
                return (Object.values(data.orderProject).join(" ").toLowerCase().includes(search.toLowerCase()))
            });
            setSearchResult(newData);
        }
        else {
            setSearchResult(getData);
        }
    }, [getData, search])



    return (
        <div className=" mt-5 job-post-area">
            <div className="row">
                <div className="col-md-3 project-area" >
                    <div className="project-header">
                        <h2>Project</h2>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="search-results">
                        <div className="search-area row">
                            <div className="col-12">
                                <input className="w-75 form-control" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search category" />
                            </div>
                        </div>
                        {
                            search.length < 1 ? getData.map((data, index) => (
                                <Link to={`/singlePost/${data._id}`} key={index}>
                                    <div className="row search-result-item">

                                        <div className="col-10">
                                            <h4>{data.orderProject.title}</h4>
                                            <p>{(data.orderProject.projectDescription).slice(0, 200)}</p>
                                            <p><small> <span style={{ color: '#5dc26a' }}>Open </span> 3 minutes ago - 0 bids</small></p>
                                            <p><small>PHP, JavaScript, Python, HTML5</small></p>
                                        </div>
                                        <div className="col-2">
                                            <h5>$50 - $85</h5>
                                        </div>

                                    </div>
                                </Link>

                            )) : searchResult.map((data, index) => (

                                <Link to={`/singlePost/${data._id}`} key={index}>
                                    <div className="row search-result-item">
                                        <div className="col-10">
                                            <h4>{data.orderProject.title}</h4>
                                            <p>{(data.orderProject.projectDescription).slice(0, 200)}</p>
                                            <p><small> <span style={{ color: '#5dc26a' }}>Open </span> 3 minutes ago - 0 bids</small></p>
                                            <p><small>PHP, JavaScript, Python, HTML5</small></p>
                                        </div>
                                        <div className="col-2">
                                            <h5>$50 - $85</h5>
                                        </div>

                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostedJob;