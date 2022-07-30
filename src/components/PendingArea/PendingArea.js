import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './PendingArea.css';


const PendingArea = () => {

    const history = useHistory();
    const { postId } = useParams();

    fetch('https://online-jobplace.herokuapp.com/statusUpdate', {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
        body: JSON.stringify({
            postId: postId,
        })
    })
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        } else {
            history.push('/postedJob');
            window.location.reload()
        }
    })
    return (
        <div className="pending-area">
            <div className="pending-block">
                <h1>{counter}</h1>
            </div>
        </div>
    );
};

export default PendingArea;