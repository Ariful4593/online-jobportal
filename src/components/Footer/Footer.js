import React from 'react';
import './Footer.css';
import footerData from '../../fakedata/footerData';
import getInTouch1 from '../../images/images-removebg-preview.png';
import getInTouch2 from '../../images/download-removebg-preview.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer-area">
            <div className="footer">
                <div className="row">
                    <div className="col-md-4 logo-area">
                        <ul>
                            <li>
                                <h5>Freelancer</h5>
                            </li>
                            <li>
                                US International / English
                            </li>
                            <li>
                                Help & Support
                            </li>
                        </ul>
                    </div>
                    {
                        footerData.map((data, index) => (
                            <div className="col-md-2 list-area" key={index}>
                                <ul>
                                    <li>
                                        <h5>{data.title}</h5>
                                    </li>
                                    {
                                        data.list.map((listItem, index) => (
                                            <li key={index}>
                                                <Link to={`/details-item/${listItem}`}>{listItem}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                    <div className="col-md-2 getInTouch-area">
                        <ul>
                            <li>
                                <h5>Apps</h5>
                            </li>
                            <li>
                                <img className="w-100 h-100" src={getInTouch1} alt="" />
                            </li>
                            <li className="mt-2">
                                <img className="w-100 h-100" src={getInTouch2} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-3 user">
                        <h6 className="m-0">53,378,348</h6>
                        <p><small>Registered Users</small></p>
                    </div>
                    <div className="col-md-3 user">
                        <h6 className="m-0">20,166,629</h6>
                        <p><small>Total Jobs Posted</small></p>
                    </div>
                    <div className="col-md-6">
                        <p className="m-0"><small>Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 142 189 759)</small></p>
                        <p className="m-0"><small>Copyright © 2021 Freelancer Technology Pty Limited (ACN 142 189 759)</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;