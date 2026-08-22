import React, { Fragment } from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Route, Switch } from "react-router-dom";
import Start from "../Start/Start";
import Artpieces from "../Artpieces/Artpieces";
import ArtpieceDetail from "../ArtpieceDetail/ArtpieceDetail";
import NotFound from "../NotFound/NotFound";
import Links from "../Links/Links";
import References from "../References/References";
import Slogan from "../Slogan/Slogan";
import { makeStyles } from "@material-ui/core/styles";
import SVG from "react-inlinesvg";
import routes from "../routes";
import { Breadcrumbs } from "../Navigation/index";
import FontSelect from "../FontSelect/FontSelect";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },

  toolbar: {
    backgroundColor: "white",
    position: "fixed",
    top: "0",
    width: "100%",
    overflow: "hidden",
    zIndex: "2",
    borderBottom: "1px solid rgb(240, 241, 243)",
  },

  toolbar_navigation: {
    display: "flex",
    overflow: "hidden",
    marginRight: "3.5rem",
    alignItems: "center",
    justifyContent: "space-between",
    height: "4rem",
  },

  logo: {
    position: "absolute",
    left: "1%",
    top: "10%",
    width: "145px",
    zIndex: "2",
    height: "initial",

    [theme.breakpoints.up("xs")]: {
    width: "145px",
    },

    [theme.breakpoints.up("sm")]: {
    width: "145px",
    },

    [theme.breakpoints.up("md")]: {
    width: "145px",
    },

    [theme.breakpoints.up("lg")]: {
    width: "145px",
    },
  },

  toolbar_navigationItems: {
    fontSize: "1.2rem",
    zIndex: 1000,

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },

    "& ul": {
      listStyleType: "none",
      margin: "0",
      padding: "0",
      display: "flex",
    },

    "& li": {
      padding: "0 2rem",
      fontSize: "1.2rem",
      lineHeight: "2rem",
      position: "relative",

      [theme.breakpoints.down(1100)]: {
        padding: "0 1rem",
      },
    },

    "& a:after": {
      content: `''`,
      top: "3rem",
      left: "0px",
      right: "0px",
      bottom: "0px",
      background: "#BB1212",
      height: "4px",
      position: "absolute",
      opacity: 0,
      transition: "0.2s",
    },

    "& a:hover:after": {
      opacity: 0.3,
    },

    "& a": {
      display: "block",
      position: "relative",
      color: "black",
      fontSize: "1.2rem",
      textDecoration: "none",
      padding: "1rem 0 1rem 0",
    },
  },

  activeLink: {
    position: "relative",

    "&::after": {
      opacity: "1 !important",
    },
  },

  buaLogo: {
    zIndex: 10000,
    width: "70px",
    marginLeft: "2rem",

    [theme.breakpoints.down("sm")]: {
      marginRight: "2rem",
      width: "70px",
    },
  },
}));

const Toolbar = ({ drawerClickHandler, setFontSize }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <header>
        <div className={classes.toolbar} aria-label="navigations-header">
          <nav className={classes.toolbar_navigation}>
            <div>
              <DrawerToggleButton className={classes.toggleButton} click={drawerClickHandler} />
            </div>
            <NavLink exact to={"/"}>
              <SVG
                className={classes.logo}
                src={require("./uni_logo.svg")}
                description="Universität Bremen Logo"
                alt="Uni Logo - Link zur Startseite"
              />
            </NavLink>
            <div className={classes.toolbar_navigationItems}>
              <ul>
                <li>
                  <NavLink exact to={"/"} activeClassName={classes.activeLink}>
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to={"/kunstwerke"} activeClassName={classes.activeLink}>
                    Kunstwerke
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to={"/referenzen"} activeClassName={classes.activeLink}>
                    Referenzen
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to={"/links"} activeClassName={classes.activeLink}>
                    Links
                  </NavLink>
                </li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <FontSelect setFontSize={setFontSize} />
              <img
                className={classes.buaLogo}
                src={require("./logo_archiv_web_200.png")}
                description="Universität Bremen Logo"
                alt="Zentralarchiv Bremen Logo"
              />
            </div>
          </nav>
        </div>
        <Slogan />
      </header>
      <Switch>
        {routes.map(({ path, name }, key) => (
          <Route
            exact
            path={path}
            key={key}
            render={(props) => {
              const crumbs = routes
                // Get all routes that contain the current one.
                .filter(({ path }) => props.match.path.includes(path));
              return <Breadcrumbs crumbs={crumbs} />;
            }}
          />
        ))}
      </Switch>
      <Switch className={classes.links}>
        <Route exact path="/" component={Start} />
        <Route exact path="/kunstwerke" component={Artpieces} />
        <Route exact path="/referenzen" component={References} />
        <Route exact path="/links" component={Links} />
        <Route path="/kunstwerke/:name" component={ArtpieceDetail} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Toolbar;
