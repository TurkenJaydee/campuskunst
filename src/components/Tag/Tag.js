import React, { Fragment, useState } from "react";
import Chip from "@material-ui/core/Chip";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core";

const Tag = (props) => {
  const [isToggled, setToggle] = useState(false);

  const removeTag = (name) => (event) => {
    props.onClick(name);
    setToggle((prevStatus) => !prevStatus);
  };

  const addTag = (event) => {
    props.onClick(event.target.innerText);
    setToggle((prevStatus) => !prevStatus);
  };

  const useStyles = makeStyles((theme) => ({
    chip: {
        height: '2.5rem',
        borderRadius: '1000px',
        fontWeight: '600',
        fontSize: '1rem',
    },
    chipDelete: {
        height: '2.5rem',
        borderRadius: '1000px',
        fontWeight: '600',
        fontSize: '1rem',
    },
  }));

  const classes = useStyles();

  const returnTagJSX = () => {
    return isToggled ? (
      <Chip
        className={classes.chipDelete}
        clickable
        key={props.index}
        color='primary'
        variant={isToggled ? "default" : "outlined"}
        label={props.name}
        onDelete={removeTag(props.name)}
        onClick={addTag}
        icon={props.icon}
      />
    ) : (
      <Chip
        className={classes.chip}
        clickable
        key={props.index}
        color='primary'
        variant={isToggled ? "default" : "outlined"}
        label={props.name}
        onClick={addTag}
        icon={props.icon}
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
