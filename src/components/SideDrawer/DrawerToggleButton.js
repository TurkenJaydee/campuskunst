import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import styles from './hamburgers.min.css';

const useStyles = makeStyles(theme => ({

    toggleButton: {

        [theme.breakpoints.up('md')]: {
            display: 'none',
        },

        '& button': {
            /* zIndex: 1000, */
        },
    },
}));

const drawerToggleButton = props => {

    const classes = useStyles();

    return (
        <div className={classes.toggleButton} onKeyPress={props.click} tabIndex='0' role='button'>
            <button className={classNames({
                [styles["hamburger"]]: true,
            })} onClick={props.click} type="button">

                <span className={classNames({
                    [styles["hamburger-inner"]]: true,
                })}></span>
            </button>
        </div>
    );
}

export default drawerToggleButton;