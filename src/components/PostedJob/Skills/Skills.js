import React from 'react';
import './Skills.css';

const Skills = ({ skillData, postedjob }) => {
    return (
        <div>
            {
                <div>
                    <div className="skills">
                        <ul className={`${postedjob ? 'skill-ul' : 'skill-ul-postedjob'}`}>
                            {
                                postedjob && <li>
                                <h6>Skills</h6>
                            </li>
                            }
                            <li className={`${postedjob ? 'add-skill' : 'add-skill-postedjob'}`}>
                                {
                                    skillData ? skillData.map((data, index) => (
                                        <span className={`${postedjob ? 'badge bg-dark text-white' : 'badge bg-dark text-white badge-area'}`} key={index}>{data}</span>
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