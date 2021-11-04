import React, { useState, useEffect } from 'react';


const ViewBidInsights = () => {
    let getSessionData = JSON.parse(sessionStorage.getItem('data'));
    let getUserData = JSON.parse(localStorage.getItem('userLoginInfo'));

    const [userBid, setUserBid] = useState([])
    let bidList = [];
    useEffect(() => {
        getSessionData.filter(data => {
            data.postInfo.filter(item => (
                item.biddingPeople && item.biddingPeople.filter(emailFound => {
                    const test = emailFound.email === getUserData.email;
                    if (test) {
                        bidList.push(item)
                        setUserBid(bidList);
                    }
                    return 0;
                })
            ));
            return 0;
        });
    }, [])
    return (
        <div className="accordion" id="accordionExample">
            {
                userBid && userBid.map((data, index) => (
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

            }

            {/* <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ViewBidInsights;