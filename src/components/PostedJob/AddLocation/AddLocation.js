import React from 'react';
import './AddLocation.css';
const AddLocation = () => {
    return (
        <div className="specific-location">
            <ul>
                <li>
                    <h6>Specific Location</h6>
                </li>
                <li>
                    <input type="text" className="add-location" name="" placeholder="Add Location" id="" />
                    <input type="button" className="add-location-btn" value="Add" />
                </li>
                <li>
                    <button className="clear-location">Clear Location</button>
                </li>
            </ul>
            <hr className="hr" />
        </div>
    );
};

export default AddLocation;