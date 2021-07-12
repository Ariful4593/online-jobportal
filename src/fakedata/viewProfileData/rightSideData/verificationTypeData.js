import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiGroup } from 'react-icons/bi';
import { MdVerifiedUser, MdEmail, MdCall } from 'react-icons/md';
import { IoLogoFacebook } from 'react-icons/io';

const verificationTypeData = [
    { icon: AiOutlineUsergroupAdd, title: 'Preferred Freelancer' },
    { icon: BiGroup, title: 'Identity Verified' },
    { icon: MdVerifiedUser, title: 'Payment Verified' },
    { icon: MdCall, title: 'Phone Verified' },
    { icon: MdEmail, title: 'Email Verified' },
    { icon: IoLogoFacebook, title: 'Facebook Connected' },
]

export default verificationTypeData;