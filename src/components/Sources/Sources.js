import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import PaletteIconOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Fade from "@material-ui/core/Fade";

const Sources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const useStyles = makeStyles((theme) => ({
    listItemText: {
      paddingLeft: "1rem",
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
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <BusinessRoundedIcon />
                      <a href="http://www.bremer-archive.de/" target="_blank" rel="noopener noreferrer">
                        Arbeitskreis Bremer Archive
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <BusinessRoundedIcon />
                      <a href="http://www.museeninbremen.de/ausstellungen/" target="_blank" rel="noopener noreferrer">
                        Museen in Bremen
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <BusinessRoundedIcon />
                      <a href="http://www.uni-bremen.de/" target="_blank" rel="noopener noreferrer">
                        Universit&auml;t Bremen
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <BusinessRoundedIcon />
                      <a href="http://www.uni-bremen.de/archiv" target="_blank" rel="noopener noreferrer">
                        Universit&auml;tsarchiv Bremen
                      </a>
                    </ListItemText>
                  </li>
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
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a href="http://www.nthome.de/ellen/" target="_blank" rel="noopener noreferrer">
                        Ellen Heinemann
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a href="http://www.pkfkrueger.de/" target="_blank" rel="noopener noreferrer">
                        Peter K. F. Kr&uuml;ger
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a href="http://www.artur-laskus.com" target="_blank" rel="noopener noreferrer">
                        Artur Laskus
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a href="http://de.wikipedia.org/wiki/Louis_le_Roy" target="_blank" rel="noopener noreferrer">
                        Louis le Roy
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a href="http://www.jubmoenster.de/" target="_blank" rel="noopener noreferrer">
                        Jub Mönster
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a href="https://www.mueller-in-art.de/" target="_blank" rel="noopener noreferrer">
                        Hans-J. Müller
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a href="http://kunstaspekte.de/person/horst-muller" target="_blank" rel="noopener noreferrer">
                        Horst M&uuml;ller
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a href="http://www.depelmann.de/shop/?S=hfrwnwgzu&A[K]=1&K=35" target="_blank" rel="noopener noreferrer">
                        Manfred Nipp
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a
                        href="https://www.worpsweder-gegenwartskunst.de/wwk/bildhauer/worpswede/waldemar-otto/136"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Waldemar Otto
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a href="http://www.jimmidpaesler.de/" target="_blank" rel="noopener noreferrer">
                        Jimmi D. Paesler
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a href="http://www.edeltraut-rath.de/" target="_blank" rel="noopener noreferrer">
                        Edeltraut Rath
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a href="http://volker-schnuettgen.com/" target="_blank" rel="noopener noreferrer">
                        Volker Schn&uuml;ttgen
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <PaletteIconOutlinedIcon />
                      <a href="http://www.adriaanvanderende.de" target="_blank" rel="noopener noreferrer">
                        Adriaan van der Ende
                      </a>
                    </ListItemText>
                  </li>
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
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <InfoOutlinedIcon />
                      <a href="http://www.bremer-archive.de/" target="_blank" rel="noopener noreferrer">
                        Arbeitskreis Bremer Archive
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <InfoOutlinedIcon />
                      <a href="http://www.museeninbremen.de/ausstellungen/" target="_blank" rel="noopener noreferrer">
                        Museen in Bremen
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <InfoOutlinedIcon />
                      <a href="http://www.uni-bremen.de/" target="_blank" rel="noopener noreferrer">
                        Universit&auml;t Bremen
                      </a>
                    </ListItemText>
                  </li>
                  <li>
                    <ListItemText className={classes.listItemText}>
                      <InfoOutlinedIcon />
                      <a href="http://www.uni-bremen.de/archiv" target="_blank" rel="noopener noreferrer">
                        Universit&auml;tsarchiv Bremen
                      </a>
                    </ListItemText>
                  </li>
                </List>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default Sources;
