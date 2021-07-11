import React from 'react';
import './Publication.css';
const Publication = () => {
    return (
        <div className="publication-block">
            <div className="row">
                <div className="col-md-6">
                    <h4>Publication</h4>
                </div>
                <div className="col-md-6 text-end">
                    <button className="btn btn-danger">Add Publication</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 publication-image-area">
                    
                    <p>No publication have been added.</p>
                </div>
            </div>
        </div>
    );
};

export default Publication;