import React from 'react';
import PostProject from './PostProject';
import './PostProjectArea.css';
const PostProjectArea = () => {
    return (
        <div className="post-block">
            <div className="post-project-area-block">

            </div>
            <PostProject />
        </div>
    );
};

export default React.memo(PostProjectArea);