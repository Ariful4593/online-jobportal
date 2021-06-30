import React from 'react';
import './LeftSidebar.css';
const LeftSidebar = () => {
    return (
        <div>
            <div className="project-area-contest">
                <ul>
                    <li id="project">Project</li>
                    <li>Contest</li>
                </ul>
            </div>
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

            <div className="edit-profile-skill">
                <ul>
                    <li>
                        <h6>Edit Profile Skills</h6>
                    </li>
                </ul>
                <hr className="hr" />

                <ul>
                    <li>
                        <h6>Listing Types</h6>
                    </li>
                    <li>
                        <input type="checkbox" name="checkox" id="" /> <label htmlFor="">Featured</label>
                    </li>
                    <li>
                        <input type="checkbox" name="checkox" id="" /> <label htmlFor=""> Sealed</label>
                    </li>
                    <li>
                        <input type="checkbox" name="checkox" id="" /> <label htmlFor="">NDA</label>
                    </li>
                    <li>
                        <input type="checkbox" name="checkox" id="" /> <label htmlFor=""> Urgent</label>
                    </li>
                    <li>
                        <input type="checkbox" name="checkox" id="" /> <label htmlFor="">Fulltime</label>
                    </li>
                    <li>
                        <input type="checkbox" name="checkox" id="" /> <label htmlFor=""> Recruiter</label>
                    </li>
                </ul>
                <hr className="hr" />
            </div>

            <div className="fixed-price">
                <ul>
                    <li>
                        <h6>Fixed Price</h6>
                    </li>
                    <li>
                        <input type="range" id="vol" name="vol" min="0" max="100" />
                    </li>
                </ul>
                <hr className="hr" />
            </div>

            <div className="hourly-price">
                <ul>
                    <li>
                        <h6>Hourly Price</h6>
                    </li>
                    <li>
                        <input type="range" id="vol" name="vol" min="0" max="100" />
                    </li>
                </ul>
                <hr className="hr" />
            </div>

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
        </div>
    );
};

export default LeftSidebar;