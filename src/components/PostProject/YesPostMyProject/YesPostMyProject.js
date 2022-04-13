import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { collectionContext } from '../../../App';
import './YesPostMyProject.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import PostPolicy from '../PostPolicy/PostPolicy'
import { handleClickOpenFnc } from '../PostProjectDriver/PostProjectDriver';


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);
const YesPostMyProject = ({ budgetState, budgetData, userInfo }) => {
    const { value1 } = useContext(collectionContext);
    const [loginInfo] = value1;
    const history = useHistory();

    const [open, setOpen] = React.useState(false);



    const handleClickOpen = () => handleClickOpenFnc(userInfo, loginInfo, budgetData, budgetState, setOpen);


    const handleClose = () => {
        setOpen(false);
        history.push(`/pendingArea/${loginInfo.projectId}/${loginInfo.uniqueId}`);
    };


    return (
        <React.Fragment>
            <div className="click-post-button">
                <button onClick={handleClickOpen}>
                    Yes, post my project
                </button>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Wow Great!
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Your post is submitted. Now it need to admin approval. When it would be approved then you can see this project into the job post area.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            <hr />
            <PostPolicy />
        </React.Fragment>
    );
};

export default React.memo(YesPostMyProject);