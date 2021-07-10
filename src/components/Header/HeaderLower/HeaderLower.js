import React from 'react';
import './HeaderLower.css';
import { Link } from "react-router-dom";


const HeaderLower = () => {
    return (
        <div className="header-lower-area">
            <div className="row" id="header-two">
                <div className="col-12 header-low-ul" id="header-one">
                    <ul className="">
                        <li><a href="/findjob">Find Jobs</a></li>
                        <li><Link to="/findfreelancers">Find Freelancers</Link></li>
                        <li><Link to="/getidea">Get Ideas</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                    </ul>
                    
                </div>
            </div>

        </div>

    );
};

export default HeaderLower;