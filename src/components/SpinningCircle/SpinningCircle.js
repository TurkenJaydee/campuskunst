import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";

const SpinningCircle = () => {
  const useStyles = makeStyles((theme) => ({
    circle: {
        display: 'flex',
        marginTop: '3rem',
        justifyContent: 'center',
      },
  }));

  const classes = useStyles();

  return (<Container className={classes.circle} maxWidth="lg" role="main"><CircularProgress /></Container>);
};

export default SpinningCircle;
