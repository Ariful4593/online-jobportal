import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import EmailNotifications from './EmailNotifications/EmailNotifications';
import Menubar from './Menubar/Menubar';
import Profile from './Profile/Profile';
import './SettingsPage.css';

const SettingsPage = () => {

    const [count, setCount] = useState(0)
    const handleCount = (number) => {
        console.log(number)
        setCount(number)
    }

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <Profile />

            case 1:
                return <EmailNotifications />;

            case 2:
                return ('Hellow 2');

            case 3:
                return ("Hellow 3");

            case 4:
                return ('Hellow 4');

            case 5:
                return ('Hellow 5');
            case 6:
                return ('Hellow 6');

            case 7:
                return ('Hellow 7');

            default:
                return ('Page not found')
        }
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Menubar handleCount={handleCount} />
                    </div>
                    <div className="col-md-9 profile-details">
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