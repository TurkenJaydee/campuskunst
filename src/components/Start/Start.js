import React, { Fragment, useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import PaletteIconOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import API_PATH from '../../localapi/localapi';
import {databases} from '../../localapi/databases.enum';
import SpinningCircle from "../SpinningCircle/SpinningCircle";
import { Helmet } from "react-helmet";

const Start = () => {
  const [homeContent, setHomeContent] = useState([{}]);
  const [toggleEasyText, setToggleEasyText] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const data = await fetch(API_PATH(databases.start));
      const resData = await data.json();
      setHomeContent(resData);
    } catch (error) {
      console.error("Fehler beim Laden des Startseiteninhalts", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onToggleEasyText = () => {
    setToggleEasyText(!toggleEasyText);
  };

  const getTextStyle = (index) => {
    if (homeContent[index] !== undefined && Object.keys(homeContent[index]).length > 0) {
      return toggleEasyText ? homeContent[index].description_easy : homeContent[index].description;
    } else {
      return "Inhalt nicht gefunden.";
    }
  };

  const getImage = (index) => {
    if (homeContent[index] !== undefined && Object.keys(homeContent[index]).length > 0) {
      if(homeContent[index].image !== '') {
        return homeContent[index].image;
      }
    }
    return "platzhalter.jpg";
  };

  const getImageAlt = (index) => {
    if (homeContent[index] !== undefined && Object.keys(homeContent[index]).length > 0) {
      if(homeContent[index].image_alt !== '') {
        return homeContent[index].image_alt;
      }
    }
    return ""; 
  };

  const useStyles = makeStyles((theme) => ({
    content: {
      [theme.breakpoints.down("sm")]: {
        padding: "0 1rem 0 1rem",
        textAlign: 'left',
      },

      "& span": {
        fontWeight: "bold",
      },
    },

    firstContent: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    section: {
      paddingBottom: "4rem",
      paddingTop: "4rem",
      "& h1": {
        marginTop: "0",
      },
    },

    art: {
      textAlign: "center",
      backgroundColor: "rgba(250, 250, 250)",

      [theme.breakpoints.down('sm')]: {
        paddingTop: '2rem',
      },
    },

    program: {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },

    goals: {
      backgroundColor: "rgba(250, 250, 250)",
    },

    premises: {
      backgroundColor: "rgba(0, 0, 0, 0.04);",
    },

    exhibition: {
      backgroundColor: "rgba(250, 250, 250);",
    },

    premiseList: {
      order: 2,
      [theme.breakpoints.down("sm")]: {
        order: 1,
      },
    },

    premiseListImg: {
      order: 1,
      [theme.breakpoints.down("sm")]: {
        order: 2,
      },
    },

    heading: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },

    keyword: {
      color: "#BB1212",
      fontWeight: "500",
    },

    firstChapter: {
      marginBottom: "1.5rem",
      textAlign: "left",
      lineHeight: "1.2 !important", 
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },

    formControl: {
      marginBottom: "2rem",

      [theme.breakpoints.down('sm')]: {
        marginBottom: '1.5rem',
      },
    },

    image: {
      width: "100%",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.3);",

      [theme.breakpoints.down("sm")]: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%",
      },
    },
  }));

  const classes = useStyles();

  if (isLoading) {
    return <SpinningCircle aria-label="Lade Startseite" />;
  }

  return (
    <Fragment>
      <Helmet>
        <title>Start - Campuskunst</title>
      </Helmet>
      <Fade in={true} timeout={1500}>
        <main>
          <section className={`${classes.section} ${classes.art}`} aria-labelledby="heading-art">
            <Container maxWidth="md">
              <FormControlLabel
                className={classes.formControl}
                control={
                  <Switch
                    checked={toggleEasyText}
                    onChange={onToggleEasyText}
                    color="primary"
                    name="Einfache Sprache Button"
                    size="medium"
                    aria-label="Einfache Sprache ein und ausschalten"
                    aria-checked={toggleEasyText}
                  />
                }
                label="Einfache Sprache"
              />
              
              <Typography id="heading-art" className={`${classes.firstChapter} ${classes.heading}`} variant="h2" component="h2">
                <span className={classes.keyword}>KUNST</span> AN DER UNIVERSITÄT BREMEN
              </Typography>
              
              <Typography component="div" className={`${classes.content} ${classes.firstContent}`} dangerouslySetInnerHTML={{ __html: getTextStyle(0) }} />
            </Container>
          </section>

          <section className={`${classes.section} ${classes.program}`} aria-labelledby="heading-program">
            <Container maxWidth="lg">
              <Grid container spacing={3} alignItems="center">
                <Grid item sm={12} md={6}>
                  <img className={classes.image} alt={getImageAlt(1)} src={`${process.env.PUBLIC_URL}/img/${getImage(1)}`} />
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography id="heading-program" variant="h3" component="h2" className={classes.heading}>
                    <span className={classes.keyword}>PROGRAMM</span> "KUNST IM UNIVERSITÄTSBEREICH"
                  </Typography>
                  <Typography component="div" className={classes.content} dangerouslySetInnerHTML={{ __html: getTextStyle(1) }} />
                </Grid>
              </Grid>
            </Container>
          </section>

          <section className={`${classes.section} ${classes.goals}`} aria-labelledby="heading-goals">
            <Container maxWidth="lg">
              <Grid container spacing={3} alignItems="center">
                <Grid item sm={12} md={6}>
                  <Typography id="heading-goals" variant="h3" component="h2" className={classes.heading}>
                    <span className={classes.keyword}>ZIELE</span> DES BREMER HOCHSCHULMODELLS
                  </Typography>
                  <Typography component="div" className={classes.content} dangerouslySetInnerHTML={{ __html: getTextStyle(2) }} />
                </Grid>
                <Grid item sm={12} md={6}>
                  <img className={classes.image} alt={getImageAlt(2)} src={`${process.env.PUBLIC_URL}/img/${getImage(2)}`} />
                </Grid>
              </Grid>
            </Container>
          </section>

          <section className={`${classes.section} ${classes.premises}`} aria-labelledby="heading-premises">
            <Container maxWidth="lg">
              <Grid container spacing={3} alignItems="center">
                <Grid className={classes.premiseListImg} item sm={12} md={6}>
                  <img className={classes.image} alt={getImageAlt(3)} src={`${process.env.PUBLIC_URL}/img/${getImage(3)}`} />
                </Grid>
                <Grid className={classes.premiseList} item sm={12} md={6}>
                  <div>
                    <Typography id="heading-premises" variant="h3" component="h2" className={classes.heading}>
                      ES GALTEN ZWEI <span className={classes.keyword}>PRÄMISSEN</span>
                    </Typography>
                    <Typography component="div" className={classes.content} dangerouslySetInnerHTML={{ __html: getTextStyle(3) }} />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </section>

          <section className={`${classes.section} ${classes.exhibition}`} aria-labelledby="heading-exhibition">
            <Container maxWidth="lg">
              <Grid container spacing={3} alignItems="center">
                <Grid item sm={12} md={6}>
                  <Typography id="heading-exhibition" variant="h3" component="h2" className={classes.heading}>
                     AUSSTELLUNG <span className={classes.keyword}>KUNST IM STADTBILD</span>
                  </Typography>
                  <Typography component="div" className={classes.content} dangerouslySetInnerHTML={{ __html: getTextStyle(4) }} />
                </Grid>
                <Grid item sm={12} md={6}>
                  <img className={classes.image} alt={getImageAlt(4)} src={`${process.env.PUBLIC_URL}/img/${getImage(4)}`} />
                </Grid>
              </Grid>
            </Container>
          </section>
        </main>
      </Fade>
    </Fragment>
  );
};

export default Start;