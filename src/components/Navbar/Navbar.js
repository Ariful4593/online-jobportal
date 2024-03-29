import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import freelancerLogo from '../../images/trusted/freelancer-logo-light.svg'
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import { AiFillDatabase } from "react-icons/ai";
import { SiPostman } from "react-icons/si";
import { collectionContext } from '../../App';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    subTitle: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            marginLeft: '30px',
            fontSize: '18px',
            marginTop: '7px',
        },
    }
    ,
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));
const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const token = JSON.parse(localStorage.getItem('token'));
    const { value9, value10, value11, value12 } = useContext(collectionContext);
    const [, setUpdateStatus] = value9;
    const [, setSignIn] = value10;
    const [jobSeaker, setJobSeaker] = value12;
    const [, setEmployer] = value11;

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // const [modal, setModal] = useState(false);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    let history = useHistory()

    const signout = (type) => {
        setUpdateStatus(true);
        setSignIn(true);
        setJobSeaker(type === 'jobSeaker' ? true : false);
        setEmployer(type === 'employer' ? true : false);
        history.push("/login");
        localStorage.removeItem("token");
    }
    const signIn = (type) => {
        setJobSeaker(type === 'jobSeaker' ? true : false);
        setEmployer(type === 'employer' ? true : false);
        history.push("/");
    }


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <Link to="/view-profile" className="text-dark" >View Profile</Link>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
                <Link to="/membership" className="text-dark">Membership</Link>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
                <Link to="/account-analytics" className="text-dark">Account Analytics</Link>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
                <Link to="/bid-insight" className="text-dark">Bid Insights</Link>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
                <Link to="/settings" className="text-dark">Settings</Link>
            </MenuItem>
            {
                token ? <MenuItem onClick={handleMenuClose}>
                    <button className="btn text-dark p-0" onClick={
                        () => signout(jobSeaker ? 'jobSeaker' : 'employer')
                    }>Sign Out</button>
                </MenuItem> : <MenuItem onClick={handleMenuClose}>
                    <button className="btn text-dark p-0" onClick={
                        () => signIn(jobSeaker ? 'jobSeaker' : 'employer')
                    }>Sign In</button>
                </MenuItem>
            }

        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <Link to="/postedJob" className="text-dark" ><AiFillDatabase /> Browse Project</Link>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
                <Link to="/postProject" className="text-dark" >
                    <SiPostman /> Post Project
                </Link>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem >
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to="/">
                            <img style={{ height: '40px' }} className="w-100" src={freelancerLogo} alt="" />
                        </Link>
                    </Typography>

                    <Typography className={classes.subTitle} variant="h6" noWrap>
                        <Link to="/">
                            How It Works
                        </Link>
                    </Typography>

                    {
                        token && <Typography className={classes.subTitle} variant="h6" noWrap>
                            <Link to="/postedJob">
                                Browse Projects
                            </Link>
                        </Typography>
                    }

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {
                            token && <Link to="/postProject">
                                <div className="btn-area">
                                    <button className="post-project-btn ">Post Project</button>
                                </div>
                            </Link>
                        }

                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            aria-label="show 17 new notifications"
                            color="inherit"
                        // onClick={handleNotification}
                        >
                            <Badge badgeContent={0} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
};

export default Navbar;