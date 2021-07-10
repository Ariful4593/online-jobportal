import React from 'react';
import GetWorkDone from './GetWorkDone/GetWorkDone';
import GreatAboutIt from './GreatAboutIt/GreatAboutIt';
import MakeItReal from './MakeItReal/MakeItReal';
import NeedWorkDone from './NeedWorkDone/NeedWorkDone';
import OurClient from './OurClient/OurClient';
import Footer from '../Footer/Footer';
import './Home.css';


const Home = () => {
    return (
        <React.Fragment>
            <div className="home-page">
                <OurClient />
                <NeedWorkDone />
                <GreatAboutIt />
                <MakeItReal />
                <GetWorkDone />
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Home;