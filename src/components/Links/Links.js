import React, { useEffect, useState, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Fade from "@material-ui/core/Fade";
import { databases } from "../../localapi/databases.enum";
import API_PATH from "../../localapi/localapi";
import SpinningCircle from "../SpinningCircle/SpinningCircle";
import { Helmet } from "react-helmet";

const Links = () => {
  const [artists, setArtists] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [furtherInfo, setFurtherInfo] = useState([]);

  const fetchData = async () => {
    window.scrollTo(0, 0);
    const resArtists = await fetch(API_PATH(databases.artists));
    const resFurtherInfo = await fetch(API_PATH(databases.furtherInfo));
    const resInstitutions = await fetch(API_PATH(databases.institutions));
    const resArtistsData = await resArtists.json();
    const resFurtherInfoData = await resFurtherInfo.json();
    const resInstitutionsData = await resInstitutions.json();

    setArtists(resArtistsData);
    setFurtherInfo(resFurtherInfoData);
    setInstitutions(resInstitutionsData);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const useStyles = makeStyles((theme) => ({
    listItemText: {
      paddingLeft: "1rem",

      "& span": {
        display: "flex",
        alignItems: "top",
      },
    },

    main: {
      paddingTop: "2%",
    },

    paper: {
      width: "100%",
      paddingTop: "20px",
    },

    content: {
      width: "100%",
    },

    item: {
      display: "flex",
      justifyContent: "center",
    },

    list: {
      "& a": {
        textDecoration: "underline", // A11y Fix: Links im Fließtext müssen unterstrichen sein
        color: "#6a1b9a",
        marginLeft: "0.5rem",
        "&:focus-visible": {
          outline: "2px solid #6a1b9a",
          outlineOffset: "2px",
        }
      },

      "& a:visited": {
        color: "#4a148c", // Etwas dunkleres Lila für besuchte Links
      },
      "& a:hover": {
        textDecoration: "none",
      }
    },
    title: {
      padding: "0.5rem",
      fontWeight: "600 !important",
    },

    icon: {
      marginTop: "0.2rem",
    },
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <Helmet>
        {/* Semantic Fix: Falscher Seitentitel */}
        <title>Links - Campuskunst</title>
      </Helmet>
      <Fade in={true} timeout={1000}>
        {/* Semantic Fix: component="main" statt role="main" */}
        <Container className={classes.main} component="main">
          <Typography variant="h3" component="h1" gutterBottom>
            Links
          </Typography>
          <Grid container spacing={6}>
            <Grid className={classes.item} item xs={12} md={4} sm={6}>
              <Paper elevation={3} className={classes.paper}>
                {/* Semantic Fix: component="div" statt "span" als Wrapper */}
                <div className={classes.content}>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.title}
                  >
                    Institutionen
                  </Typography>
                  <List className={classes.list}>
                    {institutions.length > 0 ? (
                      institutions.map((institutionsData, index) => (
                        <ListItem
                          className={classes.listItemText}
                          key={index}
                        >
                          <BusinessRoundedIcon aria-hidden="true" focusable="false" />
                          <a
                            href={`${institutionsData.link}`}
                            rel="noopener noreferrer"
                            // A11y Fix: Wenn der Link die Seite verlässt, sollte das angesagt werden
                            aria-label={`${institutionsData.name} (öffnet in neuem Tab)`}
                            target="_blank" // Falls es externe Links sind
                          >
                            {institutionsData.name}
                          </a>
                        </ListItem>
                      ))
                    ) : (
                      <SpinningCircle aria-label="Lade Institutionen" />
                    )}
                  </List>
                </div>
              </Paper>
            </Grid>
            <Grid className={classes.item} item xs={12} md={4} sm={6}>
              <Paper elevation={3} className={classes.paper}>
                <div className={classes.content}>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.title}
                  >
                    KünstlerInnen
                  </Typography>
                  <List className={classes.list}>
                    {artists.length > 0 ? (
                      artists.map((artistsData, index) => (
                        <ListItem
                          className={classes.listItemText}
                          key={index}
                        >
                          <BusinessRoundedIcon aria-hidden="true" focusable="false" />
                          <a
                            href={`${artistsData.link}`}
                            rel="noopener noreferrer"
                            aria-label={`${artistsData.name} (öffnet in neuem Tab)`}
                            target="_blank"
                          >
                            {artistsData.name}
                          </a>
                        </ListItem>
                      ))
                    ) : (
                      <SpinningCircle aria-label="Lade KünstlerInnen" />
                    )}
                  </List>
                </div>
              </Paper>
            </Grid>
            <Grid className={classes.item} item xs={12} sm={4}>
              <Paper elevation={3} className={classes.paper}>
                <div className={classes.content}>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.title}
                  >
                    Weiterführende Online-Informationen
                  </Typography>
                  <List className={classes.list}>
                    {furtherInfo.length > 0 ? (
                      furtherInfo.map((furtherInfoData, index) => (
                        <ListItem
                          className={classes.listItemText}
                          key={index}
                          alignItems="flex-start" // A11y Fix: 'top' ist kein gültiger Wert, 'flex-start' ist richtig
                        >
                          <InfoOutlinedIcon className={classes.icon} aria-hidden="true" focusable="false" />
                          <a
                            href={`${furtherInfoData.link}`}
                            rel="noopener noreferrer"
                            aria-label={`${furtherInfoData.name} (öffnet in neuem Tab)`}
                            target="_blank"
                          >
                            {furtherInfoData.name}
                          </a>
                        </ListItem>
                      ))
                    ) : (
                      <SpinningCircle aria-label="Lade weitere Informationen" />
                    )}
                  </List>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </Fragment>
  );
};

export default Links;