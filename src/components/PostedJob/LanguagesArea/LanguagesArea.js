import React from 'react';
import './LanguagesArea.css';
const LanguagesArea = () => {
    return (
        <div className="language">
            <ul>
                <li>
                    <h6>Language</h6>
                </li>
                <li className="add-language">
                    <span className="badge bg-primary text-white">Bangla</span>
                    <span className="badge bg-secondary text-white">English</span>
                </li>

                <li>
                    <button className="clear-language">Clear Language</button>
                </li>
            </ul>
            <hr className="hr" />
        </div>
    );
};

export default LanguagesArea;