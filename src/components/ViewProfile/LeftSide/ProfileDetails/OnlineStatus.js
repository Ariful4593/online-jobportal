import React from 'react';
import { RiRadioButtonLine } from 'react-icons/ri';
import { HiOutlineCurrencyDollar, HiBadgeCheck } from 'react-icons/hi';
import { GiSelfLove } from 'react-icons/gi';
import { FaFlag } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
export default function OnlineStatus({ profileData }) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return (
        <div className="row mt-4 online-area" >
            <h4 className="profile-name">{profileData[0].name}</h4>

            <p className="online"><RiRadioButtonLine style={{ color: 'green' }} /> I'm Online!</p>

            <h6><HiOutlineCurrencyDollar />  ${profileData[0].profileEdit.hourlyRate} USD / Hour</h6>

            <p><FaFlag />  Chittagong Bangladesh</p>

            <p><AiOutlineClockCircle /> It's currently {`${hours}:${minutes}`} {hours > 12 ? 'PM' : 'AM'} here</p>

            <p><HiBadgeCheck /> {`Joined ${profileData[0].joiningDate}`} </p>

            <p><GiSelfLove /> 0 Recommendations</p>
        </div>
    )
}
