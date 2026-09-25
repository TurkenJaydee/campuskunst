import React, { useEffect, useState, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import Fade from "@material-ui/core/Fade";
import { databases } from "../../localapi/databases.enum";
import API_PATH from "../../localapi/localapi";
import SpinningCircle from "../SpinningCircle/SpinningCircle";
import { Helmet } from "react-helmet";

const References = () => {
  const [literature, setLiterature] = useState([]);
  const [sources, setSources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    window.scrollTo(0, 0);
    try {
      const resLiterature = await fetch(API_PATH(databases.literature));
      const resSources = await fetch(API_PATH(databases.sources));
      const resLiteratureData = await resLiterature.json();
      const resSourcesData = await resSources.json();
      setLiterature(resLiteratureData);
      setSources(resSourcesData);
    } catch (error) {
      console.error("Fehler beim Laden der Referenzen:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const useStyles = makeStyles((theme) => ({
    main: {
      paddingTop: "2%",
    },

    paper: {
      width: "100%",
      height: "100%", // A11y/UI Fix: Gleiche Höhe für beide Boxen im Grid
      paddingTop: "25px",
    },

    content: {
      width: "100%",
    },

    item: {
      display: "flex",
      justifyContent: "center",
    },

    source: {
      marginLeft: "1rem",
    },

    title: {
      marginLeft: "1rem",
      fontWeight: "600 !important",
    },

    icon: {
      marginTop: "0.2rem", // Minimal angepasst für bessere vertikale Ausrichtung
    },
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <Helmet>
        {/* A11y Fix: Eindeutiger Seitentitel für Tab/Screenreader */}
        <title>Quellen und Literatur - Campuskunst</title>
      </Helmet>
      <Fade in={true} timeout={1000}>
        {/* Semantic Fix: component="main" statt role="main" */}
        <Container className={classes.main} component="main">
          {/* Semantic Fix: Material-UI Typography für h1 nutzen */}
          <Typography variant="h3" component="h1" gutterBottom>
            Quellen und Literatur
          </Typography>
          <Grid container spacing={6} alignItems="stretch">
            <Grid className={classes.item} item xs={12} md={6}>
              <Paper elevation={3} className={classes.paper}>
                {/* Semantic Fix: div statt span als Wrapper für Block-Elemente */}
                <div className={classes.content}>
                  <Typography
                    variant="h5"
                    component="h2" // Semantic Fix: component statt variantMapping
                    className={classes.title}
                  >
                    Quellen
                  </Typography>
                  <List className={classes.list}>
                    {isLoading ? (
                      <SpinningCircle aria-label="Lade Quellen" />
                    ) : sources.length > 0 ? (
                      sources.map((sourceData, index) => {
                        return (
                          // A11y Fix: alignItems="top" ist invalide, flex-start ist korrekt
                          <ListItem key={index} alignItems="flex-start">
                            <BookOutlinedIcon className={classes.icon} aria-hidden="true" focusable="false" />
                            <Typography
                              variant="body1" // A11y Fix: body1 ist besser lesbar für Fließtext als subtitle1
                              component="p"
                              className={classes.source}
                            >
                              {sourceData.source}
                            </Typography>
                          </ListItem>
                        );
                      })
                    ) : (
                      <Typography component="p" style={{ marginLeft: "1rem" }}>
                        Keine Quellen gefunden.
                      </Typography>
                    )}
                  </List>
                </div>
              </Paper>
            </Grid>
            <Grid className={classes.item} item xs={12} md={6}>
              <Paper elevation={3} className={classes.paper}>
                <div className={classes.content}>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.title}
                  >
                    Literatur
                  </Typography>
                  <List className={classes.list}>
                    {isLoading ? (
                      <SpinningCircle aria-label="Lade Literatur" />
                    ) : literature.length > 0 ? (
                      literature.map((literatureData, index) => {
                        return (
                          <ListItem key={index} alignItems="flex-start">
                            <BookOutlinedIcon className={classes.icon} aria-hidden="true" focusable="false" />
                            <Typography
                              variant="body1"
                              component="p"
                              className={classes.source}
                            >
                              {literatureData.literature}
                            </Typography>
                          </ListItem>
                        );
                      })
                    ) : (
                      <Typography component="p" style={{ marginLeft: "1rem" }}>
                        Keine Literatur gefunden.
                      </Typography>
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

export default References;