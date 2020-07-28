import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

    backdrop: props => ({
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: '100',
    }
    )
});

const backdrop = props => {

    const classes = useStyles();

    return (
        <div className={classes.backdrop} onKeyPress={props.click} onClick={props.click} role='button' tabIndex='0'></div>
    );
}

export default backdrop;