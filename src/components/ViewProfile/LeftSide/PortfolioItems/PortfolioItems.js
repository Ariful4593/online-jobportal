import React from 'react';
import './PortfolioItems.css';
import portfolioItemsImage from '../../../../images/portfolio items not available.svg';
const PortfolioItems = () => {
    return (
        <div className="portfolio-items-block">
            <div className="row">
                <div className="col-md-6">
                    <h4>Portfolio Items</h4>
                </div>
                <div className="col-md-6 text-end">
                    <button className="btn btn-danger">Manage</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 portfolio-image-area">
                    <img src={portfolioItemsImage} alt="" />
                    <h6>No portfolio items have been added yet</h6>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItems;