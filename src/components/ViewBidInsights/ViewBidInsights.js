import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAuthUser } from '../../Driver';
import './ViewBidInsights.css';

const ViewBidInsights = () => {

    const [userBid, setUserBid] = useState([]);
    const [user, setUser] = useState({});
    const history = useHistory();
    let bidList = [];

    document.title = "Freelancers || Bid Insides";

    //Get authenticate user
    useEffect(() => {
        getAuthUser(setUser, history);
    }, [])

    useEffect(() => {
        fetch('https://online-jobplace-server-production.up.railway.app/getPostProject', {
            headers: {
                'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
            .then(res => res.json())
            .then(data => {
                data.filter(userData => {
                    userData.postInfo.filter(item => (
                        item.biddingPeople && item.biddingPeople.filter(emailFound => {
                            const test = emailFound.email === user.email;
                            if (test) {
                                bidList.push(item)
                                setUserBid(bidList);
                            }
                            return 0;
                        })
                    ));
                    return 0;
                });
            })
    }, []);


    return (
        <div className="accordion" id="accordionExample">
            {
                userBid.length > 0 ? userBid.map((data, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`headingOne${index}`}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="true" aria-controls={`collapseOne${index}`}>
                                {data.title}
                            </button>
                        </h2>
                        <div id={`collapseOne${index}`} className="accordion-collapse collapse show" aria-labelledby={`headingOne${index}`} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>{data.description}</strong>
                            </div>
                        </div>
                    </div>
                ))
                    :
                    <p className='bid-status'>No bid have been added yet</p>
            }
        </div>
    );
};

export default ViewBidInsights;