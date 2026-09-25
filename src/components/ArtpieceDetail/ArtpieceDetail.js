import React, { Fragment, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import API_PATH from "../../localapi/localapi";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Chip from "@material-ui/core/Chip";
import { Helmet } from "react-helmet";
import SimpleMap from '../map/map';

const ArtpieceDetail = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchArtpiece();
  }, []);

  const [artpiece, setArtpiece] = useState({});
  const [toggleEasyText, setToggleEasyText] = useState(false);

  const fetchArtpiece = async () => {
    try {
      const data = await fetch(API_PATH("artpieces"));
      const artpieceArray = await data.json();

      const searchName = decodeURIComponent(match.params.name).replace("-", "/");
      
      const contains = artpieceArray.find((item) => item.name.replace("-", "/") === searchName);
      setArtpiece(contains);
    } catch (error) {
      console.error("Fehler beim Laden der API:", error);
    }
  };

  const onToggleEasyText = () => {
    setToggleEasyText(!toggleEasyText);
  };

  const getTextStyle = () => {
    if (artpiece) {
      return toggleEasyText ? artpiece.description_easy : artpiece.description;
    }
  };

  const getImageString = () => {
    if (artpiece && artpiece.image_1) {
      const safeFilename = encodeURIComponent(artpiece.image_1);
      return `url('${window.location.origin}${process.env.PUBLIC_URL}/img/${safeFilename}')`;
    }
  };

  const useStyles = makeStyles((theme) => ({
    headerContainer: {
      position: "relative",
      textAlign: "center",
      marginTop: "3rem",
    },

    backgroundImage: {
      [theme.breakpoints.up("md")]: {
        "&::before": {
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          backgroundColor: "grey",
          content: `''`,
          zIndex: 0,
          backgroundImage: getImageString(),
          opacity: "0.3",
          backgroundSize: "contain",
          backgroundPosition: "center center",
        },
      },
    },

    header: {
      display: "table",
      maxWidth: "1280px",
      margin: "0px auto",
    },

    image: {
      width: "auto",
      height: "600px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",

      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "100%",
      },
    },

    attributes: {
      width: "90%",
      height: "auto",
      backgroundColor: "#edf5f6",
      color: "black",
      padding: "1rem 2rem 2rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      margin: "1rem auto 4rem auto",
      flexWrap: "wrap",
    },

    attribute: {
      margin: "0 3rem 0 3rem",
      marginTop: "1rem",

      [theme.breakpoints.down("sm")]: {
        margin: "0.5rem 1rem 0.5rem 1rem",
      },
    },

    attributesWrapper: {
      position: "relative",
      marginTop: "-5rem",
      display: "flex",
      flexDirection: "column",
    },

    attributeHeader: {
      paddingTop: "1.5rem",
      paddingLeft: "5rem",
      paddingRight: "5rem",
      backgroundColor: "#fafafa",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      flexDirection: "column",

      [theme.breakpoints.down("sm")]: {
        paddingLeft: "3rem",
        paddingRight: "3rem",
      },
    },

    title: {
      textAlign: "center",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      margin: "0",
      lineHeight: "3rem",

      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },

    subtitle: {
      fontFamily: "Montserrat",
      margin: " 0.2rem 0 0 0",
      fontWeight: "300",
    },

    tags: {
      textAlign: "center",
      margin: "1rem 0 2rem 0",
    },

    chip: {
      marginRight: "0.5rem",
      color: "white",
    },

    tagIcon: {
      display: "inline-block",
      verticalAlign: "bottom",
      marginLeft: "0.5rem",
      color: "white",
    },

    artistHeading: {
      margin: "0 0 0.5rem 0",
      fontFamily: "Montserrat",
      fontWeight: 600,
    },

    mapsHeading: {
      margin: "1rem 0 0 0",
      fontFamily: "Montserrat",
      fontWeight: 600,
    },

    sectionHeading: {
      margin: "0 0 0.5rem 0",
      fontFamily: "Montserrat",
      fontWeight: 600,
      padding: "0 6rem",

      [theme.breakpoints.down("xs")]: {
        padding: "0 2rem",
      },
    },

    description: {
      padding: "0 6rem",
      color: "rgba(0, 0, 0, 0.87)",
      fontFamily: "Montserrat",

      [theme.breakpoints.down("xs")]: {
        padding: "0 1rem",
      },
    },

    formControl: {
      flexDirection: "column-reverse",
      marginBottom: "1rem",
    },

    mapsWrapper: {
      position: "relative",
      width: "100%",
      height: "30rem",
      marginTop: "4rem",
    },

    error: {
      marginTop: "4rem",
    },
  }));

  const classes = useStyles();

  try {
    return (
      <Fragment>
        <Helmet>
          <title>{artpiece.name ? `Kunstwerk: ${artpiece.name} - Campuskunst` : "Lade Kunstwerk..."}</title>
        </Helmet>
        <main>
          <div className={classes.headerContainer}>
            {/* Semantic Fix: Kein span mit role="presentation" UND aria-label, stattdessen ein sauberes div */}
            <div className={classes.backgroundImage}>
              <div className={classes.header}>
                <img 
                  className={classes.image} 
                  alt={artpiece.alt_text || `Ansicht von ${artpiece.name}`} 
                  src={artpiece && artpiece.image_1 ? `${window.location.origin}${process.env.PUBLIC_URL}/img/${encodeURIComponent(artpiece.image_1)}` : ""}
                />
              </div>
            </div>
          </div>
          <Container className={classes.attributesWrapper} maxWidth="md">
            <div className={classes.attributeHeader}>
              <Typography variant="h3" variantMapping={{ h3: "h1" }} className={classes.title}>
                {artpiece.name}
              </Typography>

              {artpiece.subtitle && (
                <Typography variant="subtitle1" variantMapping={{ subtitle1: "h2" }} align="center" className={classes.subtitle}>
                  {artpiece.subtitle}
                </Typography>
              )}
              
              <Typography variant="subtitle2" variantMapping={{ subtitle2: "div" }} className={classes.tags}>
                {artpiece.tags && artpiece.tags.split(",").map((tag, index) => {
                  return (
                    <Fragment key={index}>
                      <Chip
                        className={classes.chip}
                        color="primary"
                        variant="default"
                        size="small"
                        label={tag.trim()}
                        icon={<LocalOfferOutlinedIcon className={classes.tagIcon} aria-hidden="true" />}
                      />
                    </Fragment>
                  );
                })}
              </Typography>
            </div>
            
            <div className={classes.attributes}>
              <div className={classes.attribute}>
                {/* Semantic Fix: "h3" statt "h2", da es strukturell unter dem Titel liegt */}
                <Typography variant="h5" variantMapping={{ h5: "h3" }} className={classes.artistHeading}>
                  KünstlerIn
                </Typography>
                {artpiece.artist}
              </div>
              <div className={classes.attribute}>
                <Typography variant="h5" variantMapping={{ h5: "h3" }} className={classes.artistHeading}>
                  Datum
                </Typography>
                {artpiece.date}
              </div>
              <div className={classes.attribute}>
                <Typography variant="h5" variantMapping={{ h5: "h3" }} className={classes.artistHeading}>
                  Größe
                </Typography>
                12x36cm
              </div>
            </div>
            
            {artpiece.description_easy && (
              <FormControlLabel
                className={classes.formControl}
                control={
                  <Switch
                    checked={toggleEasyText}
                    onChange={onToggleEasyText}
                    color="primary"
                    name="Einfache Sprache Button"
                    size="medium"
                    // aria-label ist gut, aria-expanded hilft hier zusätzlich, den Status zu kommunizieren
                    aria-label="Einfache Sprache ein und ausschalten"
                    aria-checked={toggleEasyText}
                  />
                }
                label="Einfache Sprache"
              />
            )}
            
            <div className={classes.descriptionSection}>
              <Typography className={classes.sectionHeading} variant="h5" variantMapping={{ h5: "h2" }}>
                Beschreibung
              </Typography>
              <Typography
                className={classes.description}
                dangerouslySetInnerHTML={{ __html: getTextStyle() }}
                variant="body2"
                color="textSecondary"
                component="div" // Component "p" bei raw HTML mit Block-Elementen (wie Bildern/PDF-Links) ist invalid HTML
              ></Typography>
            </div>

            {artpiece.location && (
              <Fragment>
                <Typography variant="h5" variantMapping={{ h5: "h2" }} className={classes.mapsHeading}>
                  Das Objekt befindet sich hier:
                </Typography>
                <SimpleMap lat={artpiece.location.split(",")[0]} lon={artpiece.location.split(",")[1]} />
              </Fragment>
            )}
            
          </Container>
        </main>
      </Fragment>
    );
  } catch (e) {
    return (
      <Container className={classes.error} maxWidth="md">
        <CircularProgress aria-label="Lade Details zum Kunstwerk..." />
      </Container>
    );
  }
};

export default ArtpieceDetail;