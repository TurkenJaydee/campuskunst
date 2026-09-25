import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import styles from "./hamburgers.min.css";

const useStyles = makeStyles((theme) => ({
  toggleButtonWrapper: {
    position: 'absolute',
    zIndex: 10000,
    right: '0.5rem',
    lineHeight: '2rem',
    top: '1.2rem',
    width: '3rem',

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  
  // Eigene Klasse für den Button, um den Fokus-Rahmen sauber anzuzeigen
  button: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "5px",
    "&:focus-visible": {
      outline: "3px solid #1976d2",
      outlineOffset: "2px",
      borderRadius: "4px",
    }
  }
}));

// React-Komponenten sollten idealerweise mit einem Großbuchstaben beginnen
const DrawerToggleButton = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.toggleButtonWrapper}>
      {/* A11y Fix: Alle Interaktionen (tabIndex, onKeyPress, role) vom div entfernt. 
          Ein natives <button> kann das alles automatisch und viel besser. */}
      <button
        className={classNames(classes.button, {
          [styles["hamburger"]]: true,
          // Falls dein CSS aktive Zustände unterstützt, gehört hier oft noch rein:
          // [styles["is-active"]]: props.isOpen
        })}
        onClick={props.click}
        type="button"
        // A11y Fix: Klares Label und Status (offen/zu) für Screenreader
        aria-label={props.isOpen ? "Menü schließen" : "Hauptmenü öffnen"}
        aria-expanded={props.isOpen ? "true" : "false"}
      >
        <span
          className={classNames({
            [styles["hamburger-inner"]]: true,
          })}
          // A11y Fix: Versteckt die reine CSS-Linie vor Screenreadern
          aria-hidden="true" 
        ></span>
      </button>
    </div>
  );
};

export default DrawerToggleButton;