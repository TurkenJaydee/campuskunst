import React, { Fragment, useState, useEffect } from "react";
import Artpiece from "../Artpiece/Artpiece";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Container from "@material-ui/core/Container";
import Search from "../Search/Search";
import { Typography } from "@material-ui/core";
import API_PATH from "../../localapi/localapi";
import { databases } from "../../localapi/databases.enum";
import SpinningCircle from "../SpinningCircle/SpinningCircle";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    marginTop: "2rem",
  },

  input: {
    textAlign: "center",
    marginTop: "2rem",
  },

  filter: {
    textAlign: "center",
  },

  searchForm: {
    paddingTop: "48px",
  },

  searchBar: {
    backgroundColor: "white",
    width: "50%",
    marginTop: "3rem",
  },

  item: {
    display: "flex",
    justifyContent: "center",
  },

  artpiece: {
    width: "100%",
    maxWidth: "80%",
  },

  notFound: {
    paddingLeft: "1rem",
    marginTop: "2rem",
    fontSize: "1.2rem",
  },

  // A11y: Klasse für unsichtbaren Text, der nur von Screenreadern gelesen wird
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  }
}));

const Artpieces = () => {
  const [artpieces, setArtpieces] = useState([]);
  const [sortedArtpieces, setSortedArtpieces] = useState([]);
  const [filteredArtpieces, setFilteredArtpieces] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [tags, setTags] = useState([]);
  const [sliderValue, setSliderValue] = React.useState([1900, 2020]);

  const fetchData = async () => {
    window.scrollTo(0, 0);
    const res = await fetch(API_PATH(databases.artpieces));
    const resData = await res.json();
    setArtpieces(resData);
    setFilteredArtpieces(resData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const arrayContainsArray = (array1, array2) => {
    return array1.every(function (value) {
      return array2.indexOf(value) >= 0;
    });
  };

  function handleSliderChange(event, newValue) {
    setSliderValue(newValue);
  }

  const valuetext = (value) => {
    return value;
  };

  const onEnterToggle = (e) => {
    return e.key === "Enter" ? setFilteredArtpieces(sortedArtpieces) : null;
  };

  const onToggleFilter = () => {
    setFilteredArtpieces(sortedArtpieces);
  };

  useEffect(() => {
    let tagList = [...tags];
    let filteredTags = [...new Set(tagList)];
    let uniqueDuplicates = [...new Set(tagList.filter((item, index) => tagList.indexOf(item) !== index))];

    if (uniqueDuplicates.toString() !== "") {
      filteredTags = filteredTags.filter((e) => e !== uniqueDuplicates.toString());
      setTags(filteredTags);
    }

    const searchRegex = searchValue && new RegExp(`${searchValue}`, "gi");
    const result = artpieces.filter(
      (artpiece) =>
        (!searchRegex || searchRegex.test(artpiece.name)) &&
        (!filteredTags || arrayContainsArray(filteredTags, artpiece.tags)) &&
        (!sliderValue || (parseInt(artpiece.date, 10) >= sliderValue[0] && parseInt(artpiece.date, 10) <= sliderValue[1]))
    );
    setSortedArtpieces(result);
  }, [searchValue, artpieces, tags, sliderValue]);

  const classes = useStyles();

  if (artpieces.length > 0) {
    return (
      <Fragment>
        <Helmet>
          <title>Kunstwerke - Campuskunst</title>
        </Helmet>
        <Fade in={true} timeout={1500}>
          {/* Semantic Fix: component="main" rendert ein echtes <main> Tag, statt div mit role="main" */}
          <Container maxWidth="lg" component="main">
            
            {/* A11y Fix: Dynamische Statusmeldungen (Live Region) für Filterergebnisse */}
            <div aria-live="polite" className={classes.srOnly}>
              {filteredArtpieces.length} {filteredArtpieces.length === 1 ? "Ergebnis" : "Ergebnisse"} gefunden.
            </div>

            <Grid container spacing={4}>
              <Grid className={classes.input} item xs={12}>
                <Search
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  tags={tags}
                  setTags={setTags}
                  value={sliderValue}
                  valuetext={valuetext}
                  onChange={handleSliderChange}
                  min={1970}
                  max={2020}
                  toggleFilter={onToggleFilter}
                  toogleFilterOnEnter={onEnterToggle}
                />
                <Typography className={classes.mainHeading} variant="h4" component="h1" align="left" display="block">
                  Suchergebnisse:
                </Typography>
              </Grid>

              <Fragment>
                {filteredArtpieces.length > 0 ? (
                  filteredArtpieces.map((artpiece, index) => {
                    return (
                      <Grid className={classes.item} item xs={12} sm={6} md={4} key={index}>
                        <Artpiece
                          className={classes.artpiece}
                          name={artpiece.name}
                          subtitle={artpiece.subtitle}
                          image={artpiece.image_1}
                          tag={artpiece.tags}
                          date={artpiece.date}
                          artist={artpiece.artist}
                          alt={artpiece.alt_text}
                        />
                      </Grid>
                    );
                  })
                ) : (
                  // A11y Fix: Klarer Text in einem Absatz (p) mit alert-Rolle, wenn nichts gefunden wird
                  <Typography component="p" role="alert" className={classes.notFound}>
                    Es wurden keine Kunstwerke gefunden, die den Suchkriterien entsprechen.
                  </Typography>
                )}
              </Fragment>
            </Grid>
          </Container>
        </Fade>
      </Fragment>
    );
  } else {
    // A11y Fix: Lade-Bereich mit aria-busy markieren
    return (
      <div aria-busy="true" aria-label="Lade Kunstwerke">
        <SpinningCircle />
      </div>
    );
  }
};

export default Artpieces; // Dateinamen-Export sollte idealerweise großgeschrieben sein (Best Practice für React-Komponenten)