import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
const PendingArea = () => {

    const history = useHistory();
    const { postId } = useParams();

    fetch('http://localhost:4000/statusUpdate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            postId: postId,
        })
    })
    setTimeout(() => {

        history.push('/postedJob')
    }, 10000);
    return (
        <div>
            <h1>Your order is pending for the aproval of the admin</h1>
        </div>
    );
};

export default PendingArea;