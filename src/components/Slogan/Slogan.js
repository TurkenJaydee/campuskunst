import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  sloganWrapper: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/img/congruent_pentagon_blue.png"})`,
    backgroundPosition: "center center",
    padding: "7rem 0 7rem 0",

    [theme.breakpoints.down(900)]: {
      padding: "4rem 0 7rem 0",
    },

    [theme.breakpoints.down(600)]: {
      padding: "3rem 0 7rem 0",
    },

    [theme.breakpoints.down(420)]: {
      backgroundSize: "cover",
    },

    [theme.breakpoints.up(420)]: {
      backgroundSize: "contain",
    },
  },

  slogan: {
    marginTop: "4rem",
    fontWeight: "100",
    padding: "2rem 0 0",
    textTransform: "uppercase",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  sloganIntro: {
    borderBottom: "1px solid #000",
    paddingBottom: ".25rem",
    color: "#333f53",
    fontWeight: "400",
    lineHeight: "1.767",

    [theme.breakpoints.up("xs")]: {
      fontSize: "0.875rem",
    },

    [theme.breakpoints.up("sm")]: {
      fontSize: "1.125rem",
    },
  },

  sloganMain: {
    borderBottom: "1px solid #000",
    fontWeight: "100",
    letterSpacing: ".06rem",
    lineHeight: "1.125",
    padding: "0 0 .25rem",
    textTransform: "none",
    margin: "0.5rem 0", // Leichtes Margin für bessere Abstände

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.92rem",
    },

    [theme.breakpoints.up("sm")]: {
      fontSize: "2.92rem",
    },
  },

  sloganSubline: {
    color: "#333f53",
    fontSize: "1.125rem",
    fontWeight: "400",
    lineHeight: "1.767",

    [theme.breakpoints.up("xs")]: {
      fontSize: "0.875rem",
    },

    [theme.breakpoints.up("sm")]: {
      fontSize: "1.125rem",
    },
  },
}));

const Slogan = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.sloganWrapper}>
        <div className={classes.slogan}>
          {/* Semantic Fix: Explizites <p> Tag für den Einleitungstext */}
          <Typography component="p" className={classes.sloganIntro}>
            Ein Projekt des Uni-Archivs Bremen
          </Typography>
          
          {/* Semantic Fix: h2 als logische Überschrift für diesen Seiten-Header */}
          <Typography component="h2" className={classes.sloganMain}>
            CAMPUSKUNST
          </Typography>
          
          {/* Semantic Fix: Explizites <p> Tag für den Untertitel */}
          <Typography component="p" className={classes.sloganSubline}>
            Kunstwerke an der Uni Bremen
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default Slogan;