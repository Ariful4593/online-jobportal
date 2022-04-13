import React from 'react'
import { BiGroup } from 'react-icons/bi';
import { MdVerifiedUser, MdEmail, MdCall } from 'react-icons/md';
export default function VerificationIdentity({ profileId, userData }) {
    return (
        <ul className="verificaion-item">
            <li >
                <small className="text-dark" style={{ fontSize: '14px' }}><BiGroup /> Identity Verified</small>
                <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px' }}>Verified</small>
            </li>
            <li >
                <small className="text-dark" style={{ fontSize: '14px' }}><MdVerifiedUser /> Payment Verified</small>
                <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px' }}>Verified</small>
            </li>
            <li >
                <small className="text-dark" style={{ fontSize: '14px' }}><MdCall /> Phone Verified</small>
                {
                    !profileId ?
                        (
                            userData.length > 0 && userData[0].verify) 
                            ? 
                            <small 
                            className="text-success" 
                            style={{ marginLeft: '25px', fontSize: '14px', }}
                             >
                                 {userData[0].verify}
                                 </small>
                                  :
                            <small 
                            className="text-danger"
                             style={{ marginLeft: '25px', fontSize: '14px', cursor: 'pointer' }}
                              data-toggle="modal" 
                              data-target="#exampleModalCenter" 
                              >
                                  Verifiy
                                  </small>
                        :
                        <small 
                        className="text-success" 
                        style={{ marginLeft: '25px', fontSize: '14px', }}
                         >{
                            userData.length > 0 && userData[0].verify 
                            ? 
                            userData[0].verify 
                            :
                             'Not Verified'
                             }
                             </small>
                }
            </li>
            <li >
                <small className="text-dark" style={{ fontSize: '14px' }}><MdEmail /> Email Verified</small>
                <small className="text-success" style={{ marginLeft: '25px', fontSize: '14px' }}>Verified</small>
            </li>
        </ul>
    )
}
