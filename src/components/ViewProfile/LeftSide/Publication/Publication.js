import React from 'react';
import './Publication.css';
const Publication = () => {
    return (
        <div className="publication-block">
            <div className="single-add-block">
                <div className="row">
                    <div className="col-md-6 publication">
                        <h4>Publication</h4>
                    </div>
                    <div className="col-md-6 text-end add-publication">
                        <button className="add-button">Add Publication</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="single-row-block">
                <div className="row">
                    <div className="col-12 publication-image-area">
                        <p>No publication have been added yet.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Publication;