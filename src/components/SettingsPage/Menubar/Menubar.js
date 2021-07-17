import React from 'react';
import './Menubar.css';
const listItem = [
    'Profile', 'Email & Notifications', 'Membership', 'Password', 'Payment & Financials', 'Account & Security', 'Trust & Verification', 'Account'];
const Menubar = ({ handleCount }) => {
    return (
        <ul className="settings-main-ul">
            {
                listItem.map((data, index) => (
                    <li key={index} className="list-item" onClick={() => handleCount(index)}>
                        {data}
                    </li>
                ))
            }
        </ul>
    );
};

export default Menubar;