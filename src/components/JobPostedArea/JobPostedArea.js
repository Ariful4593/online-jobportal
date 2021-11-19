import React from 'react';
import Footer from '../Footer/Footer';
import PostedJob from '../PostedJob/PostedJob';

const JobPostedArea = () => {
    document.title = "Freelancers || All Posted Job";
    return (
        <div>
            <PostedJob/>
            <Footer/>
        </div>
    );
};

export default JobPostedArea;