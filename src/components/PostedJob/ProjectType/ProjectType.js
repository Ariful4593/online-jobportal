import React from 'react';
import './ProjectType.css';
const ProjectType = () => {
    return (
        <div className="project-type">
            <ul>
                <li>
                    <h6>Project Type</h6>
                </li>
                <li>
                    <input type="checkbox" name="checkox" id="" /> <label htmlFor="">Fixed Price</label>
                </li>
                <li>
                    <input type="checkbox" name="checkox" id="" /> <label htmlFor=""> Hourly Projects</label>
                </li>
            </ul>
            <hr className="hr" />
        </div>
    );
};

export default ProjectType;