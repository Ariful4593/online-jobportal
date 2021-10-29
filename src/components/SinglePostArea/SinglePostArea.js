import React from 'react';
import SinglePost from '../SinglePost/SinglePost';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
const SinglePostArea = () => {
    const { id, userId } = useParams();
    return (
        <div>
            <SinglePost id={id} userId={userId} />
            <Footer />
        </div>
    );
};

export default SinglePostArea;