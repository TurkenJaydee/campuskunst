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
        alignItems: "center",
      },
    },

    main: {
      paddingTop: "5%",
    },

    paper: {
      width: "100%",
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
        textDecoration: "none",
        color: "#6a1b9a",
        marginLeft: "0.5rem",
      },

      "& a:visited": {
        textDecoration: "none",
        color: "#6a1b9a",
      },
    },
    title: {
      padding: "0.5rem",
    },
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <Helmet>
        <title>Kunstwerke</title>
      </Helmet>
      <Fade in={true} timeout={1000}>
        <Container className={classes.main} justify="true" role="main">
          <h1>Links</h1>
          <Grid container spacing={6}>
            <Grid className={classes.item} item xs={12} md={4} sm={6}>
              <Paper elevation={3} className={classes.paper}>
                <Typography component={"span"} className={classes.content}>
                  <Typography variant="h6" variantMapping={{ h6: "h2" }} className={classes.title}>
                    Institutionen
                  </Typography>
                  <List className={classes.list}>
                    {institutions.map((institutionsData, index) => {
                      if (institutions.length > 0) {
                        return (
                          <ListItem className={classes.listItemText} key={index}>
                            <BusinessRoundedIcon aria-hidden="true" />
                            <a href={`${institutionsData.link}`} rel="noopener noreferrer">
                              {institutionsData.name}
                            </a>
                          </ListItem>
                        );
                      } else {
                        return <SpinningCircle />;
                      }
                    })}
                  </List>
                </Typography>
              </Paper>
            </Grid>
            <Grid className={classes.item} item xs={12} md={4} sm={6}>
              <Paper elevation={3} className={classes.paper}>
                <Typography component={"span"} className={classes.content}>
                  <Typography variant="h6" variantMapping={{ h6: "h2" }} className={classes.title}>
                    KünstlerInnen
                  </Typography>
                  <List className={classes.list}>
                    {artists.map((artistsData, index) => {
                      if (artists.length > 0) {
                        return (
                          <ListItem className={classes.listItemText} key={index}>
                            <BusinessRoundedIcon aria-hidden="true" />
                            <a href={`${artistsData.link}`} rel="noopener noreferrer">
                              {artistsData.name}
                            </a>
                          </ListItem>
                        );
                      } else {
                        return <SpinningCircle />;
                      }
                    })}
                  </List>
                </Typography>
              </Paper>
            </Grid>
            <Grid className={classes.item} item xs={12} sm={4}>
              <Paper elevation={3} className={classes.paper}>
                <Typography component={"span"} className={classes.content}>
                  <Typography variant="h6" variantMapping={{ h6: "h2" }} className={classes.title}>
                    Weiterführende Online-Informationen
                  </Typography>
                  <List className={classes.list}>
                    {furtherInfo.map((furtherInfoData, index) => {
                      if (furtherInfo.length > 0) {
                        return (
                          <ListItem className={classes.listItemText} key={index}>
                            <InfoOutlinedIcon aria-hidden="true" />
                            <a href={`${furtherInfoData.link}`} rel="noopener noreferrer">
                              {furtherInfoData.name}
                            </a>
                          </ListItem>
                        );
                      } else {
                        return <SpinningCircle />;
                      }
                    })}
                  </List>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </Fragment>
  );
};

export default Links;
