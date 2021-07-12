import React from 'react';
import { Link } from 'react-router-dom';
import './TopSkill.css';
const TopSkill = () => {
    const topSkill = ['C Programming', 'JavaScript', 'Web Scrapping', 'eCommerce', 'HTML5']
    return (
        <div className="top-skill-area ">
            <ul className="top-skill-title-area">
                <li>
                    <h6>Top Skills</h6>
                </li>
            </ul>
            <hr className="hr" />

            <ul className="top-skill-item">
                {
                    topSkill.map((data, index) => (
                        <li key={index}>
                            <Link to="" className="text-dark"> {data}</Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default TopSkill;