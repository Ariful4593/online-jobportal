import React from 'react';
import './Skills.css';
// import skillData from '../../../fakedata/postedJobData/skillData';

const Skills = ({ skillData }) => {
    return (
        <div>
            {
                <div>
                    <div className="skills">
                        <ul className="skill-ul">
                            <li>
                                <h6>Skills</h6>
                            </li>
                            <li className="add-skill">
                                {
                                   skillData ? skillData.map((data, index) => (
                                        <span className={`badge bg-dark text-white`} key={index}>{data}</span>
                                    ))
                                    : 
                                    ""
                                }

                            </li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
};

export default Skills;