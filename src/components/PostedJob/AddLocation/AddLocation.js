import React from 'react';
import './AddLocation.css';
const AddLocation = () => {
    return (
        <div className="specific-location">
            <ul>
                <li>
                    <h6>Specific Location</h6>
                </li>
                <div className="input-group" style={{paddingRight: '10px'}}>
                    <input type="text" className="form-control" name="" placeholder="Add Location" id="" />
                    <button className="btn btn-primary text-white" disabled>Add</button>
                </div>
                <li>
                    <button className="clear-location" disabled>Clear Location</button>
                </li>
            </ul>
            <hr className="hr" />
        </div>
    );
};

export default AddLocation;