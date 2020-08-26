import React, { useEffect, useState } from "react";
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


const References = () => {
  const [literature, setLiterature] = useState([]);
  const [sources, setSources] = useState([]);

  const fetchData = async () => {
    window.scrollTo(0, 0);
    const resLiterature = await fetch(API_PATH(databases.literature));
    const resSources = await fetch(API_PATH(databases.sources));
    const resLiteratureData = await resLiterature.json();
    const resSourcesData = await resSources.json();
    setLiterature(resLiteratureData);
    setSources(resSourcesData);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const useStyles = makeStyles((theme) => ({
    main: {
      paddingTop: "5%",
    },

    paper: {
      width: "100%",
      height: "fit-content",
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
    },
  }));

  const classes = useStyles();

  return (
    <Fade in={true} timeout={1000}>
      <Container className={classes.main} justify="true" role="main">
        <h1>Quellen und Literatur</h1>
        <Grid container spacing={6}>
          <Grid className={classes.item} item xs={12} md={6}>
            <Paper elevation={3} className={classes.paper}>
              <Typography component={"span"} className={classes.content}>
                <Typography variant="h5" variantMapping={{ h5: "h2" }} className={classes.title}>
                  Quellen
                </Typography>
                <List className={classes.list}>
                  {sources.map((sourceData, index) => {
                    return (
                      <ListItem key={index}>
                        <BookOutlinedIcon aria-hidden="true" />
                        <Typography variant="subtitle1" variantMapping={{ subtitle1: "p" }} className={classes.source}>
                          {sourceData.source}
                        </Typography>
                      </ListItem>
                    );
                  })}
                </List>
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.item} item xs={12} md={6}>
            <Paper elevation={3} className={classes.paper}>
              <Typography component={"span"} className={classes.content}>
                <Typography variant="h5" variantMapping={{ h5: "h2" }} className={classes.title}>
                  Literatur
                </Typography>
                <List className={classes.list}>
                {literature.map((literatureData, index) => {
                    return (
                      <ListItem key={index}>
                        <BookOutlinedIcon aria-hidden="true" />
                        <Typography variant="subtitle1" variantMapping={{ subtitle1: "p" }} className={classes.source}>
                          {literatureData.literature}
                        </Typography>
                      </ListItem>
                    );
                  })}
                </List>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default References;
