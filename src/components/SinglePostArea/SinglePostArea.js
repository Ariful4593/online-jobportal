import React from 'react';
import SinglePost from '../SinglePost/SinglePost';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
const SinglePostArea = () => {
    const { id, userId } = useParams();
    document.title = "Freelancers || Post Details";
    return (
        <div>
            <SinglePost id={id} userId={userId} />
            <Footer />
        </div>
    );
};

export default SinglePostArea;