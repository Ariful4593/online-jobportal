import React from 'react';
import { useContext } from 'react';
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
const YesPostMyProject = ({ file }) => {
    const { value1 } = useContext(collectionContext)
    const [loginInfo] = value1;

    console.log(loginInfo)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        // fetch('https://aqueous-river-54090.herokuapp.com/userData', {
        
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', loginInfo.name);
        formData.append('email', loginInfo.email);
        formData.append('password', loginInfo.password);
        formData.append('title', loginInfo.title);
        formData.append('description', loginInfo.description);
        formData.append('status', loginInfo.status);
        formData.append('projectId', loginInfo.projectId);
        formData.append('budget', loginInfo.budget);
        formData.append('currencyName', loginInfo.currencyName);
        formData.append('accountType', loginInfo.accountType);
        formData.append('paymentData', JSON.stringify(loginInfo.paymentData));
        formData.append('skillData', JSON.stringify(loginInfo.skillData));

        // formData.append('clientData', loginInfo)
        fetch('http://localhost:4000/userData', {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            body: formData
        })
            .then(res => res.json())
            .then(data => console.log(data))

        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
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
    );
};

export default React.memo(YesPostMyProject);