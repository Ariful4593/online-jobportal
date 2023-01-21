//From ProjectBid
export const placeBidFnc = (singlePost, bidAmount, projectDelivered, describeProposal, userId, id, userLoginInfo, userData, proposalId, setDetails, setConfetti) => {
    const newData = { ...singlePost };
    newData.bidAmount = bidAmount;
    newData.projectDelivered = projectDelivered;
    newData.describeProposal = describeProposal;


    fetch('https://online-jobplace-server-production.up.railway.app/placeBid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectOwnerId: userId, projectId: id, bidderName: userLoginInfo.name, bidderEmail: userLoginInfo.email, bidAmount: newData.bidAmount, projectDeliveredInDay: newData.projectDelivered, describeProposal: newData.describeProposal, userLoginId: userLoginInfo._id, proposalId: proposalId })
    }).then(res => res.json())
        .then(data => {

            if (data) {
                setDetails('proposal');
                setConfetti(true);
            } else {
                alert('Hey! You already bidded for this project. Please see proposal area.');
                setDetails('proposal');
            }

        })
}


//From YourBid.js
export const newUserBid = (getSessionData, getUserData, bidList, setUserBid) => {
    return (
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
        })
    )
}