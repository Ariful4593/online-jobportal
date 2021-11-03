import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './PendingArea.css';


const PendingArea = () => {

    const history = useHistory();
    const { postId } = useParams();

    const userLoginInfo = JSON.parse(localStorage.getItem('userLoginInfo'));
    fetch('https://warm-anchorage-86355.herokuapp.com/statusUpdate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            postId: postId,
        })
    })
    const [notifications, setNotifications] = useState({})
    useEffect(() => {
        fetch('https://warm-anchorage-86355.herokuapp.com/getPostProject')
            .then(res => res.json())
            .then(data => {
                const postList = data.find(item => item.email === userLoginInfo.email);
                setNotifications(postList);

            })
    }, [])
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        } else {
            localStorage.setItem('notification', JSON.stringify(notifications));
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