import React from 'react'
import { Link } from 'react-router-dom'

export default function VerificationItem({ verificationTypeData }) {
    return (
        <ul className="verificaion-item-p">
            {
                verificationTypeData.map((data, index) => (
                    <li key={index}>
                        <Link to="" className="text-dark"><data.icon /></Link>
                    </li>
                ))
            }

        </ul>
    )
}
