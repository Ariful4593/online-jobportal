import React, { useState } from 'react';
import { useEffect } from 'react';
// import Dashboard from './Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Admin.css';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '10px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
const Admin = () => {
    const classes = useStyles();
    document.title = "Admin || Dashboard";
    const [, setUserData] = useState([])
    useEffect(() => {
        fetch('https://online-jobplace.herokuapp.com/getUserData')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    return (
        <div className="dashboard mt-2">
            <div className="row">
                <div className={`col-md-2 `} style={{ fontSize: '25px' }}>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Home</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Under Construction
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Add Admin</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Under Construction
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="col-md-10">
                    <Card className={classes.root}>
                        <div className="row" style={{ borderBottom: '1px solid #DEDEDE', paddingBottom: '10px' }}>
                            <div className="col-md-2" style={{ fontSize: '25px' }}>Name</div>
                            <div className="col-md-3" style={{ fontSize: '25px' }}>Email ID</div>
                            <div className="col-md-2" style={{ fontSize: '25px' }}>Title</div>
                            <div className="col-md-3" style={{ fontSize: '25px' }}>Project Details</div>
                            <div className="col-md-2" style={{ fontSize: '25px' }}>Status</div>
                        </div>
                        {/* {
                            userData.map(service => {
                                return (
                                    <Dashboard key={service._id} service={service}></Dashboard>
                                )
                            })
                        } */}
                    </Card>

                </div>

            </div>


        </div>
    );
};

export default Admin;