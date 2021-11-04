import React from 'react';
import './ProjectType.css';
const ProjectType = ({ setPricingPost }) => {

    const getCheckData = (status) => {
        setPricingPost(status);
    }
    return (
        <div className="project-type">
            <ul>
                <li>
                    <h6>Project Type</h6>
                </li>
                <div className="form-check">
                    <input className="form-check-input" onChange={() => getCheckData('fixed-price')} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Fixed Price
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" onChange={() => getCheckData('pay-by-hour')} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Hourly Projects
                    </label>
                </div>

            </ul>
            <hr className="hr" />
        </div>
    );
};

export default ProjectType;