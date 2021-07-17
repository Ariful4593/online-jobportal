import React from 'react';
import './EmailNotifications.css';
import Switch from '@material-ui/core/Switch';

const EmailNotifications = () => {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <div className="row email-notifications-block">
            <div className="col-12 email-notifications-title-block">
                <h1 className="email-notifications-title">Email & Notifications</h1>
            </div>
            <hr />
            <div className="col-sm-6 email-block">
                <h4>Email</h4>
                <h6 className="email">Email Address*</h6>
                <input type="text" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="col-sm-6 password-block">
                <h6 className="password">Enter Current Password (if changing email)</h6>
                <input type="text" className="form-control" placeholder="Enter your password" />
            </div>

            <hr />

            <div className="col-lg-6 email-format">
                <h4>Email Format</h4>
                <small>Email format</small>
                <br />
                <select className="form-control">
                    <option value="HTML">HTML</option>
                    <option value="Plain Text">Plain Text</option>
                </select>

            </div>
            <hr />

            <div className="col-lg-12 digest-email">
                <h4>Digest emails for your posted projects</h4>
                <small><Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                /> When a bid is placed / updated / retracted on your project</small>
                <br />
                <small>Email frequency for project related activity</small>
                <br />
                <select className="form-control">
                    <option value="Default">Default</option>
                    <option value="Instantly">Instantly</option>
                    <option value="Every hours">Every hours</option>
                    <option value="Every 3 hours">Every 3 hours</option>
                    <option value="Every 6 hours">Every 6 hours</option>
                    <option value="Every 12 hours">Every 12 hours</option>
                    <option value="Daily">Daily</option>
                </select>
                <br />
                <small>Receive the first 3 notifications immediately. Then project activity summaries after 15, 30 and 45 minutes, then after 2 and 6 hours, and then daily.</small>

            </div>
            <hr />

            <div className="col-lg-12 email-for-latest-project-posted">
                <h4>Emails for latest projects posted</h4>
                <small><Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                /> When a project gets posted that matches my selected skills</small>
                <br />
                <small>Email frequency</small>
                <br />
                <select className="form-control">
                    <option value="Daily">Daily</option>
                    <option value="Every hours">Every hours</option>
                    <option value="Every 3 hours">Every 3 hours</option>
                    <option value="Every 6 hours">Every 6 hours</option>
                    <option value="Every 12 hours">Every 12 hours</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                </select>
            </div>
            <hr />
            <div className="col-12 email-for-ltest-local-job">
                <h4>Emails for latest local jobs</h4>
                <h6><Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                /> SMS notification when an employer is interested in hiring me</h6>
                <h6><Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                /> When a local job in my area gets posted</h6>


            </div>
            <hr />
        </div>
    );
};

export default EmailNotifications;