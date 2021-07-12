import React from 'react';
import './PortfolioItems.css';
import portfolioItemsImage from '../../../../images/portfolio items not available.svg';
const PortfolioItems = () => {
    return (
        <div className="portfolio-items-block">
            <div className="row">
                <div className="col-md-6 portfolio-item">
                    <h4>Portfolio Items</h4>
                </div>
                <div className="col-md-6 manage-item">
                    <button className="btn btn-danger">Manage</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 portfolio-image-area">
                    <img className="w-100" src={portfolioItemsImage} alt="" />
                    <h6>No portfolio items have been added yet</h6>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItems;