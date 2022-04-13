import React from 'react'
import { Link } from 'react-router-dom'
import { RiComputerFill } from "react-icons/ri";
import { HiAdjustments } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import Skills from './Skills/Skills';
export default function SearchSinglePost({ item, data, minutesAgo }) {
    return (
        <Link to={`/singlePost/${item.projectId}/${data._id}`}>
            <div className="row search-result-item">
                <div className="col-12 col-md-9">
                    <h4>{item.title}</h4>
                    <p className='post-description'>{`${(item.description)}`}</p>
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
}
