import React from 'react';
import './Qualification.css';
const Qualification = () => {
    return (
        <div className="qualification-block">
            <div className="row">
                <div className="col-md-6 qualification">
                    <h4>Qualification</h4>
                </div>
                <div className="col-md-6 text-end add-qualification">
                    <button className="btn btn-danger">Add Qualification</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 qualification-image-area">
                    
                    <p>No qualifications have been added.</p>
                </div>
            </div>
        </div>
    );
};

export default Qualification;