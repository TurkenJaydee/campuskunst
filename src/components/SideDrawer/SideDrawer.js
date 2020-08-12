import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import PaletteIcon from "@material-ui/icons/Palette";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles({
  sideDrawer: (props) => ({
    height: "100%",
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255)",
    boxShadow: "1px 0px 7px rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: "0",
    left: "100%",
    width: "70%",
    maxWidth: "400px",
    zIndex: "200",
    transform: `translateX(${props.show ? "-80%" : "0"})`,
    transition: "transform 0.3s ease-out",

    "& ul": {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    "& li": {
      margin: "0.5rem 0",
    },

    "& a": {
      color: "rgba(0, 0, 0)",
      textDecoration: "none",
      fontSize: "1.2rem",
    },

    "& .MuiListItem-root": {
      "& .MuiListItemIcon-root": {
        minWidth: "32px",

        "& .MuiSvgIcon-root": {
          fill: "rgba(0, 0, 0)",
        },
      },
    },
  }),
});

const sideDrawer = (props) => {
  const classes = useStyles(props);

  return (
    <nav className={classes.sideDrawer} aria-label="navigation">
      <List>
        <li>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link className={classes.navLink} to="/">
                  Start
                </Link>
              }
            />
          </ListItem>
        </li>
        <li>
          <ListItem button>
            <ListItemIcon>
              <PaletteIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link className={classes.navLink} to="/kunstwerke">
                  Kunstwerke
                </Link>
              }
            />
          </ListItem>
        </li>
        <li>
          <ListItem button>
            <ListItemIcon>
              <LocalLibraryIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link className={classes.navLink} to="/referenzen">
                  Referenzen
                </Link>
              }
            />
          </ListItem>
        </li>
        <li>
          <ListItem button>
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link className={classes.navLink} to="/quellen">
                  Links
                </Link>
              }
            />
          </ListItem>
        </li>
      </List>
    </nav>
  );
};

export default sideDrawer;
