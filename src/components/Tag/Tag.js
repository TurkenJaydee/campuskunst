import React, { Fragment, useState } from "react";
import Chip from "@material-ui/core/Chip";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core";

const Tag = (props) => {
  const [isToggled, setToggle] = useState(false);

  // Verhindert Standardverhalten und triggert onClick bei Tastatur-Bedienung
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      addTag(event);
    }
  };

  const removeTag = (name) => (event) => {
    event.stopPropagation(); // Verhindert, dass addTag zusätzlich aufgerufen wird
    props.onClick(name);
    setToggle((prevStatus) => !prevStatus);
  };

  const addTag = (event) => {
    // Falls das Event vom Icon oder Text kommt, holen wir den Namen aus props
    props.onClick(props.name);
    setToggle((prevStatus) => !prevStatus);
  };

  const useStyles = makeStyles((theme) => ({
    chip: {
      borderRadius: '1000px',
      fontWeight: '600',
      "&:focus-visible": {
        outline: "2px solid #1976d2",
        outlineOffset: "2px",
      }
    },
    chipDelete: {
      borderRadius: '1000px',
      fontWeight: '600',
      "&:focus-visible": {
        outline: "2px solid #1976d2",
        outlineOffset: "2px",
      }
    },
  }));

  const classes = useStyles();

  const returnTagJSX = () => {
    return isToggled ? (
      <Chip
        className={classes.chipDelete}
        clickable
        // Button-Rolle für Screenreader bestätigen
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        key={props.index}
        color='primary'
        variant="default"
        label={props.name}
        onDelete={removeTag(props.name)}
        onClick={addTag}
        icon={props.icon}
        // Screenreader sagen, dass der Filter aktiv ist
        aria-pressed="true"
        aria-label={`${props.name} Filter aktiv. Klicken zum Entfernen.`}
      />
    ) : (
      <Chip
        className={classes.chip}
        clickable
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        key={props.index}
        color='primary'
        variant="outlined"
        label={props.name}
        onClick={addTag}
        icon={props.icon}
        // Screenreader sagen, dass der Filter inaktiv ist
        aria-pressed="false"
        aria-label={`${props.name} Filter inaktiv. Klicken zum Aktivieren.`}
      />
    );
  };

  return (
    <Fragment>
      <Fade in={true} timeout={1}>
        {returnTagJSX()}
      </Fade>
    </Fragment>
  );
};

export default Tag;