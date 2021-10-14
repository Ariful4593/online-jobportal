import React from 'react';
import './Reviews.css';
import reviewImage from '../../../../images/review item image.svg';
const Reviews = () => {
    return (
        <div className="review-items-block">
            <div className="single-add-block">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Review Items</h4>
                    </div>
                </div>
            </div>
            <hr />
            <div className="single-row-block">
                <div className="row">
                    <div className="col-12 review-image-area">
                        <img className="w-100" src={reviewImage} alt="" />
                        <h6>No reviews to see here!</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;