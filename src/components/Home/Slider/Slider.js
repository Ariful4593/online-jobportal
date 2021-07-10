import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from './Item';
import './Slider.css'

import ourClientData from '../../../fakedata/homePageData/ourClientData'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 4 },
];

const Slider = () => {
    return (
        <div>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {
                        ourClientData.map((item, index) => <Item key={index}>
                            <a href={item.webLink} rel="noreferrer">
                                <img className="w-100" src={item} alt="" />
                            </a>

                        </Item>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;