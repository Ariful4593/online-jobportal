import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import EmailNotifications from './EmailNotifications/EmailNotifications';
import Menubar from './Menubar/Menubar';
import Profile from './Profile/Profile';
import './SettingsPage.css';

const SettingsPage = () => {

    const [count, setCount] = useState(0);
    document.title = "Freelancers || Settings";
    const handleCount = (number) => {
        setCount(number)
    }

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <Profile />

            case 1:
                return <EmailNotifications />;

            case 2:
                return ('Comming Soon...');

            case 3:
                return ("Comming Soon...");

            case 4:
                return ('Comming Soon...');

            case 5:
                return ('Comming Soon...');
            case 6:
                return ('Comming Soon...');

            case 7:
                return ('Comming Soon...');

            default:
                return ('Page not found')
        }
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Menubar count={count} handleCount={handleCount} />
                    </div>
                    <div className="col-md-9 setting-details">
                        {
                            getStepContent(count)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default SettingsPage;