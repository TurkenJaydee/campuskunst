import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PaletteIcon from "@material-ui/icons/Palette";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  sideDrawer: {
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
  },
}));

const SideDrawer = (props) => {
  const classes = useStyles(props);

  return (
    <Fragment>
      <Drawer className={classes.sideDrawer} anchor={"right"} open={props.show} onClose={props.close}>
        <div className={classes.list} role="presentation">
          <nav aria-label="navigation">
            <List>
              <li>
                <ListItem button tabIndex="-1" onClick={props.closeOnClick}>
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
              <li tabIndex="-1">
                <ListItem button tabIndex="-1" onClick={props.closeOnClick}>
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
                <ListItem button tabIndex="-1" onClick={props.closeOnClick}>
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
              <li tabIndex="-1">
                <ListItem button tabIndex="-1" onClick={props.closeOnClick}>
                  <ListItemIcon>
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link className={classes.navLink} to="/links">
                        Links
                      </Link>
                    }
                  />
                </ListItem>
              </li>
            </List>
          </nav>
        </div>
      </Drawer>
    </Fragment>
  );
};

export default SideDrawer;
