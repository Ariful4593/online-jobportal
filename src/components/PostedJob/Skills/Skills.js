import React from 'react';
import './Skills.css';
const Skills = () => {
    return (
        <>
            <div className="skills">
                <ul className="skill-ul">
                    <li>
                        <h6>Skills</h6>
                    </li>
                    <li className="add-skill">
                        <span className="badge bg-primary text-white">JavaScript</span>
                        <span className="badge bg-secondary text-white">Web Scrapping</span>
                        <span className="badge bg-success text-white">HTML5</span>
                        <span className="badge bg-danger text-white">CSS3</span>
                        <span className="badge bg-warning text-white">React Js</span>
                        <span className="badge bg-info text-white">Node Js</span>
                        <span className="badge bg-danger text-white">Web Development</span>
                        <span className="badge bg-dark text-white">Web Design</span>
                    </li>
                </ul>
            </div>
            <div className="clear-skill">
                <ul>
                    <button>Clear Skill</button>
                </ul>
            </div>
        </>
    );
};

export default Skills;