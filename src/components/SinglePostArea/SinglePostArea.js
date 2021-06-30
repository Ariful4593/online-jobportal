import React from 'react';
import SinglePost from '../SinglePost/SinglePost';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
const SinglePostArea = () => {
    const { id } = useParams();
    return (
        <div>
            <SinglePost id={id} />
            <Footer />
        </div>
    );
};

export default SinglePostArea;