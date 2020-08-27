import React, { Fragment, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import SideDrawer from "./SideDrawer/SideDrawer";
import Toolbar from "./Toolbar/Toolbar";
import Backdrop from "./Backdrop/Backdrop";
import { Helmet } from "react-helmet";

const App = () => {
  const [sideDrawerOpen, setSideDrawer] = useState(false);

  const [fontSize, setFontSize] = useState();

  const calcFontSize = (value) => {
    return fontSize ? `${value * `1.${fontSize}`}rem` : `${value}rem`;
  };

  const theme = createMuiTheme({
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

    overrides: {
      MuiOutlinedInput: {
        root: {
          fontSize: calcFontSize(1.3),
        },
      },

      MuiButton: {
        containedSizeLarge: {
          fontSize: calcFontSize(0.9),
        }
      },
      MuiChip: {
        root: {
          fontSize: calcFontSize(0.8125),
        },

        sizeSmall: {
          height: calcFontSize(1.5),
          borderRadius: '100rem',
        },

        outlined: {
          fontSize: calcFontSize(1),
          height: calcFontSize(2.5),
        }
      }
    },
  });

  const drawerToggleClickHandler = () => {
    setSideDrawer((prevSideDrawer) => !prevSideDrawer);
  };

  const backdropClickHandler = () => {
    setSideDrawer((prevSideDrawer) => !prevSideDrawer);
  };

  function toggleDrawer() {
    if (sideDrawerOpen) {
      return (
        <Fragment>
          <Backdrop click={backdropClickHandler} />
        </Fragment>
      );
    }
  }

  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <Helmet>
          <title>campuskunst</title>
        </Helmet>
      <ThemeProvider theme={theme}>
        <Fragment>
          <CssBaseline />
          <Router>
            <Fragment>
              <Toolbar role="navigation" drawerClickHandler={drawerToggleClickHandler} setFontSize={(e) => setFontSize(e)} />
            </Fragment>
            {toggleDrawer()}
            <SideDrawer show={sideDrawerOpen} />
          </Router>
          <Footer />
        </Fragment>
      </ThemeProvider>
    </div>
  );
};

export default App;
