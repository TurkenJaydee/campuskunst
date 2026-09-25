import React, { Fragment, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import Footer from "./Footer/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import SideDrawer from "./SideDrawer/SideDrawer";
import Toolbar from "./Toolbar/Toolbar";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainContent: {
    flexGrow: 1,
  },
}));

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [fontSize, setFontSize] = useState();
  const classes = useStyles();

  const calcFontSize = (value) => {
    return fontSize ? `${value * `1.${fontSize}`}rem` : `${value}rem`;
  };

  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            overflowY: "scroll !important",
          },
        },
      },
      MuiDrawer: {
        paper: {
          "@media (max-width:599px)": {
            width: "12rem",
          },
          "@media (min-width:600px)": {
            width: "16rem",
          },
          "@media (min-width:960px)": {
            width: "20rem",
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          fontSize: calcFontSize(1.3),
        },
      },
      MuiButton: {
        containedSizeLarge: {
          fontSize: calcFontSize(0.9),
        },
      },
      MuiChip: {
        root: {
          fontSize: calcFontSize(0.8125),
        },
        sizeSmall: {
          height: calcFontSize(1.5),
          borderRadius: "100rem",
        },
        outlined: {
          fontSize: calcFontSize(1),
          height: calcFontSize(2.5),
        },
        clickable: {
          fontSize: calcFontSize(1),
          height: calcFontSize(2.5),
        },
      },
    },
    typography: {
      fontFamily: ["Muli", "Montserrat", "Helvetica Neue", "sans-serif"].join(","),
      body1: {
        fontSize: calcFontSize(1),
        lineHeight: calcFontSize(1.5),
        "@media (min-width:420px)": {
          fontSize: calcFontSize(1.3),
          lineHeight: calcFontSize(2),
        },
      },
      body2: {
        fontSize: calcFontSize(1),
        lineHeight: calcFontSize(1.5),
        "@media (min-width:600px)": {
          fontSize: calcFontSize(1.3),
          lineHeight: calcFontSize(2),
        },
      },
      subtitle1: {
        fontSize: calcFontSize(1.3),
      },
      subtitle2: {
        fontSize: calcFontSize(1.1),
      },
      h1: {
        fontSize: calcFontSize(1.5),
        "@media (min-width:600px)": {
          fontSize: calcFontSize(2),
        },
        "@media (min-width:960px)": {
          fontSize: calcFontSize(2.5),
        },
      },
      h2: {
        fontSize: calcFontSize(2.5),
        lineHeight: calcFontSize(3),
        "@media (min-width:600px)": {
          fontSize: calcFontSize(3.75),
        },
      },
      h4: {
        fontSize: calcFontSize(1.8),
        lineHeight: calcFontSize(3),
        "@media (min-width:600px)": {
          fontSize: calcFontSize(2.1),
        },
      },
      h5: {
        fontSize: calcFontSize(1.2),
        "@media (min-width:600px)": {
          fontSize: calcFontSize(1.5),
        },
      },
      caption: {
        fontSize: calcFontSize(1.5),
      },
    },
  });

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState);
  };

  const drawerCloseHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div className={classes.appContainer}>
      <Helmet>
        {/* A11y Fix: Aussagekräftigerer Standard-Titel (Großschreibung) */}
        <title>Campuskunst - Universität Bremen</title>
        <html lang="de" /> {/* A11y Fix: Sprache des Dokuments festlegen */}
      </Helmet>
      <ThemeProvider theme={theme}>
        <Fragment>
          <CssBaseline />
          <Router>
            <Fragment>
              {/* A11y Fix: role="navigation" entfernt, da wir in Toolbar.js jetzt ein echtes <nav> Tag nutzen */}
              <Toolbar
                drawerClickHandler={drawerToggleClickHandler}
                setFontSize={(e) => setFontSize(e)}
                sideDrawerOpen={sideDrawerOpen} 
              />
            </Fragment>
            <SideDrawer
              show={sideDrawerOpen}
              close={drawerToggleClickHandler}
              closeOnClick={drawerCloseHandler}
            />
            {/* A11y Anmerkung: In deiner Toolbar.js renderst du bereits den Switch-Router, 
                welcher die Views (Start, Artpieces etc.) anzeigt. Falls dieser <main> Container 
                hier in App.js leer bleibt, solltest du ihn entfernen. Die <main>-Rolle ist 
                bereits in den jeweiligen Seiten-Komponenten implementiert. */}
            <main className={classes.mainContent}>
            </main>
          </Router>
          <Footer />
        </Fragment>
      </ThemeProvider>
    </div>
  );
};

export default App;