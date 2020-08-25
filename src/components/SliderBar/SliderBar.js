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
    value: 1970,
    label: '1970',
  },
  {
    value: 1975,
    label: '',
  },
  {
    value: 1980,
    label: '',
  },
  {
    value: 1985,
    label: '',
  },
  {
    value: 1990,
    label: '',
  },
  {
    value: 1995,
    label: '1995',
  },
  {
    value: 2000,
    label: '',
  },
  {
    value: 2005,
    label: '',
  },
  {
    value: 2010,
    label: '',
  },
  {
    value: 2015,
    label: '',
  },
  {
    value: 2020,
    label: '2020',
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
          min={props.min}
          max={props.max}
          step={5}
        />
      </div>
    </Fragment>
  );
};

export default SliderBar;
