import React from 'react';
import PostProject from './PostProject';
import './PostProjectArea.css';
const PostProjectArea = () => {
    document.title = "Freelancers || Post a project";
    return (
        <div className="post-block">
            <div className="post-project-area-block">

            </div>
            <PostProject />
        </div>
    );
};

export default PostProjectArea;