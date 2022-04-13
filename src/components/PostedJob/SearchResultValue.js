import React from 'react'
import SearchSinglePost from './SearchSinglePost';

export default function SearchResultValue() {
    return (
        <>
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
                                    index={index}
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
        </>
    )
}
