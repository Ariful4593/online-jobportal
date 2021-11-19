import React from 'react';
import './Profile.css';
const Profile = () => {

    // useEffect(() => {
    //     fetch('https://restcountries.com/v3.1/all')
    //     .then(res => res.json())
    //     .then(data => {
    //         data.map(item => console.log(item.name.common))
    //     })
    // }, [])
    return (
        <div className="row profile-details-block">
            <div className="col-12 profile-details-title-block">
                <h1 className="profile-details-title">Profile Details</h1>
            </div>
            <hr />
            <div className="col-sm-6 first-name-block">
                <h4>Name</h4>
                <h6 className="first-name">First Name*</h6>
                <input type="text" className="form-control" placeholder="Enter your first name" />
            </div>
            <div className="col-sm-6 second-name-block">
                <h6 className="second-name">Last Name*</h6>
                <input type="text" className="form-control" placeholder="Enter your last name" />
            </div>

            <hr />
            <div className="col-sm-12 address-block">
                <h4>Address</h4>
                <h6 className="first-name">Address*</h6>
                <input type="text" className="form-control" placeholder="Enter your present address" />
                <br />
                <input type="text" className="form-control" placeholder="Enter your permanent address" />
                <br />
                <h6>City*</h6>
                <input type="text" className="form-control" placeholder="Enter your city name" />
                <br />
                <div className="row">
                    <div className="col-sm-6">
                        <h6>Zip/Post Code*</h6>
                        <input type="text" className="form-control" />
                        <br />

                    </div>
                    <div className="col-sm-6">
                        <h6>State/Province*</h6>
                        <input type="text" className="form-control" />
                        <br />
                    </div>
                </div>
                <h6>Country*</h6>
                <input type="text" className="form-control" placeholder="Enter your country name" />
                <small>In order to change your country, we require you to verify your identity. This is so we can verify your address details. The country will be automatically updated once the process is complete.</small>
                <br />
                <br />

                <h6>Company*</h6>
                <input type="text" className="form-control" placeholder="Enter your company name" />
                <br />
                <div className="row">
                    <div className="col-sm-6">
                        <h6>Time Zone*</h6>
                        <input type="text" className="form-control" />
                        <br />

                    </div>
                    <div className="col-sm-6">
                        <h6>Location*</h6>
                        <input type="text" className="form-control" />
                        <br />
                    </div>
                </div>

            </div>
            <hr />

            <div className="col-lg-6 language-settings">
                <h4>Language Settings</h4>
                <small>I want to browse the website in:</small>
                <br />
                <select className="form-control">
                    <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                    <option value="Hindi">Hindi</option>
                    <option value="China">China</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                </select>
                <br />
                <small >I want to browse projects in the following languages:</small>
                <br />
                <select className="form-control">
                    <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                    <option value="Hindi">Hindi</option>
                    <option value="China">China</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                </select>
            </div>
            <hr className='select-end-hr' />

            <div className="col-12 save-settings">
                <button>Save Settings</button>
            </div>
            <hr className="save-settings-hr" />
        </div>
    );
};

export default Profile;