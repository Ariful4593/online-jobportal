import React, { useState } from 'react';

const Dashboard = ({ service }) => {
    const [pending, setPending] = useState(service.status.toLowerCase() === 'pending');

    const handleChange = (e) => {
        setPending(!pending)
        fetch('https://warm-anchorage-86355.herokuapp.com/update', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                status: e.target.value,
                id: service._id
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log("Data updated")
            })
    }
    return (
        <div className="row service-body" key={service._id}>
            <div className="col-md-2" style={{ borderBottom: '1px solid #DEDEDE' }}>{service.name}</div>
            <div className="col-md-3" style={{ borderBottom: '1px solid #DEDEDE' }}>{service.email}</div>
            <div className="col-md-2" style={{ borderBottom: '1px solid #DEDEDE' }}>{service.orderProject.title}</div>
            <div className="col-md-3" style={{ borderBottom: '1px solid #DEDEDE' }}>{(service.orderProject.projectDescription).slice(0, 72)}</div>
            <div className="col-md-2" style={{ borderBottom: '1px solid #DEDEDE' }}><select id="drop" value={service.status} onChange={handleChange} style={{border: '0'}} >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
            </select></div>
        </div>
    );
};

export default Dashboard;