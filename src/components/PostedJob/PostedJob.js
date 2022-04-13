import React from 'react';
import { useState, useEffect } from 'react';
import './PostedJob.css';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en';
import { handleProjectType, handleSearchType } from './PostedJobDriver/PostedJobDriver';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useHistory } from 'react-router-dom';
import { getPostProjectData } from '../../Driver';
import SearchFeild from './SearchFeild';
import SearchSinglePost from './SearchSinglePost';
import SearchSinglePost2 from './SearchSinglePost2';


const PostedJob = () => {

    const [getData, setGetdata] = useState([]);
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [pricingPost, setPricingPost] = useState('');
    const list = [];
    const history = useHistory()
    const skeleton_list = [1, 2, 3];

    //Get posted data
    useEffect(() => {
        getPostProjectData(setGetdata, history);
    }, [])


    //Get searching value
    useEffect(() => {
        if (search !== '') {
            handleSearchType(getData, search, setSearchResult);
        }
        else {
            setSearchResult(getData);
        }
    }, [getData, search])


    //Get searcing value using price
    useEffect(() => {
        if (pricingPost) {
            handleProjectType(getData, pricingPost, setSearchResult, list);
        }
        else {
            setSearchResult(getData);
        }
    }, [getData, pricingPost]);


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
                                <SearchFeild search={search} setSearch={setSearch} />
                                {
                                    searchResult.length === getData.length && search.length < 1 ? getData.map((data) => {
                                        return (
                                            data.postInfo.map((item, index) => {
                                                TimeAgo.addLocale(en);
                                                const timeAgo = new TimeAgo("en-US");
                                                const minutesAgo = timeAgo.format(item.date - 60 * 1000);
                                                return (
                                                    <SearchSinglePost
                                                        item={item}
                                                        data={data}
                                                        key={index}
                                                        minutesAgo={minutesAgo}
                                                    />
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
                                                <SearchSinglePost2
                                                    data={data}
                                                    postUniqueId={postUniqueId}
                                                    minutesAgo={minutesAgo}
                                                    key={index}
                                                />
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