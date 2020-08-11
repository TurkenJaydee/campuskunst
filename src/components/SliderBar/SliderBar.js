import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2rem",
    marginBottom: '3rem',
  },
}));

const marks = [
  {
    value: 1900,
    label: '1900',
  },
  {
    value: 1920,
    label: '1920',
  },
  {
    value: 1940,
    label: '2000',
  },
  {
    value: 1960,
    label: '2010',
  },
  {
    value: 1980,
    label: '2020',
  },

  {
    value: 2000,
    label: '1900',
  },
  {
    value: 2020,
    label: '2000',
  },
];





const SliderBar = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root} id="jahres-slider">
        <Typography aria-label="Slider Überschrift" gutterBottom>
          Zeitraum
        </Typography>
        <Slider
          value={props.value}
          onChange={props.onChange}
          valueLabelDisplay="auto"
          aria-labelledby="jahres-slider"
          marks={marks}
          valueLabelDisplay="auto"
          min={props.min}
          max={props.max}
          step={20}
        />
      </div>
    </Fragment>
  );
};

export default SliderBar;
