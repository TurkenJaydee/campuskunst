import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Fragment>
      <Typography variant="body2" color="textSecondary">
        {"Copyright © 2020 Universitätsarchiv Bremen"}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        E-Mail: <a href="mailto:archiv@uni-bremen.de" style={{textDecoration: 'none', color: '#BB1212'}}>archiv@uni-bremen.de</a>
      </Typography>
    </Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    textAlign: "center",
    backgroundColor: theme.palette.type === "dark" ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Typography variant="body1">CAMPUSKUNST</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
