import React from 'react';
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
import { Link } from "react-router-dom";
import "./Navbar.css";
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
    const userLoginInfo = JSON.parse(localStorage.getItem('userLoginInfo'));


    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // const [modal, setModal] = useState(false);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // const handleNotification = (e) => {
    //     setModal(true);
    //     setNotifications(e.currentTarget);
    //     fetch('http://localhost:4000/seenUnseen', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ seenUnseenState: 'Seen', uniqueId: notificationsData.uniqueId })
    //     })
    // }
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        // setNotifications(null);
        // setModal(false);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

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
            {/* <MenuItem onClick={handleMenuClose}>
                <Link to="account" className="text-dark">Account</Link>
            </MenuItem> */}
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
                            <img style={{ height: '40px' }} className="" src={freelancerLogo} alt="" />
                        </Link>
                    </Typography>

                    <Typography className={classes.subTitle} variant="h6" noWrap>
                        <Link to="/">
                            How It Works
                        </Link>
                    </Typography>

                    {
                        userLoginInfo && userLoginInfo.email && <Typography className={classes.subTitle} variant="h6" noWrap>
                            <Link to="/postedJob">
                                Browse Projects
                            </Link>
                        </Typography>
                    }

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {
                            userLoginInfo && userLoginInfo.email && <Link to="/postProject">
                                <div className="btn-area">
                                    <button className="post-project-btn hire-freelancer">Post Project</button>
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

            {/* {
                modal && <div className="modal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Notifications</h5>
                                <button type="button" className="btn-close" onClick={() => setModal(false)} aria-label="Close"></button>
                            </div>
                            {
                                notificationsData && notificationsData.postInfo.map((data, index) => (

                                    <div className="modal-body border-bottom pb-0" key={index} style={{ cursor: 'pointer' }} >
                                        <h6>{data.title}</h6>
                                        <p style={{ margin: '0px', fontSize: '15px' }}>{(data.description).slice(0, 25)}...</p>
                                        <p style={{ textAlign: 'right', margin: 0 }}><small style={{ fontSize: '13px', fontWeight: '600' }}>{data.date}</small></p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            } */}

            {renderMobileMenu}
            {renderMenu}
        </div>
    );
};

export default Navbar;