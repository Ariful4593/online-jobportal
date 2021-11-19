import React from 'react';
import './Menubar.css';
const listItem = [
    'Profile', 'Email & Notifications', 'Membership', 'Password', 'Payment & Financials', 'Account & Security', 'Trust & Verification', 'Account'];
const Menubar = ({ count, handleCount }) => {
    return (
        <ul className="settings-main-ul">
            {
                listItem.map((data, index) => (
                    <li key={index} className="list-item" style={{background: `${count === index ? '#a3a3a3' : '#0b405e29'}`}} onClick={() => handleCount(index)}>
                        {data}
                    </li>
                ))
            }
        </ul>
    );
};

export default Menubar;