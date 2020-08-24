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

const start = () => {
  const [homeContent, setHomeContent] = useState([{}]);
  const [toggleEasyText, setToggleEasyText] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const data = await fetch(API_PATH(databases.start));
    const resData = await data.json();
    setHomeContent(resData);
    console.log(resData);
  };

  const onToggleEasyText = () => {
    setToggleEasyText(!toggleEasyText);
  };

  const getTextStyle = (index) => {
    if (homeContent[index] !== undefined) {
      return toggleEasyText ? homeContent[index].description_easy : homeContent[index].description;
    } else {
      return "Inhalt nicht gefunden.";
    }
  };

  const getImage = (index) => {
    if (homeContent[index] !== undefined) {
      if(homeContent[index].image !== '') {
        return homeContent[index].image;
      }
    } else {
      return "Bild nicht gefunden.";
    }
  };

  const getImageAlt = (index) => {
    if (homeContent[index] !== undefined) {
      if(homeContent[index].image_alt !== '') {
        return homeContent[index].image_alt;
      }
    } else {
      return "Bild nicht gefunden.";
    }
  };

  const useStyles = makeStyles((theme) => ({
    content: {
      margin: "1rem",
      marginLeft: "auto",
      marginRight: "auto",
      width: toggleEasyText ? "70%" : "100%",

      [theme.breakpoints.down("sm")]: {
        padding: "0 1rem 0 1rem",
      },

      "& span": {
        fontWeight: "bold",
      },
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
      backgroundColor: "rgba(250, 250, 250);",
    },

    program: {
      backgroundColor: "rgba(0, 0, 0, 0.04);",

      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },

    goals: {
      backgroundColor: "rgba(250, 250, 250);",

      "& h1": {
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
        },
      },
    },

    premises: {
      backgroundColor: "rgba(0, 0, 0, 0.04);",

      "& h1": {
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
        },
      },
    },

    exhibition: {
      backgroundColor: "rgba(250, 250, 250);",

      "& h1": {
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
        },
      },
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

    keyword: {
      color: "#BB1212",
      fontWeight: "500",
    },

    firstChapter: {
      marginBottom: "1.5rem",
    },

    formControl: {
      flexDirection: "column-reverse",
      marginBottom: "3rem",
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
        width: "70%",
      },
    },
  }));

  const classes = useStyles();

  if (homeContent.length > 0) {
    return (
      <Fragment>
        <Fade in={true} timeout={1000}>
          <Typography role="main" component={"span"}>
            <div className={`${classes.section} ${classes.art}`}>
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
                    />
                  }
                  label="Einfache Sprache"
                />
                <h1>
                  <Typography className={classes.firstChapter} variant="h4" variantMapping={{ h4: "span" }} >
                    <Typography variant="h2" variantMapping={{ h2: "span" }} display="inline" className={classes.keyword}>
                      KUNST
                    </Typography>{" "}
                    <span className={classes.sectionHeading}>AN DER UNIVERSITÄT BREMEN </span>
                  </Typography>
                </h1>
                <PaletteIconOutlinedIcon />
                <PaletteIconOutlinedIcon />
                <PaletteIconOutlinedIcon />
                <Typography variant="body1" className={classes.content} dangerouslySetInnerHTML={{ __html: getTextStyle(0) }}></Typography>
              </Container>
            </div>
            <div className={`${classes.section} ${classes.program}`}>
              <Container maxWidth="lg">
                <Grid container spacing={3} alignItems="center">
                  <Grid item sm={12} md={6}>
                    <img className={classes.image} alt={getImageAlt(1)} src={`${process.env.PUBLIC_URL + `/img/${getImage(1)}`}`}></img>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Typography variant="h4" variantMapping={{ h4: "h2" }}>
                      <Typography variant="h2" variantMapping={{ h2: "p" }} display="inline" className={classes.keyword}>
                        PROGRAMM
                      </Typography>{" "}
                      <br />
                      "KUNST IM UNIVERSITÄTSBEREICH"
                    </Typography>
                    <Typography className={classes.content} dangerouslySetInnerHTML={{ __html: getTextStyle(1) }}></Typography>
                  </Grid>
                </Grid>
              </Container>
            </div>
            <div className={`${classes.section} ${classes.goals}`}>
              <Container maxWidth="lg">
                <Grid container spacing={3} alignItems="center">
                  <Grid item sm={12} md={6}>
                    <Typography variant="h4" variantMapping={{ h4: "h2" }}>
                      <Typography variant="h2" variantMapping={{ h2: "p" }} display="inline" className={classes.keyword}>
                        ZIELE{" "}
                      </Typography>{" "}
                      DES BREMER HOCHSCHULMODELLS
                    </Typography>
                    <Typography className={classes.content} dangerouslySetInnerHTML={{ __html: getTextStyle(2) }}></Typography>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <img className={classes.image} alt={getImageAlt(2)} src={`${process.env.PUBLIC_URL + `/img/${getImage(2)}`}`}></img>
                  </Grid>
                </Grid>
              </Container>
            </div>
            <div className={`${classes.section} ${classes.premises}`}>
              <Container maxWidth="lg">
                <Grid container spacing={3} alignItems="center">
                  <Grid className={classes.premiseListImg} item sm={12} md={6}>
                    <img className={classes.image} alt={getImageAlt(3)} src={`${process.env.PUBLIC_URL + `/img/${getImage(3)}`}`}></img>
                  </Grid>
                  <Grid className={classes.premiseList} item sm={12} md={6}>
                    <div>
                      <Typography variant="h4" variantMapping={{ h4: "h2" }}>
                        ES GALTEN ZWEI{" "}
                        <Typography variant="h2" variantMapping={{ h2: "p" }} display="inline" className={classes.keyword}>
                          PRÄMISSEN
                        </Typography>
                      </Typography>
                      <Typography className={classes.content} dangerouslySetInnerHTML={{ __html: getTextStyle(3) }}></Typography>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
            <div className={`${classes.section} ${classes.exhibition}`}>
              <Container maxWidth="lg">
                <Grid container spacing={3} alignItems="center">
                  <Grid item sm={12} md={6}>
                  <Typography variant="h4" variantMapping={{ h4: "h2" }}>
                        AUSSTELLUNG{" "}
                        <Typography variant="h2" variantMapping={{ h2: "p" }} display="inline" className={classes.keyword}>
                          KUNST IM STADTBILD
                        </Typography>
                      </Typography>
                    <Typography className={classes.content} dangerouslySetInnerHTML={{ __html: getTextStyle(4) }}></Typography>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <img className={classes.image} alt={getImageAlt(2)} src={`${process.env.PUBLIC_URL + `/img/${getImage(4)}`}`}></img>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </Typography>
        </Fade>
      </Fragment>
    );
  } else {
    return <SpinningCircle />;
  }
};

export default start;
